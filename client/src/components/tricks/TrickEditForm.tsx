import React from 'react'
import { useParams } from 'react-router-dom'
import { Form, Formik, FieldArray, Field } from 'formik'
import { Box, FormLabel, Input } from '@chakra-ui/core'
import { TextInputField } from '../../components/common/TextInputField'
import { TagListField } from '../../components/common/TagListField'
import { useUpdateTrickMutation } from '../../generated/graphql'
import { useTrickQuery } from "../../generated/graphql"
import { Trick } from '../../generated/graphql'

interface Params { id: string; }

interface TrickFormProps {
  trick: Trick
}

const TrickEditForm = (props: TrickFormProps) => {
  let { id } = useParams<Params>()

  const [updateTrick] = useUpdateTrickMutation();

  return (
    <Formik
      initialValues={{ title: props.trick.title,
        url: props.trick.url,
        trick_tags: props.trick.trick_tags,
        categories: props.trick.categories}}
      onSubmit={async (values) => {
        await updateTrick({ variables: { id: id, ...values }})
      }}
    >
      {({values, isSubmitting}) => (
        <Form>
          <TextInputField name="title" placeholder="Title..." label="Title"/>
          <TextInputField name="url" placeholder="Link to clip..." label="Link"/>
          <Box>
            <FormLabel htmlFor="trick_tags">Tags</FormLabel>
            <FieldArray name="trick_tags">
              {({ insert, remove, push }) => (
                <Box>
                  {values.trick_tags.length > 0 && values.trick_tags.map((item, index) => (
                    <Box key={index}>
                      <Field name={`trick_tags[${index}]`}/>
                      <button onClick={() => remove(index)}>Remove</button>
                    </Box>
                  ))}
                  <button onClick={() => push('')}>Add</button>
                </Box>
              )}
            </FieldArray>
          </Box>
          {/* <TagListField name="trick_tags" label="Tags" items={values.trick_tags}/> */}
          {/* <TagListField name="categories" label="Categories" items={values.categories}/> */}
          <button type="submit">Update</button>
        </Form>
      )}
    </Formik>
  )
}

export default TrickEditForm
