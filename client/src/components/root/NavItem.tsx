import React from 'react'
import { PseudoBox, ListIcon, ListItem } from '@chakra-ui/core'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

interface NavItemProps {
  to: string
  title: string
}

const NavItem: React.FC<NavItemProps> = ({to, title}) => {
  const { t } = useTranslation()

  return (
    <ListItem>
      <Link to={to}>
        <PseudoBox
          mx={-2}
          display="flex"
          px="2"
          py="1"
          fontSize="1em"
          outline="none"
        >
          {/* TODO: i18n */}
          {title}
        </PseudoBox>
      </Link>
    </ListItem>
  )
}

export default NavItem
