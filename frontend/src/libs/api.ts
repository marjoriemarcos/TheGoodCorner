import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export const client = new ApolloClient({
	uri: "http://localhost:4000/",
	cache: new InMemoryCache(),
});

export const GET_ADS = gql`
query Query($needle: String) {
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

export const GET_AD = gql`
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
      name
    }
    tags {
      name
    }
  }
}
`;

export const GET_CATEGORIES = gql`
query GetCategories {
  getCategories {
    id
    name
    createdAt
  }
}
`;

export const GET_ADS_BY_CATEGORY_ID = gql`
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

export const GET_ADS_BY_ID = gql`
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

export const DELETE_AD_BY_ID = gql `
mutation Mutation($deleteAdByIdId: String!) {
  deleteAdById(id: $deleteAdByIdId)
}
`;

export const GET_CATEGORIES_AND_TAGS = gql `
query GetTags {
  getTags {
    id
    name
  }
  getCategories {
    id
    name
  }
}
`

export const CREATED_AD = gql `
mutation Mutation($data: AdInput!) {
  createdAd(data: $data) {
    id
  }
}
`;

export const REPLACE_AD_BY_ID = gql `
mutation Mutation($data: AdInput!, $adId: String!) {
  replaceAdById(data: $data, adId: $adId) {
    id
  }
}
`;



