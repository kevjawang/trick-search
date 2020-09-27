import { gql } from '@apollo/client'

export const TRICKS = gql`
  query tricks {
    tricks {
      id
      title
      url
      trick_tags
      categories
    }
  }
`
