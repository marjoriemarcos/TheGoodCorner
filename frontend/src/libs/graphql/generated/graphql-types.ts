import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTimeISO: { input: any; output: any; }
};

export type Ad = {
  __typename?: 'Ad';
  category: Category;
  createdAt: Scalars['DateTimeISO']['output'];
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  location: Scalars['String']['output'];
  owner: Scalars['String']['output'];
  picture: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
};

export type AdInput = {
  category: Scalars['ID']['input'];
  description: Scalars['String']['input'];
  location: Scalars['String']['input'];
  owner: Scalars['String']['input'];
  picture: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  tags: Array<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
};

export type Category = {
  __typename?: 'Category';
  ads: Array<Ad>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type CategoryInput = {
  ads: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createdAd: Ad;
  createdCategory: Category;
  createdTag: Tag;
  deleteAdById: Scalars['Boolean']['output'];
  deleteCategoryById: Scalars['Boolean']['output'];
  deleteTagById: Scalars['Boolean']['output'];
  logIn: Scalars['String']['output'];
  replaceAdById: Ad;
  replaceById: Category;
  replaceTagById: Tag;
  singUp: Scalars['String']['output'];
};


export type MutationCreatedAdArgs = {
  data: AdInput;
};


export type MutationCreatedCategoryArgs = {
  data: CategoryInput;
};


export type MutationCreatedTagArgs = {
  data: TagInput;
};


export type MutationDeleteAdByIdArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCategoryByIdArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteTagByIdArgs = {
  id: Scalars['String']['input'];
};


export type MutationLogInArgs = {
  data: UserInputBis;
};


export type MutationReplaceAdByIdArgs = {
  adId: Scalars['String']['input'];
  data: AdInput;
};


export type MutationReplaceByIdArgs = {
  data: CategoryInput;
  id: Scalars['String']['input'];
};


export type MutationReplaceTagByIdArgs = {
  data: TagInput;
  id: Scalars['String']['input'];
};


export type MutationSingUpArgs = {
  data: UserInput;
};

export type Query = {
  __typename?: 'Query';
  getAdByCategoryId: Array<Ad>;
  getAdById: Ad;
  getAds: Array<Ad>;
  getCategories: Array<Category>;
  getCategoryById: Array<Category>;
  getRoles: Array<Roles>;
  getTagById: Array<Tag>;
  getTags: Array<Tag>;
  getUsers: Array<User>;
  getUsersAsAdmin: Array<User>;
  getUsersAsUser: Array<User>;
};


export type QueryGetAdByCategoryIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetAdByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetAdsArgs = {
  needle?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetCategoryByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetTagByIdArgs = {
  id: Scalars['String']['input'];
};

export type Roles = {
  __typename?: 'Roles';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  users: Array<User>;
};

export type Tag = {
  __typename?: 'Tag';
  ads: Array<Ad>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type TagInput = {
  ads?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  hashedPassword: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  roles: Roles;
};

export type UserInput = {
  email: Scalars['String']['input'];
  hashedPassword: Scalars['String']['input'];
  name: Scalars['String']['input'];
  roles: Scalars['ID']['input'];
};

export type UserInputBis = {
  email: Scalars['String']['input'];
  hashedPassword: Scalars['String']['input'];
};

export type GetAdsQueryVariables = Exact<{
  needle?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetAdsQuery = { __typename?: 'Query', getAds: Array<{ __typename?: 'Ad', id: string, title: string, description: string, owner: string, price: number, picture: string, location: string, createdAt: any, category: { __typename?: 'Category', name: string }, tags: Array<{ __typename?: 'Tag', name: string }> }> };

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = { __typename?: 'Query', getCategories: Array<{ __typename?: 'Category', id: string, name: string, createdAt: any }> };

export type GetTagsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTagsQuery = { __typename?: 'Query', getTags: Array<{ __typename?: 'Tag', id: string, name: string, createdAt: any }> };

export type GetAdByCategoryIdQueryVariables = Exact<{
  getAdByCategoryIdId: Scalars['String']['input'];
}>;


export type GetAdByCategoryIdQuery = { __typename?: 'Query', getAdByCategoryId: Array<{ __typename?: 'Ad', id: string, title: string, description: string, owner: string, price: number, picture: string, location: string, createdAt: any, category: { __typename?: 'Category', name: string }, tags: Array<{ __typename?: 'Tag', name: string }> }> };

export type GetAdByIdQueryVariables = Exact<{
  getAdByIdId: Scalars['String']['input'];
}>;


export type GetAdByIdQuery = { __typename?: 'Query', getAdById: { __typename?: 'Ad', id: string, title: string, description: string, owner: string, price: number, picture: string, location: string, createdAt: any, category: { __typename?: 'Category', id: string, name: string }, tags: Array<{ __typename?: 'Tag', id: string, name: string }> } };

export type DeleteAdMutationVariables = Exact<{
  deleteAdByIdId: Scalars['String']['input'];
}>;


export type DeleteAdMutation = { __typename?: 'Mutation', deleteAdById: boolean };

export type GetTagAndCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetTagAndCategoriesQuery = { __typename?: 'Query', getTags: Array<{ __typename?: 'Tag', id: string, name: string }>, getCategories: Array<{ __typename?: 'Category', id: string, name: string }> };

export type CreatedAdMutationVariables = Exact<{
  data: AdInput;
}>;


export type CreatedAdMutation = { __typename?: 'Mutation', createdAd: { __typename?: 'Ad', id: string } };

export type CreatedTagMutationVariables = Exact<{
  data: TagInput;
}>;


export type CreatedTagMutation = { __typename?: 'Mutation', createdTag: { __typename?: 'Tag', name: string } };

export type ReplaceAdMutationVariables = Exact<{
  data: AdInput;
  adId: Scalars['String']['input'];
}>;


export type ReplaceAdMutation = { __typename?: 'Mutation', replaceAdById: { __typename?: 'Ad', id: string } };

export type LogInMutationVariables = Exact<{
  data: UserInputBis;
}>;


export type LogInMutation = { __typename?: 'Mutation', logIn: string };

export type SignupMutationVariables = Exact<{
  data: UserInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', singUp: string };

export type GetRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRolesQuery = { __typename?: 'Query', getRoles: Array<{ __typename?: 'Roles', id: string, name: string }> };


export const GetAdsDocument = gql`
    query GetAds($needle: String) {
  getAds(needle: $needle) {
    id
    title
    description
    owner
    price
    picture
    location
    createdAt
    category {
      name
    }
    tags {
      name
    }
  }
}
    `;

/**
 * __useGetAdsQuery__
 *
 * To run a query within a React component, call `useGetAdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdsQuery({
 *   variables: {
 *      needle: // value for 'needle'
 *   },
 * });
 */
export function useGetAdsQuery(baseOptions?: Apollo.QueryHookOptions<GetAdsQuery, GetAdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdsQuery, GetAdsQueryVariables>(GetAdsDocument, options);
      }
export function useGetAdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdsQuery, GetAdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdsQuery, GetAdsQueryVariables>(GetAdsDocument, options);
        }
export function useGetAdsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAdsQuery, GetAdsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAdsQuery, GetAdsQueryVariables>(GetAdsDocument, options);
        }
export type GetAdsQueryHookResult = ReturnType<typeof useGetAdsQuery>;
export type GetAdsLazyQueryHookResult = ReturnType<typeof useGetAdsLazyQuery>;
export type GetAdsSuspenseQueryHookResult = ReturnType<typeof useGetAdsSuspenseQuery>;
export type GetAdsQueryResult = Apollo.QueryResult<GetAdsQuery, GetAdsQueryVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories {
  getCategories {
    id
    name
    createdAt
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export function useGetCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetCategoriesSuspenseQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetTagsDocument = gql`
    query GetTags {
  getTags {
    id
    name
    createdAt
  }
}
    `;

/**
 * __useGetTagsQuery__
 *
 * To run a query within a React component, call `useGetTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTagsQuery(baseOptions?: Apollo.QueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
      }
export function useGetTagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
        }
export function useGetTagsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTagsQuery, GetTagsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTagsQuery, GetTagsQueryVariables>(GetTagsDocument, options);
        }
export type GetTagsQueryHookResult = ReturnType<typeof useGetTagsQuery>;
export type GetTagsLazyQueryHookResult = ReturnType<typeof useGetTagsLazyQuery>;
export type GetTagsSuspenseQueryHookResult = ReturnType<typeof useGetTagsSuspenseQuery>;
export type GetTagsQueryResult = Apollo.QueryResult<GetTagsQuery, GetTagsQueryVariables>;
export const GetAdByCategoryIdDocument = gql`
    query GetAdByCategoryId($getAdByCategoryIdId: String!) {
  getAdByCategoryId(id: $getAdByCategoryIdId) {
    id
    title
    description
    owner
    price
    picture
    location
    createdAt
    category {
      name
    }
    tags {
      name
    }
  }
}
    `;

/**
 * __useGetAdByCategoryIdQuery__
 *
 * To run a query within a React component, call `useGetAdByCategoryIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdByCategoryIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdByCategoryIdQuery({
 *   variables: {
 *      getAdByCategoryIdId: // value for 'getAdByCategoryIdId'
 *   },
 * });
 */
export function useGetAdByCategoryIdQuery(baseOptions: Apollo.QueryHookOptions<GetAdByCategoryIdQuery, GetAdByCategoryIdQueryVariables> & ({ variables: GetAdByCategoryIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdByCategoryIdQuery, GetAdByCategoryIdQueryVariables>(GetAdByCategoryIdDocument, options);
      }
export function useGetAdByCategoryIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdByCategoryIdQuery, GetAdByCategoryIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdByCategoryIdQuery, GetAdByCategoryIdQueryVariables>(GetAdByCategoryIdDocument, options);
        }
export function useGetAdByCategoryIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAdByCategoryIdQuery, GetAdByCategoryIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAdByCategoryIdQuery, GetAdByCategoryIdQueryVariables>(GetAdByCategoryIdDocument, options);
        }
export type GetAdByCategoryIdQueryHookResult = ReturnType<typeof useGetAdByCategoryIdQuery>;
export type GetAdByCategoryIdLazyQueryHookResult = ReturnType<typeof useGetAdByCategoryIdLazyQuery>;
export type GetAdByCategoryIdSuspenseQueryHookResult = ReturnType<typeof useGetAdByCategoryIdSuspenseQuery>;
export type GetAdByCategoryIdQueryResult = Apollo.QueryResult<GetAdByCategoryIdQuery, GetAdByCategoryIdQueryVariables>;
export const GetAdByIdDocument = gql`
    query GetAdById($getAdByIdId: String!) {
  getAdById(id: $getAdByIdId) {
    id
    title
    description
    owner
    price
    picture
    location
    createdAt
    category {
      id
      name
    }
    tags {
      id
      name
    }
  }
}
    `;

/**
 * __useGetAdByIdQuery__
 *
 * To run a query within a React component, call `useGetAdByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAdByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAdByIdQuery({
 *   variables: {
 *      getAdByIdId: // value for 'getAdByIdId'
 *   },
 * });
 */
export function useGetAdByIdQuery(baseOptions: Apollo.QueryHookOptions<GetAdByIdQuery, GetAdByIdQueryVariables> & ({ variables: GetAdByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAdByIdQuery, GetAdByIdQueryVariables>(GetAdByIdDocument, options);
      }
export function useGetAdByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAdByIdQuery, GetAdByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAdByIdQuery, GetAdByIdQueryVariables>(GetAdByIdDocument, options);
        }
export function useGetAdByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAdByIdQuery, GetAdByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAdByIdQuery, GetAdByIdQueryVariables>(GetAdByIdDocument, options);
        }
export type GetAdByIdQueryHookResult = ReturnType<typeof useGetAdByIdQuery>;
export type GetAdByIdLazyQueryHookResult = ReturnType<typeof useGetAdByIdLazyQuery>;
export type GetAdByIdSuspenseQueryHookResult = ReturnType<typeof useGetAdByIdSuspenseQuery>;
export type GetAdByIdQueryResult = Apollo.QueryResult<GetAdByIdQuery, GetAdByIdQueryVariables>;
export const DeleteAdDocument = gql`
    mutation DeleteAd($deleteAdByIdId: String!) {
  deleteAdById(id: $deleteAdByIdId)
}
    `;
export type DeleteAdMutationFn = Apollo.MutationFunction<DeleteAdMutation, DeleteAdMutationVariables>;

/**
 * __useDeleteAdMutation__
 *
 * To run a mutation, you first call `useDeleteAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdMutation, { data, loading, error }] = useDeleteAdMutation({
 *   variables: {
 *      deleteAdByIdId: // value for 'deleteAdByIdId'
 *   },
 * });
 */
export function useDeleteAdMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAdMutation, DeleteAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAdMutation, DeleteAdMutationVariables>(DeleteAdDocument, options);
      }
export type DeleteAdMutationHookResult = ReturnType<typeof useDeleteAdMutation>;
export type DeleteAdMutationResult = Apollo.MutationResult<DeleteAdMutation>;
export type DeleteAdMutationOptions = Apollo.BaseMutationOptions<DeleteAdMutation, DeleteAdMutationVariables>;
export const GetTagAndCategoriesDocument = gql`
    query GetTagAndCategories {
  getTags {
    id
    name
  }
  getCategories {
    id
    name
  }
}
    `;

/**
 * __useGetTagAndCategoriesQuery__
 *
 * To run a query within a React component, call `useGetTagAndCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTagAndCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTagAndCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTagAndCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetTagAndCategoriesQuery, GetTagAndCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTagAndCategoriesQuery, GetTagAndCategoriesQueryVariables>(GetTagAndCategoriesDocument, options);
      }
export function useGetTagAndCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTagAndCategoriesQuery, GetTagAndCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTagAndCategoriesQuery, GetTagAndCategoriesQueryVariables>(GetTagAndCategoriesDocument, options);
        }
export function useGetTagAndCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetTagAndCategoriesQuery, GetTagAndCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetTagAndCategoriesQuery, GetTagAndCategoriesQueryVariables>(GetTagAndCategoriesDocument, options);
        }
export type GetTagAndCategoriesQueryHookResult = ReturnType<typeof useGetTagAndCategoriesQuery>;
export type GetTagAndCategoriesLazyQueryHookResult = ReturnType<typeof useGetTagAndCategoriesLazyQuery>;
export type GetTagAndCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetTagAndCategoriesSuspenseQuery>;
export type GetTagAndCategoriesQueryResult = Apollo.QueryResult<GetTagAndCategoriesQuery, GetTagAndCategoriesQueryVariables>;
export const CreatedAdDocument = gql`
    mutation CreatedAd($data: AdInput!) {
  createdAd(data: $data) {
    id
  }
}
    `;
export type CreatedAdMutationFn = Apollo.MutationFunction<CreatedAdMutation, CreatedAdMutationVariables>;

/**
 * __useCreatedAdMutation__
 *
 * To run a mutation, you first call `useCreatedAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatedAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createdAdMutation, { data, loading, error }] = useCreatedAdMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatedAdMutation(baseOptions?: Apollo.MutationHookOptions<CreatedAdMutation, CreatedAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatedAdMutation, CreatedAdMutationVariables>(CreatedAdDocument, options);
      }
export type CreatedAdMutationHookResult = ReturnType<typeof useCreatedAdMutation>;
export type CreatedAdMutationResult = Apollo.MutationResult<CreatedAdMutation>;
export type CreatedAdMutationOptions = Apollo.BaseMutationOptions<CreatedAdMutation, CreatedAdMutationVariables>;
export const CreatedTagDocument = gql`
    mutation CreatedTag($data: TagInput!) {
  createdTag(data: $data) {
    name
  }
}
    `;
export type CreatedTagMutationFn = Apollo.MutationFunction<CreatedTagMutation, CreatedTagMutationVariables>;

/**
 * __useCreatedTagMutation__
 *
 * To run a mutation, you first call `useCreatedTagMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatedTagMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createdTagMutation, { data, loading, error }] = useCreatedTagMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatedTagMutation(baseOptions?: Apollo.MutationHookOptions<CreatedTagMutation, CreatedTagMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatedTagMutation, CreatedTagMutationVariables>(CreatedTagDocument, options);
      }
export type CreatedTagMutationHookResult = ReturnType<typeof useCreatedTagMutation>;
export type CreatedTagMutationResult = Apollo.MutationResult<CreatedTagMutation>;
export type CreatedTagMutationOptions = Apollo.BaseMutationOptions<CreatedTagMutation, CreatedTagMutationVariables>;
export const ReplaceAdDocument = gql`
    mutation ReplaceAd($data: AdInput!, $adId: String!) {
  replaceAdById(data: $data, adId: $adId) {
    id
  }
}
    `;
export type ReplaceAdMutationFn = Apollo.MutationFunction<ReplaceAdMutation, ReplaceAdMutationVariables>;

/**
 * __useReplaceAdMutation__
 *
 * To run a mutation, you first call `useReplaceAdMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReplaceAdMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [replaceAdMutation, { data, loading, error }] = useReplaceAdMutation({
 *   variables: {
 *      data: // value for 'data'
 *      adId: // value for 'adId'
 *   },
 * });
 */
export function useReplaceAdMutation(baseOptions?: Apollo.MutationHookOptions<ReplaceAdMutation, ReplaceAdMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReplaceAdMutation, ReplaceAdMutationVariables>(ReplaceAdDocument, options);
      }
export type ReplaceAdMutationHookResult = ReturnType<typeof useReplaceAdMutation>;
export type ReplaceAdMutationResult = Apollo.MutationResult<ReplaceAdMutation>;
export type ReplaceAdMutationOptions = Apollo.BaseMutationOptions<ReplaceAdMutation, ReplaceAdMutationVariables>;
export const LogInDocument = gql`
    mutation LogIn($data: UserInputBis!) {
  logIn(data: $data)
}
    `;
export type LogInMutationFn = Apollo.MutationFunction<LogInMutation, LogInMutationVariables>;

/**
 * __useLogInMutation__
 *
 * To run a mutation, you first call `useLogInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logInMutation, { data, loading, error }] = useLogInMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLogInMutation(baseOptions?: Apollo.MutationHookOptions<LogInMutation, LogInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogInMutation, LogInMutationVariables>(LogInDocument, options);
      }
export type LogInMutationHookResult = ReturnType<typeof useLogInMutation>;
export type LogInMutationResult = Apollo.MutationResult<LogInMutation>;
export type LogInMutationOptions = Apollo.BaseMutationOptions<LogInMutation, LogInMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($data: UserInput!) {
  singUp(data: $data)
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const GetRolesDocument = gql`
    query GetRoles {
  getRoles {
    id
    name
  }
}
    `;

/**
 * __useGetRolesQuery__
 *
 * To run a query within a React component, call `useGetRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRolesQuery(baseOptions?: Apollo.QueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
      }
export function useGetRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
        }
export function useGetRolesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
        }
export type GetRolesQueryHookResult = ReturnType<typeof useGetRolesQuery>;
export type GetRolesLazyQueryHookResult = ReturnType<typeof useGetRolesLazyQuery>;
export type GetRolesSuspenseQueryHookResult = ReturnType<typeof useGetRolesSuspenseQuery>;
export type GetRolesQueryResult = Apollo.QueryResult<GetRolesQuery, GetRolesQueryVariables>;