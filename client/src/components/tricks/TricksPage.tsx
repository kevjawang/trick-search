import React from 'react'
import { Box, Flex, Spinner } from '@chakra-ui/react'
import TrickCard from './TrickCard'
import { useTrickPaginationQuery } from '../../generated/graphql'
import { PageNav } from '../PageNav'
import { useRouter } from 'next/router'

const TricksPage = () => {
  const { pathname, query } = useRouter();
  const page = query.page ? +query.page : 1;

  const { data, error, loading } = useTrickPaginationQuery({variables: {page: page, perPage: 10}})

  if (error)
    {
      return <div>{error.message}</div>
    }
  if (loading)
  {
    return <Spinner />
  }

  if (!data)
  {
    return <div>Nothing found</div>
  }

  const tricks = data.trickPagination.items
  return (
    <Box>
      <>
        <Flex
          flexDirection="column"
        >
          {tricks.map((trick) => (
            <Box key={trick._id}>
              <TrickCard trick={trick} />
            </Box>
          ))}
        </Flex>
      </>
      <PageNav pathname={pathname} query={query} paginationInfo={data.trickPagination.pageInfo}/>
    </Box>
  )
}

export default TricksPage
