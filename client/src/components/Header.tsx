import React from "react";
import NextLink from "next/link";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  InputGroup,
  Link,
  Spacer,
} from "@chakra-ui/react";
import { FaGithub, FaHome, FaPlus } from "react-icons/fa";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useUser } from "../utils/hooks";

export const Header: React.FC = ({}) => {
  const router = useRouter();
  const [session, loading] = useUser();

  return (
    <Box bgColor="gray.50" p="2px" borderRadius="lg">
      <Flex>
        <Box p="2">
          <Heading size="md">Finding Clips</Heading>
        </Box>
        <Spacer />
        <Box p="2">
          <NextLink href="/" as="/">
            <Link>
              <FaHome size={28} />
            </Link>
          </NextLink>
        </Box>
        {session && session.user.isAdmin && (
          <Box p="2">
            <NextLink href="/create-trick" as="/create-trick">
              <Link>
                <FaPlus size={28} />
              </Link>
            </NextLink>
          </Box>
        )}
        <Box p="2">
          <Link href="https://github.com/kevjawang/trick-search" isExternal>
            <FaGithub size={28} />
          </Link>
        </Box>
      </Flex>
      <Box m="2px">
        <Formik
          initialValues={{
            searchValue: "",
          }}
          onSubmit={(values) => {
            router.push({
              pathname: "/search",
              query: { search: values.searchValue },
            });
          }}
        >
          <Form>
            <InputGroup>
              <Field name="searchValue">
                {({ field, form }) => (
                  <FormControl>
                    <Input
                      {...field}
                      id="searchValue"
                      placeholder="Search..."
                    />
                  </FormControl>
                )}
              </Field>
              <Button type="submit">Search</Button>
            </InputGroup>
          </Form>
        </Formik>
      </Box>
    </Box>
  );
};
