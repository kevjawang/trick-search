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
      <Router>
        <List mt="2em">
          <NavItem to="/" title="Home"/>
          <NavItem to="/" title="Home2"/>
          <NavItem to="/" title="Home3"/>
        </List>
      </Router>
    </Flex>
  )
}

export default NavContent
