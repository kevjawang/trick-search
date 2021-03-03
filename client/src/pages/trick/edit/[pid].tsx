import React from "react";
import { Form, Formik, FieldArray, Field } from "formik";
import { Box, Button, FormLabel, Input, Spinner } from "@chakra-ui/react";
import {
  useTrickUpdateOneMutation,
  useTrickByIdQuery,
} from "../../../generated/graphql";
import { useRouter } from "next/router";
import { Layout } from "../../../components/Layout";
import { TextInputField } from "../../../components/common/TextInputField";

const TrickEdit = () => {
  const router = useRouter();
  const id = typeof router.query.pid === "string" ? router.query.pid : "";
  const { data, error, loading } = useTrickByIdQuery({ variables: { id: id } });
  const [updateTrick] = useTrickUpdateOneMutation();

  if (loading) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (!data || !data.trickById) {
    return (
      <Layout>
        <div>Nothing found</div>
      </Layout>
    );
  }

  return (
    <Formik
      initialValues={{
        title: data.trickById.title,
        url: data.trickById.url,
        trick_tags: data.trickById.trick_tags,
        categories: data.trickById.categories,
      }}
      onSubmit={async (values) => {
        await updateTrick({
          variables: { filter: { _id: id }, input: { ...values } },
        });
        router.push("/trick/[pid]", `/trick/${id}`);
      }}
    >
      {({ values, isSubmitting }) => (
        <Form>
          <TextInputField name="title" placeholder="Title..." label="Title" />
          <TextInputField
            name="url"
            placeholder="Link to clip..."
            label="Link"
          />
          <Box>
            <FormLabel htmlFor="trick_tags">Tags</FormLabel>
            <FieldArray name="trick_tags">
              {({ remove, push }) => (
                <Box>
                  {values.trick_tags.length > 0 &&
                    values.trick_tags.map((item, index) => (
                      <Box key={index}>
                        <Field name={`trick_tags[${index}]`} />
                        <button onClick={() => remove(index)}>Remove</button>
                      </Box>
                    ))}
                  <Button onClick={() => push("")}>Add</Button>
                </Box>
              )}
            </FieldArray>
          </Box>
          {/* <TagListField name="trick_tags" label="Tags" items={values.trick_tags}/> */}
          {/* <TagListField name="categories" label="Categories" items={values.categories}/> */}
          <Button type="submit">Update</Button>
        </Form>
      )}
    </Formik>
  );
};

export default TrickEdit;
