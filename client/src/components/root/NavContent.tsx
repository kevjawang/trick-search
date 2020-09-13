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
    <Flex>
      <Router>
        <List>
          <NavItem to="/" title="Home"/>
        </List>
      </Router>
    </Flex>
  )
}

export default NavContent
