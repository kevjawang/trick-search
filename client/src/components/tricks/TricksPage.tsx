import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import Loading from '../common/Loading'
import TrickCard from './TrickCard'
import { useTrickPaginationQuery } from '../../generated/graphql'

const TricksPage = () => {

  const { data, error, loading } = useTrickPaginationQuery({variables: {page: 1, perPage: 20}})

  if (error)
    {
      return <div>{error.message}</div>
    }
  if (loading)
  {
    return <Loading/>
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
    </Box>
  )
}

export default TricksPage
