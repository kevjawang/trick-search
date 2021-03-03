import React from "react";
import NextLink from "next/link";
import { Box, Button, FormControl, Input, Link } from "@chakra-ui/react";
import { FaHome, FaPlus } from "react-icons/fa";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";

export const Header: React.FC = ({}) => {
  const router = useRouter();

  return (
    <Box>
      <Box>
        <NextLink href="/" as="/">
          <Link>
            <FaHome />
          </Link>
        </NextLink>
      </Box>
      <Box>
        <NextLink href="/create-trick" as="/create-trick">
          <Link>
            <FaPlus />
          </Link>
        </NextLink>
      </Box>
      <Box>
        <Formik
          initialValues={{
            searchValue: "",
          }}
          onSubmit={(values) => {
            console.log(values.searchValue);
            router.push({
              pathname: "/search",
              query: { search: values.searchValue },
            });
          }}
        >
          <Form>
            <Field name="searchValue">
              {({ field, form }) => (
                <FormControl>
                  <Input {...field} id="searchValue" />
                </FormControl>
              )}
            </Field>
            <Button type="submit">Search</Button>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};
