import React from "react";
import { Box, Flex, Spinner } from "@chakra-ui/react";
import TrickCard from "../components/tricks/TrickCard";
import { useTrickPaginationQuery } from "../generated/graphql";
import { PageNav } from "../components/PageNav";
import { useRouter } from "next/router";
import { Layout } from "../components/Layout";

const Search = () => {
  const { pathname, query } = useRouter();
  const page = query.page ? +query.page : 1;
  const searchValue = typeof(query.search) === "string" && query.search ? query.search : "";

  const { data, error, loading } = useTrickPaginationQuery({
    variables: {
      page: page,
      perPage: 1,
      filter: { search: searchValue },
    },
  });

  if (error) {
    return <div>{error.message}</div>;
  }
  if (loading) {
    return <Spinner />;
  }

  if (!data) {
    return <div>Nothing found</div>;
  }

  const tricks = data.trickPagination.items;
  return (
    <Layout>
      <Box>
        <>
          <Flex flexDirection="column">
            {tricks.map((trick) => (
              <Box key={trick._id}>
                <TrickCard trick={trick} />
              </Box>
            ))}
          </Flex>
        </>
        <PageNav
          pathname={pathname}
          query={query}
          paginationInfo={data.trickPagination.pageInfo}
        />
      </Box>
    </Layout>

  );
};

export default Search;
