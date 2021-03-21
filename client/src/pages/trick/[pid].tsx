import React from "react";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import { useTrickByIdQuery } from "../../generated/graphql";
import { Box, Flex, HStack, Link, Spinner, Tag } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { EditDeleteButtons } from "../../components/EditDeleteButtons";

const Trick = () => {
  const { query } = useRouter();
  const id = typeof query.pid === "string" ? query.pid : "";
  const { data, error, loading } = useTrickByIdQuery({ variables: { id: id } });

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
    <Layout>
      <Box>
        <Flex rounded="lg" p="10px" flexDirection="column" ml={{ md: 2 }}>
          <EditDeleteButtons id={id} />
          <Box>
            {data.trickById.title}
            <Link isExternal href={data.trickById.url}>
              <FaExternalLinkAlt />
            </Link>
          </Box>
          <Box mt={1}>Categories</Box>
          <HStack>
            {data.trickById.categories?.map((category, index) => (
              <Tag key={`displaycategory.${index}`} m="2px" p="2px" size="md">
                {category}
              </Tag>
            ))}
          </HStack>
          <Box mt={1}>Tags</Box>
          <HStack>
            {data.trickById.trick_tags?.map((tag, index) => (
              <Tag key={`displaytag.${index}`} m="2px" p="2px" size="md">
                {tag}
              </Tag>
            ))}
          </HStack>
        </Flex>
      </Box>
    </Layout>
  );
};

export default Trick;
