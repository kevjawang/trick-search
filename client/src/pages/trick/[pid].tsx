import React from "react";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import { useTrickQuery } from "../../generated/graphql";
import { Box, Flex, Link } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { EditDeleteButtons } from "../../components/EditDeleteButtons";

const Trick = () => {
  const { query } = useRouter();
  const id = typeof query.pid === "string" ? query.pid : "";
  const { data, error, loading } = useTrickQuery({ variables: { id: id } });

  if (loading) {
    return (
      <Layout>
        <div>Loading...</div>
      </Layout>
    );
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  if (!data || !data.trick) {
    return (
      <Layout>
        <div>Nothing found</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Box>
        <Flex rounded="lg" p="10px" flexDirection="column" ml={{ md: 2 }}>
          <EditDeleteButtons id={id}/>
          <Box>
            {data.trick.title}
            <Link isExternal href={data.trick.url}>
              <FaExternalLinkAlt />
            </Link>
          </Box>
          <Box mt={1}>Categories</Box>
          <Flex direction="row">
            {data.trick.categories?.map((category, index) => (
              <Box key={`displaycategory.${index}`}>{category}</Box>
            ))}
          </Flex>
          <Box mt={1}>Tags</Box>
          <Flex direction="row">
            {data.trick.trick_tags?.map((tag, index) => (
              <Box key={`displaytag.${index}`}>{tag}</Box>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Trick;