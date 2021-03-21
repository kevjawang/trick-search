import React from "react";
import { Layout } from "../components/Layout";
import { Box, Flex, Spinner, StackDivider, Stack } from "@chakra-ui/react";
import TrickCard from "../components/TrickCard";
import { useTrickPaginationQuery } from "../generated/graphql";
import { PageNav } from "../components/PageNav";
import { useRouter } from "next/router";

const Index = () => {
  const { pathname, query } = useRouter();
  const page = query.page ? +query.page : 1;

  const { data, error, loading } = useTrickPaginationQuery({
    variables: { page: page, perPage: 5 },
  });

  if (error) {
    return (
      <Layout>
        <div>{error.message}</div>
      </Layout>
    );
  }

  if (loading) {
    return (
      <Layout>
        <Spinner />;
      </Layout>
    );
  }

  if (!data) {
    return (
      <Layout>
        <div>Nothing found</div>
      </Layout>
    );
  }

  const tricks = data.trickPagination.items;
  return (
    <Layout>
      <Box>
        <Stack divider={<StackDivider borderColor="gray.200" />}>
          {tricks.map((trick) => (
            <Box key={trick._id}>
              <TrickCard trick={trick} />
            </Box>
          ))}
        </Stack>
        <PageNav
          pathname={pathname}
          query={query}
          paginationInfo={data.trickPagination.pageInfo}
        />
      </Box>
    </Layout>
  );
};

export default Index;
