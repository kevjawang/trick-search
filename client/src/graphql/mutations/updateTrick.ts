import { gql } from '@apollo/client'

export const UPDATE_TRICK = gql `
  mutation updateTrick(
    $id: String!
    $title: String!
    $url: String!
    trick_tags: [String!]
    categories: [String!]
  ) {
    updateTrick(
      id: $id
      title: $title
      url: $url
      trick_tags: $trick_tags
      categories: $categories
    )
  }
`
