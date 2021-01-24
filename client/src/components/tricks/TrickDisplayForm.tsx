import React from 'react'
import { Flex, Box, Link } from '@chakra-ui/core'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Trick } from '../../generated/graphql'

interface TrickFormProps {
  trick: Trick
}

const TrickDisplayForm = (props: TrickFormProps) => {

  return (
    <Flex rounded="lg" p="10px" flexDirection="column" ml={{ md: 2 }}>
      <Box>
        {props.trick.title}
        <Link isExternal href={props.trick.url}>
          <FaExternalLinkAlt />
        </Link>
      </Box>
      <Box mt={1}>
          Categories
      </Box>
      <Flex direction="row">
        {props.trick.categories?.map((category,index) => ( <Box key={`displaycategory.${index}`}>{category}</Box>) )}
      </Flex>
      <Box mt={1}>
        Tags
      </Box>
      <Flex direction="row">
        {props.trick.trick_tags?.map((tag,index) => ( <Box key={`displaytag.${index}`}>{tag}</Box>) )}
      </Flex>
    </Flex>

  )
}

export default TrickDisplayForm
