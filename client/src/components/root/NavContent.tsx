import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Flex, List } from '@chakra-ui/core'

import NavItem from './NavItem'

interface NavContentProps {
  isMobile?: boolean
}

const NavContent: React.FC<NavContentProps>  = ({
  isMobile = false,
}) => {
  return (
    <Flex
      flexDirection="column"
      h="100%"
    >
      <List mt="2em">
        <NavItem to="/" title="Home"/>
        <NavItem to="/" title="Home2"/>
        <NavItem to="/notfound" title="Not found"/>
      </List>
    </Flex>
  )
}

export default NavContent
