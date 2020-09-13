import { gql } from '@apollo/client'

export const TRICKS = gql`
  query tricks {
    tricks {
      id
      url
      trick_tags
      categories
    }
  }
`
