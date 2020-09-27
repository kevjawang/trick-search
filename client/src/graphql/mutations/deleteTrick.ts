import { gql } from '@apollo/client'

export const DELETE_TRICK = gql `
  mutation deleteTrick($id: ID!) {
    deleteTrick(id: $id)
  }
`