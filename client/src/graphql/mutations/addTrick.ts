import { gql } from '@apollo/client'

export const ADD_TRICK = gql `
  mutation addTrick(
    $title: String!
    $url: String!
    $trick_tags: [String!]
    $categories: [String!]
  ) {
    addTrick(
      title: $title
      url: $url
      trick_tags: $trick_tags
      categories: $categories
    ) {
      title
      id
      url
      trick_tags
      categories
    }
  }
`
