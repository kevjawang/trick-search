import React from 'react'
import { Flex } from '@chakra-ui/core'
import { Trick } from '../../types'

interface TrickCardProps {
  trick: Trick
}

const TrickCard: React.FC<TrickCardProps> = ({trick}) => {

  return (
    <Flex>
      <a>{trick.url}</a>
    </Flex>
  )
}

export default TrickCard
