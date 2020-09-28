import React from 'react'
import { Flex, Box, Link, Image } from '@chakra-ui/core'
import { Link as RouterLink } from 'react-router-dom'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Trick } from '../../types'

interface TrickCardProps {
  trick: Trick
}

const TrickCard: React.FC<TrickCardProps> = ({trick}) => {

  return (
    <Flex
      rounded="lg"
      p="10px"
    >
      <Box>
        <Image
          rounded="lg"
          width={{ md: 150 }}
          src="https://img.youtube.com/vi/HChdtctlmNo/0.jpg"
        />
      </Box>
      <Flex flexDirection="column" ml={{ md: 2 }}>
        <Box mt={{base: 4, md: 0 }} >
          <Box mt={1} display="block">
            <RouterLink to={`/tricks/${trick.id}`}>
              {trick.title}
            </RouterLink>
            <Link href={trick.url} isExternal pl="1" >
              <FaExternalLinkAlt />
            </Link>
          </Box>
        </Box>
        <Box mt={1}>
          { /* TODO: i18n */}
          Categories
        </Box>
        {trick.categories?.map((category) => ( <Box>{category}</Box>) )}
        <Box mt={1}>
          Tags
        </Box>
        <Flex direction="row">
          {trick.trick_tags?.map((category) => ( <Box>{category}</Box>) )}

        </Flex>

      </Flex>
    </Flex>
  )
}

export default TrickCard
