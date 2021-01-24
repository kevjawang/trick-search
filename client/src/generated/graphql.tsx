import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  tricks: Array<Trick>;
  trick?: Maybe<Trick>;
};


export type QueryTrickArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  addTrick?: Maybe<Trick>;
  deleteTrick?: Maybe<Scalars['Boolean']>;
  updateTrick?: Maybe<Scalars['Boolean']>;
};


export type MutationAddTrickArgs = {
  title: Scalars['String'];
  url: Scalars['String'];
  trick_tags?: Maybe<Array<Scalars['String']>>;
  categories?: Maybe<Array<Scalars['String']>>;
};


export type MutationDeleteTrickArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateTrickArgs = {
  id: Scalars['ID'];
  title: Scalars['String'];
  url: Scalars['String'];
  trick_tags?: Maybe<Array<Scalars['String']>>;
  categories?: Maybe<Array<Scalars['String']>>;
};

export type Trick = {
  __typename?: 'Trick';
  id: Scalars['ID'];
  title: Scalars['String'];
  url: Scalars['String'];
  trick_tags: Array<Scalars['String']>;
  categories: Array<Scalars['String']>;
};

export type AddTrickMutationVariables = Exact<{
  title: Scalars['String'];
  url: Scalars['String'];
  trick_tags?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  categories?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type AddTrickMutation = (
  { __typename?: 'Mutation' }
  & { addTrick?: Maybe<(
    { __typename?: 'Trick' }
    & Pick<Trick, 'title' | 'id' | 'url' | 'trick_tags' | 'categories'>
  )> }
);

export type DeleteTrickMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DeleteTrickMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'deleteTrick'>
);

export type UpdateTrickMutationVariables = Exact<{
  id: Scalars['ID'];
  title: Scalars['String'];
  url: Scalars['String'];
  trick_tags?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  categories?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type UpdateTrickMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'updateTrick'>
);

export type TrickQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TrickQuery = (
  { __typename?: 'Query' }
  & { trick?: Maybe<(
    { __typename?: 'Trick' }
    & Pick<Trick, 'id' | 'title' | 'url' | 'trick_tags' | 'categories'>
  )> }
);

export type TricksQueryVariables = Exact<{ [key: string]: never; }>;


export type TricksQuery = (
  { __typename?: 'Query' }
  & { tricks: Array<(
    { __typename?: 'Trick' }
    & Pick<Trick, 'id' | 'title' | 'url' | 'trick_tags' | 'categories'>
  )> }
);


export const AddTrickDocument = gql`
    mutation addTrick($title: String!, $url: String!, $trick_tags: [String!], $categories: [String!]) {
  addTrick(title: $title, url: $url, trick_tags: $trick_tags, categories: $categories) {
    title
    id
    url
    trick_tags
    categories
  }
}
    `;
export type AddTrickMutationFn = Apollo.MutationFunction<AddTrickMutation, AddTrickMutationVariables>;

/**
 * __useAddTrickMutation__
 *
 * To run a mutation, you first call `useAddTrickMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddTrickMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addTrickMutation, { data, loading, error }] = useAddTrickMutation({
 *   variables: {
 *      title: // value for 'title'
 *      url: // value for 'url'
 *      trick_tags: // value for 'trick_tags'
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useAddTrickMutation(baseOptions?: Apollo.MutationHookOptions<AddTrickMutation, AddTrickMutationVariables>) {
        return Apollo.useMutation<AddTrickMutation, AddTrickMutationVariables>(AddTrickDocument, baseOptions);
      }
export type AddTrickMutationHookResult = ReturnType<typeof useAddTrickMutation>;
export type AddTrickMutationResult = Apollo.MutationResult<AddTrickMutation>;
export type AddTrickMutationOptions = Apollo.BaseMutationOptions<AddTrickMutation, AddTrickMutationVariables>;
export const DeleteTrickDocument = gql`
    mutation deleteTrick($id: ID!) {
  deleteTrick(id: $id)
}
    `;
export type DeleteTrickMutationFn = Apollo.MutationFunction<DeleteTrickMutation, DeleteTrickMutationVariables>;

/**
 * __useDeleteTrickMutation__
 *
 * To run a mutation, you first call `useDeleteTrickMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTrickMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTrickMutation, { data, loading, error }] = useDeleteTrickMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteTrickMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTrickMutation, DeleteTrickMutationVariables>) {
        return Apollo.useMutation<DeleteTrickMutation, DeleteTrickMutationVariables>(DeleteTrickDocument, baseOptions);
      }
export type DeleteTrickMutationHookResult = ReturnType<typeof useDeleteTrickMutation>;
export type DeleteTrickMutationResult = Apollo.MutationResult<DeleteTrickMutation>;
export type DeleteTrickMutationOptions = Apollo.BaseMutationOptions<DeleteTrickMutation, DeleteTrickMutationVariables>;
export const UpdateTrickDocument = gql`
    mutation updateTrick($id: ID!, $title: String!, $url: String!, $trick_tags: [String!], $categories: [String!]) {
  updateTrick(id: $id, title: $title, url: $url, trick_tags: $trick_tags, categories: $categories)
}
    `;
export type UpdateTrickMutationFn = Apollo.MutationFunction<UpdateTrickMutation, UpdateTrickMutationVariables>;

/**
 * __useUpdateTrickMutation__
 *
 * To run a mutation, you first call `useUpdateTrickMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTrickMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTrickMutation, { data, loading, error }] = useUpdateTrickMutation({
 *   variables: {
 *      id: // value for 'id'
 *      title: // value for 'title'
 *      url: // value for 'url'
 *      trick_tags: // value for 'trick_tags'
 *      categories: // value for 'categories'
 *   },
 * });
 */
export function useUpdateTrickMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTrickMutation, UpdateTrickMutationVariables>) {
        return Apollo.useMutation<UpdateTrickMutation, UpdateTrickMutationVariables>(UpdateTrickDocument, baseOptions);
      }
export type UpdateTrickMutationHookResult = ReturnType<typeof useUpdateTrickMutation>;
export type UpdateTrickMutationResult = Apollo.MutationResult<UpdateTrickMutation>;
export type UpdateTrickMutationOptions = Apollo.BaseMutationOptions<UpdateTrickMutation, UpdateTrickMutationVariables>;
export const TrickDocument = gql`
    query Trick($id: ID!) {
  trick(id: $id) {
    id
    title
    url
    trick_tags
    categories
  }
}
    `;

/**
 * __useTrickQuery__
 *
 * To run a query within a React component, call `useTrickQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrickQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrickQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTrickQuery(baseOptions: Apollo.QueryHookOptions<TrickQuery, TrickQueryVariables>) {
        return Apollo.useQuery<TrickQuery, TrickQueryVariables>(TrickDocument, baseOptions);
      }
export function useTrickLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrickQuery, TrickQueryVariables>) {
          return Apollo.useLazyQuery<TrickQuery, TrickQueryVariables>(TrickDocument, baseOptions);
        }
export type TrickQueryHookResult = ReturnType<typeof useTrickQuery>;
export type TrickLazyQueryHookResult = ReturnType<typeof useTrickLazyQuery>;
export type TrickQueryResult = Apollo.QueryResult<TrickQuery, TrickQueryVariables>;
export const TricksDocument = gql`
    query tricks {
  tricks {
    id
    title
    url
    trick_tags
    categories
  }
}
    `;

/**
 * __useTricksQuery__
 *
 * To run a query within a React component, call `useTricksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTricksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTricksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTricksQuery(baseOptions?: Apollo.QueryHookOptions<TricksQuery, TricksQueryVariables>) {
        return Apollo.useQuery<TricksQuery, TricksQueryVariables>(TricksDocument, baseOptions);
      }
export function useTricksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TricksQuery, TricksQueryVariables>) {
          return Apollo.useLazyQuery<TricksQuery, TricksQueryVariables>(TricksDocument, baseOptions);
        }
export type TricksQueryHookResult = ReturnType<typeof useTricksQuery>;
export type TricksLazyQueryHookResult = ReturnType<typeof useTricksLazyQuery>;
export type TricksQueryResult = Apollo.QueryResult<TricksQuery, TricksQueryVariables>;