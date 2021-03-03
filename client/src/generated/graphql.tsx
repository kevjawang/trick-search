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
  /** The `ID` scalar type represents a unique MongoDB identifier in collection. MongoDB by default use 12-byte ObjectId value (https://docs.mongodb.com/manual/reference/bson-types/#objectid). But MongoDB also may accepts string or integer as correct values for _id field. */
  MongoID: any;
};

export type Query = {
  __typename?: 'Query';
  trickById?: Maybe<Trick>;
  trickByIds: Array<Trick>;
  trickOne?: Maybe<Trick>;
  trickMany: Array<Trick>;
  trickCount?: Maybe<Scalars['Int']>;
  trickConnection?: Maybe<TrickConnection>;
  trickPagination?: Maybe<TrickPagination>;
};


export type QueryTrickByIdArgs = {
  _id: Scalars['MongoID'];
};


export type QueryTrickByIdsArgs = {
  _ids: Array<Scalars['MongoID']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindByIdsTrickInput>;
};


export type QueryTrickOneArgs = {
  filter?: Maybe<FilterFindOneTrickInput>;
  skip?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindOneTrickInput>;
};


export type QueryTrickManyArgs = {
  filter?: Maybe<FilterFindManyTrickInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<SortFindManyTrickInput>;
};


export type QueryTrickCountArgs = {
  filter?: Maybe<FilterCountTrickInput>;
};


export type QueryTrickConnectionArgs = {
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  filter?: Maybe<FilterFindManyTrickInput>;
  sort?: Maybe<SortConnectionTrickEnum>;
};


export type QueryTrickPaginationArgs = {
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyTrickInput>;
  sort?: Maybe<SortFindManyTrickInput>;
};

export type Trick = {
  __typename?: 'Trick';
  title: Scalars['String'];
  url: Scalars['String'];
  trick_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  skateboarder?: Maybe<Scalars['String']>;
  _id: Scalars['MongoID'];
};


export enum SortFindByIdsTrickInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterFindOneTrickInput = {
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  trick_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  skateboarder?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindOneTrickOperatorsInput>;
  OR?: Maybe<Array<FilterFindOneTrickInput>>;
  AND?: Maybe<Array<FilterFindOneTrickInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindOneTrickOperatorsInput = {
  _id?: Maybe<FilterFindOneTrick_IdOperatorsInput>;
};

export type FilterFindOneTrick_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindOneTrickInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterFindManyTrickInput = {
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  trick_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  skateboarder?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterFindManyTrickOperatorsInput>;
  OR?: Maybe<Array<FilterFindManyTrickInput>>;
  AND?: Maybe<Array<FilterFindManyTrickInput>>;
  search?: Maybe<Scalars['String']>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterFindManyTrickOperatorsInput = {
  _id?: Maybe<FilterFindManyTrick_IdOperatorsInput>;
};

export type FilterFindManyTrick_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortFindManyTrickInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type FilterCountTrickInput = {
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  trick_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  skateboarder?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterCountTrickOperatorsInput>;
  OR?: Maybe<Array<FilterCountTrickInput>>;
  AND?: Maybe<Array<FilterCountTrickInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterCountTrickOperatorsInput = {
  _id?: Maybe<FilterCountTrick_IdOperatorsInput>;
};

export type FilterCountTrick_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

/** A connection to a list of items. */
export type TrickConnection = {
  __typename?: 'TrickConnection';
  /** Total object count. */
  count: Scalars['Int'];
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Information to aid in pagination. */
  edges: Array<TrickEdge>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type TrickEdge = {
  __typename?: 'TrickEdge';
  /** The item at the end of the edge */
  node: Trick;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export enum SortConnectionTrickEnum {
  IdDesc = '_ID_DESC',
  IdAsc = '_ID_ASC'
}

/** List of items with pagination. */
export type TrickPagination = {
  __typename?: 'TrickPagination';
  /** Total object count. */
  count?: Maybe<Scalars['Int']>;
  /** Array of objects. */
  items?: Maybe<Array<Trick>>;
  /** Information to aid in pagination. */
  pageInfo: PaginationInfo;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  currentPage: Scalars['Int'];
  perPage: Scalars['Int'];
  pageCount?: Maybe<Scalars['Int']>;
  itemCount?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  hasPreviousPage?: Maybe<Scalars['Boolean']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create one document with mongoose defaults, setters, hooks and validation */
  trickCreateOne?: Maybe<CreateOneTrickPayload>;
  /** Creates Many documents with mongoose defaults, setters, hooks and validation */
  trickCreateMany?: Maybe<CreateManyTrickPayload>;
  /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  trickUpdateById?: Maybe<UpdateByIdTrickPayload>;
  /** Update one document: 1) Retrieve one document via findOne. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
  trickUpdateOne?: Maybe<UpdateOneTrickPayload>;
  /** Update many documents without returning them: Use Query.update mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  trickUpdateMany?: Maybe<UpdateManyTrickPayload>;
  /** Remove one document: 1) Retrieve one document and remove with hooks via findByIdAndRemove. 2) Return removed document. */
  trickRemoveById?: Maybe<RemoveByIdTrickPayload>;
  /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
  trickRemoveOne?: Maybe<RemoveOneTrickPayload>;
  /** Remove many documents without returning them: Use Query.remove mongoose method. Do not apply mongoose defaults, setters, hooks and validation.  */
  trickRemoveMany?: Maybe<RemoveManyTrickPayload>;
};


export type MutationTrickCreateOneArgs = {
  record: CreateOneTrickInput;
};


export type MutationTrickCreateManyArgs = {
  records: Array<CreateManyTrickInput>;
};


export type MutationTrickUpdateByIdArgs = {
  _id: Scalars['MongoID'];
  record: UpdateByIdTrickInput;
};


export type MutationTrickUpdateOneArgs = {
  record: UpdateOneTrickInput;
  filter?: Maybe<FilterUpdateOneTrickInput>;
  sort?: Maybe<SortUpdateOneTrickInput>;
  skip?: Maybe<Scalars['Int']>;
};


export type MutationTrickUpdateManyArgs = {
  record: UpdateManyTrickInput;
  filter?: Maybe<FilterUpdateManyTrickInput>;
  sort?: Maybe<SortUpdateManyTrickInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type MutationTrickRemoveByIdArgs = {
  _id: Scalars['MongoID'];
};


export type MutationTrickRemoveOneArgs = {
  filter?: Maybe<FilterRemoveOneTrickInput>;
  sort?: Maybe<SortRemoveOneTrickInput>;
};


export type MutationTrickRemoveManyArgs = {
  filter: FilterRemoveManyTrickInput;
  limit?: Maybe<Scalars['Int']>;
};

export type CreateOneTrickPayload = {
  __typename?: 'CreateOneTrickPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Created document */
  record?: Maybe<Trick>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type ErrorInterface = {
  /** Generic error message */
  message?: Maybe<Scalars['String']>;
};

export type CreateOneTrickInput = {
  title: Scalars['String'];
  url: Scalars['String'];
  trick_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  skateboarder?: Maybe<Scalars['String']>;
};

export type CreateManyTrickPayload = {
  __typename?: 'CreateManyTrickPayload';
  /** Documents IDs */
  recordIds: Array<Scalars['MongoID']>;
  /** Created documents */
  records?: Maybe<Array<Trick>>;
  /** Number of created documents */
  createdCount: Scalars['Int'];
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type CreateManyTrickInput = {
  title: Scalars['String'];
  url: Scalars['String'];
  trick_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  skateboarder?: Maybe<Scalars['String']>;
};

export type UpdateByIdTrickPayload = {
  __typename?: 'UpdateByIdTrickPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Trick>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateByIdTrickInput = {
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  trick_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  skateboarder?: Maybe<Scalars['String']>;
};

export type UpdateOneTrickPayload = {
  __typename?: 'UpdateOneTrickPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Updated document */
  record?: Maybe<Trick>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateOneTrickInput = {
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  trick_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  skateboarder?: Maybe<Scalars['String']>;
};

export type FilterUpdateOneTrickInput = {
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  trick_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  skateboarder?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateOneTrickOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateOneTrickInput>>;
  AND?: Maybe<Array<FilterUpdateOneTrickInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateOneTrickOperatorsInput = {
  _id?: Maybe<FilterUpdateOneTrick_IdOperatorsInput>;
};

export type FilterUpdateOneTrick_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateOneTrickInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type UpdateManyTrickPayload = {
  __typename?: 'UpdateManyTrickPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type UpdateManyTrickInput = {
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  trick_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  skateboarder?: Maybe<Scalars['String']>;
};

export type FilterUpdateManyTrickInput = {
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  trick_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  skateboarder?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterUpdateManyTrickOperatorsInput>;
  OR?: Maybe<Array<FilterUpdateManyTrickInput>>;
  AND?: Maybe<Array<FilterUpdateManyTrickInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterUpdateManyTrickOperatorsInput = {
  _id?: Maybe<FilterUpdateManyTrick_IdOperatorsInput>;
};

export type FilterUpdateManyTrick_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortUpdateManyTrickInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type RemoveByIdTrickPayload = {
  __typename?: 'RemoveByIdTrickPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Trick>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type RemoveOneTrickPayload = {
  __typename?: 'RemoveOneTrickPayload';
  /** Document ID */
  recordId?: Maybe<Scalars['MongoID']>;
  /** Removed document */
  record?: Maybe<Trick>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveOneTrickInput = {
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  trick_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  skateboarder?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveOneTrickOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveOneTrickInput>>;
  AND?: Maybe<Array<FilterRemoveOneTrickInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveOneTrickOperatorsInput = {
  _id?: Maybe<FilterRemoveOneTrick_IdOperatorsInput>;
};

export type FilterRemoveOneTrick_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export enum SortRemoveOneTrickInput {
  IdAsc = '_ID_ASC',
  IdDesc = '_ID_DESC'
}

export type RemoveManyTrickPayload = {
  __typename?: 'RemoveManyTrickPayload';
  /** Affected documents number */
  numAffected?: Maybe<Scalars['Int']>;
  /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
  error?: Maybe<ErrorInterface>;
};

export type FilterRemoveManyTrickInput = {
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  trick_tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  skateboarder?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['MongoID']>;
  /** List of *indexed* fields that can be filtered via operators. */
  _operators?: Maybe<FilterRemoveManyTrickOperatorsInput>;
  OR?: Maybe<Array<FilterRemoveManyTrickInput>>;
  AND?: Maybe<Array<FilterRemoveManyTrickInput>>;
};

/** For performance reason this type contains only *indexed* fields. */
export type FilterRemoveManyTrickOperatorsInput = {
  _id?: Maybe<FilterRemoveManyTrick_IdOperatorsInput>;
};

export type FilterRemoveManyTrick_IdOperatorsInput = {
  gt?: Maybe<Scalars['MongoID']>;
  gte?: Maybe<Scalars['MongoID']>;
  lt?: Maybe<Scalars['MongoID']>;
  lte?: Maybe<Scalars['MongoID']>;
  ne?: Maybe<Scalars['MongoID']>;
  in?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  nin?: Maybe<Array<Maybe<Scalars['MongoID']>>>;
  exists?: Maybe<Scalars['Boolean']>;
};

export type TrickCreateOneMutationVariables = Exact<{
  input: CreateOneTrickInput;
}>;


export type TrickCreateOneMutation = (
  { __typename?: 'Mutation' }
  & { trickCreateOne?: Maybe<(
    { __typename?: 'CreateOneTrickPayload' }
    & { record?: Maybe<(
      { __typename?: 'Trick' }
      & Pick<Trick, '_id' | 'title' | 'url' | 'trick_tags' | 'categories' | 'skateboarder'>
    )> }
  )> }
);

export type TrickRemoveByIdMutationVariables = Exact<{
  id: Scalars['MongoID'];
}>;


export type TrickRemoveByIdMutation = (
  { __typename?: 'Mutation' }
  & { trickRemoveById?: Maybe<(
    { __typename?: 'RemoveByIdTrickPayload' }
    & Pick<RemoveByIdTrickPayload, 'recordId'>
  )> }
);

export type TrickUpdateOneMutationVariables = Exact<{
  input: UpdateOneTrickInput;
  filter: FilterUpdateOneTrickInput;
}>;


export type TrickUpdateOneMutation = (
  { __typename?: 'Mutation' }
  & { trickUpdateOne?: Maybe<(
    { __typename?: 'UpdateOneTrickPayload' }
    & { record?: Maybe<(
      { __typename?: 'Trick' }
      & Pick<Trick, '_id' | 'title' | 'url' | 'trick_tags' | 'categories' | 'skateboarder'>
    )> }
  )> }
);

export type TrickByIdQueryVariables = Exact<{
  id: Scalars['MongoID'];
}>;


export type TrickByIdQuery = (
  { __typename?: 'Query' }
  & { trickById?: Maybe<(
    { __typename?: 'Trick' }
    & Pick<Trick, '_id' | 'title' | 'url' | 'trick_tags' | 'categories' | 'skateboarder'>
  )> }
);

export type TrickPaginationQueryVariables = Exact<{
  page?: Maybe<Scalars['Int']>;
  perPage?: Maybe<Scalars['Int']>;
  filter?: Maybe<FilterFindManyTrickInput>;
}>;


export type TrickPaginationQuery = (
  { __typename?: 'Query' }
  & { trickPagination?: Maybe<(
    { __typename?: 'TrickPagination' }
    & Pick<TrickPagination, 'count'>
    & { items?: Maybe<Array<(
      { __typename?: 'Trick' }
      & Pick<Trick, '_id' | 'title' | 'url' | 'trick_tags' | 'categories' | 'skateboarder'>
    )>>, pageInfo: (
      { __typename?: 'PaginationInfo' }
      & Pick<PaginationInfo, 'currentPage' | 'perPage' | 'pageCount' | 'itemCount' | 'hasNextPage' | 'hasPreviousPage'>
    ) }
  )> }
);


export const TrickCreateOneDocument = gql`
    mutation trickCreateOne($input: CreateOneTrickInput!) {
  trickCreateOne(record: $input) {
    record {
      _id
      title
      url
      trick_tags
      categories
      skateboarder
    }
  }
}
    `;
export type TrickCreateOneMutationFn = Apollo.MutationFunction<TrickCreateOneMutation, TrickCreateOneMutationVariables>;

/**
 * __useTrickCreateOneMutation__
 *
 * To run a mutation, you first call `useTrickCreateOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTrickCreateOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [trickCreateOneMutation, { data, loading, error }] = useTrickCreateOneMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useTrickCreateOneMutation(baseOptions?: Apollo.MutationHookOptions<TrickCreateOneMutation, TrickCreateOneMutationVariables>) {
        return Apollo.useMutation<TrickCreateOneMutation, TrickCreateOneMutationVariables>(TrickCreateOneDocument, baseOptions);
      }
export type TrickCreateOneMutationHookResult = ReturnType<typeof useTrickCreateOneMutation>;
export type TrickCreateOneMutationResult = Apollo.MutationResult<TrickCreateOneMutation>;
export type TrickCreateOneMutationOptions = Apollo.BaseMutationOptions<TrickCreateOneMutation, TrickCreateOneMutationVariables>;
export const TrickRemoveByIdDocument = gql`
    mutation trickRemoveById($id: MongoID!) {
  trickRemoveById(_id: $id) {
    recordId
  }
}
    `;
export type TrickRemoveByIdMutationFn = Apollo.MutationFunction<TrickRemoveByIdMutation, TrickRemoveByIdMutationVariables>;

/**
 * __useTrickRemoveByIdMutation__
 *
 * To run a mutation, you first call `useTrickRemoveByIdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTrickRemoveByIdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [trickRemoveByIdMutation, { data, loading, error }] = useTrickRemoveByIdMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTrickRemoveByIdMutation(baseOptions?: Apollo.MutationHookOptions<TrickRemoveByIdMutation, TrickRemoveByIdMutationVariables>) {
        return Apollo.useMutation<TrickRemoveByIdMutation, TrickRemoveByIdMutationVariables>(TrickRemoveByIdDocument, baseOptions);
      }
export type TrickRemoveByIdMutationHookResult = ReturnType<typeof useTrickRemoveByIdMutation>;
export type TrickRemoveByIdMutationResult = Apollo.MutationResult<TrickRemoveByIdMutation>;
export type TrickRemoveByIdMutationOptions = Apollo.BaseMutationOptions<TrickRemoveByIdMutation, TrickRemoveByIdMutationVariables>;
export const TrickUpdateOneDocument = gql`
    mutation trickUpdateOne($input: UpdateOneTrickInput!, $filter: FilterUpdateOneTrickInput!) {
  trickUpdateOne(record: $input, filter: $filter) {
    record {
      _id
      title
      url
      trick_tags
      categories
      skateboarder
    }
  }
}
    `;
export type TrickUpdateOneMutationFn = Apollo.MutationFunction<TrickUpdateOneMutation, TrickUpdateOneMutationVariables>;

/**
 * __useTrickUpdateOneMutation__
 *
 * To run a mutation, you first call `useTrickUpdateOneMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useTrickUpdateOneMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [trickUpdateOneMutation, { data, loading, error }] = useTrickUpdateOneMutation({
 *   variables: {
 *      input: // value for 'input'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useTrickUpdateOneMutation(baseOptions?: Apollo.MutationHookOptions<TrickUpdateOneMutation, TrickUpdateOneMutationVariables>) {
        return Apollo.useMutation<TrickUpdateOneMutation, TrickUpdateOneMutationVariables>(TrickUpdateOneDocument, baseOptions);
      }
export type TrickUpdateOneMutationHookResult = ReturnType<typeof useTrickUpdateOneMutation>;
export type TrickUpdateOneMutationResult = Apollo.MutationResult<TrickUpdateOneMutation>;
export type TrickUpdateOneMutationOptions = Apollo.BaseMutationOptions<TrickUpdateOneMutation, TrickUpdateOneMutationVariables>;
export const TrickByIdDocument = gql`
    query trickById($id: MongoID!) {
  trickById(_id: $id) {
    _id
    title
    url
    trick_tags
    categories
    skateboarder
  }
}
    `;

/**
 * __useTrickByIdQuery__
 *
 * To run a query within a React component, call `useTrickByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrickByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrickByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTrickByIdQuery(baseOptions: Apollo.QueryHookOptions<TrickByIdQuery, TrickByIdQueryVariables>) {
        return Apollo.useQuery<TrickByIdQuery, TrickByIdQueryVariables>(TrickByIdDocument, baseOptions);
      }
export function useTrickByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrickByIdQuery, TrickByIdQueryVariables>) {
          return Apollo.useLazyQuery<TrickByIdQuery, TrickByIdQueryVariables>(TrickByIdDocument, baseOptions);
        }
export type TrickByIdQueryHookResult = ReturnType<typeof useTrickByIdQuery>;
export type TrickByIdLazyQueryHookResult = ReturnType<typeof useTrickByIdLazyQuery>;
export type TrickByIdQueryResult = Apollo.QueryResult<TrickByIdQuery, TrickByIdQueryVariables>;
export const TrickPaginationDocument = gql`
    query trickPagination($page: Int, $perPage: Int, $filter: FilterFindManyTrickInput) {
  trickPagination(page: $page, perPage: $perPage, filter: $filter) {
    count
    items {
      _id
      title
      url
      trick_tags
      categories
      skateboarder
    }
    pageInfo {
      currentPage
      perPage
      pageCount
      itemCount
      hasNextPage
      hasPreviousPage
    }
  }
}
    `;

/**
 * __useTrickPaginationQuery__
 *
 * To run a query within a React component, call `useTrickPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useTrickPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTrickPaginationQuery({
 *   variables: {
 *      page: // value for 'page'
 *      perPage: // value for 'perPage'
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useTrickPaginationQuery(baseOptions?: Apollo.QueryHookOptions<TrickPaginationQuery, TrickPaginationQueryVariables>) {
        return Apollo.useQuery<TrickPaginationQuery, TrickPaginationQueryVariables>(TrickPaginationDocument, baseOptions);
      }
export function useTrickPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TrickPaginationQuery, TrickPaginationQueryVariables>) {
          return Apollo.useLazyQuery<TrickPaginationQuery, TrickPaginationQueryVariables>(TrickPaginationDocument, baseOptions);
        }
export type TrickPaginationQueryHookResult = ReturnType<typeof useTrickPaginationQuery>;
export type TrickPaginationLazyQueryHookResult = ReturnType<typeof useTrickPaginationLazyQuery>;
export type TrickPaginationQueryResult = Apollo.QueryResult<TrickPaginationQuery, TrickPaginationQueryVariables>;