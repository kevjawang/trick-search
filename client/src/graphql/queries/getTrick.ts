import { gql } from '@apollo/client'

export const GET_TRICK = gql`
  query trick($id: ID!) {
    trick(id: $id) {
      id
      title
      url
      trick_tags
      categories
    }
  }
`
