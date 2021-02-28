import { useRouter } from "next/router";
import React from "react";
import { Layout } from "../components/Layout";
import { Form, Formik, FieldArray, Field } from "formik";
import { Box, Button, FormLabel } from "@chakra-ui/react";
import { useAddTrickMutation } from "../generated/graphql";
import { TextInputField } from "../components/common/TextInputField";

const CreateTrick = () => {
  const router = useRouter();
  const [addTrick] = useAddTrickMutation();

  return (
    <Layout>
      <Formik
        initialValues={{
          title: "",
          url: "",
          trick_tags: [],
          categories: [],
        }}
        onSubmit={async (values) => {
          await addTrick({ variables: { ...values } });
          //TODO: stay on page if error?
          router.push("/");
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
                    <button onClick={() => push("")}>Add</button>
                  </Box>
                )}
              </FieldArray>
            </Box>
            {/* <TagListField name="trick_tags" label="Tags" items={values.trick_tags}/> */}
            {/* <TagListField name="categories" label="Categories" items={values.categories}/> */}
            <Button type="submit">Submit</Button>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default CreateTrick;
