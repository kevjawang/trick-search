import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/core'
import { useQuery } from '@apollo/client'
import { TricksData } from '../../types'
import { TRICKS } from '../../graphql/queries/tricks'
import TrickCard from './TrickCard'

const TricksPage: React.FC<RouteComponentProps> = () => {
  const { data } = useQuery<TricksData>(TRICKS)
  const tricks = data?.tricks

  return (
    <Box>
      {tricks?.map((trick) => (
        <TrickCard trick={trick} />
      ))}
    </Box>
  )
}

export default TricksPage
