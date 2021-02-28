import React, { InputHTMLAttributes } from "react";
import { useField } from "formik";
import { FieldArray } from 'formik';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  name: string
  items: string[]
}

const TagInput = (props: {name: string, value: string}) => {
  const [curValue, setCurValue] = React.useState(props.value)
  return(
    <Input name={props.name} value={curValue} placeholder="..."
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {setCurValue(event.target.value)}}/>
    )
}

export const TagListField: React.FC<InputFieldProps> = ({
  label,
  size: _,
  ...props
}) => {
  const [field, {error} ] = useField(props)

  return (
    <Box>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <FieldArray name={field.name}>
        {({ insert, remove, push }) => (
          <Box>
            {props.items.length > 0 && props.items.map((item, index) => (
              <Box key={index}>
                <TagInput name={`${field.name}[${index}]`} value={item}/>
                <button onClick={() => remove(index)}>Remove</button>
              </Box>
            ))}
            <button onClick={() => push('')}>Add</button>
          </Box>
        )}
      </FieldArray>
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </Box>
  )
}