import React from 'react'
import { Flex } from '@chakra-ui/core'
import { FaQuestionCircle } from 'react-icons/fa'
import { Trick } from '../../types'

interface TrickCardProps {
  trick: Trick
}

const TrickCard: React.FC<TrickCardProps> = ({trick}) => {

  return (
    <Flex
      rounded="lg"
      p="25px"
    >
      <FaQuestionCircle />
      <a>{trick.url}</a>
    </Flex>
  )
}

export default TrickCard
