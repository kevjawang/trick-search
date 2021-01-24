import React from 'react'
import { Flex, List } from '@chakra-ui/core'

import NavItem from './NavItem'

interface NavContentProps {
  isMobile?: boolean
}

const NavContent = (props: NavContentProps) => {
  return (
    <Flex
      flexDirection="column"
      h="100%"
    >
      <List mt="2em">
        <NavItem to="/" title="Home"/>
        <NavItem to="/notfound" title="Not found"/>
      </List>
    </Flex>
  )
}

export default NavContent
