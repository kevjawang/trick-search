import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { Flex, Box, Link, Image, Editable, EditablePreview, EditableInput } from '@chakra-ui/core'
import { useQuery } from '@apollo/client'
import { Trick } from '../../types'
import { GET_TRICK } from '../../graphql/queries/getTrick'

interface TrickPageProps {
  id: string
}

const TrickCard: React.FC<RouteComponentProps<TrickPageProps>> = ({ match }) => {
  const id = match.params.id

  const { data, error, loading } = useQuery<Trick>(GET_TRICK,
    {variables: { id: id }})

  const trick = data;

  return (
    <Flex
      rounded="lg"
      p="10px"
    >
      <Editable>
        <EditablePreview/>
        <EditableInput/>
      </Editable>
    </Flex>

  )
}

export default TrickCard
