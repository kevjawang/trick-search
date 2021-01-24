import React from 'react'
import { PseudoBox, ListItem } from '@chakra-ui/core'
import { Link } from 'react-router-dom'
//import { useTranslation } from 'react-i18next'

interface NavItemProps {
  to: string
  title: string
}

const NavItem = (props: NavItemProps) => {
  //const { t } = useTranslation()

  return (
    <ListItem>
      <Link to={props.to}>
        <PseudoBox
          mx={-2}
          display="flex"
          px="2"
          py="1"
          fontSize="1em"
          outline="none"
        >
          {/* TODO: i18n */}
          {props.title}
        </PseudoBox>
      </Link>
    </ListItem>
  )
}

export default NavItem
