import { gql } from "@apollo/client";

export const GET_ADS = gql`
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

export const GET_CATEGORIES = gql`
query GetCategories {
  getCategories {
    id
    name
    createdAt
  }
}
`;

export const GET_TAGS = gql`
query GetTags {
  getTags {
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
mutation DeleteAd($deleteAdByIdId: String!) {
  deleteAdById(id: $deleteAdByIdId)
}
`;

export const GET_CATEGORIES_AND_TAGS = gql `
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
`

export const CREATED_AD = gql `
mutation CreatedAd($data: AdInput!) {
  createdAd(data: $data) {
    id
  }
}
`;

export const CREATED_TAG = gql `
mutation CreatedTag($data: TagInput!) {
  createdTag(data: $data) {
    name
  }
}
`;

export const REPLACE_AD_BY_ID = gql `
mutation ReplaceAd($data: AdInput!, $adId: String!) {
  replaceAdById(data: $data, adId: $adId) {
    id
  }
}
`;

export const LOGIN = gql`
mutation LogIn($data: UserInputBis!) {
  logIn(data: $data)
}
`

export const SINGUP = gql`
mutation Signup($data: UserInput!) {
  singUp(data: $data)
}
`;

export const GET_ROLES = gql`
query GetRoles {
  getRoles {
    id
    name
  }
}
`;

export const SIGNUP = gql`
mutation Signup($data: UserInput!) {
  singUp(data: $data)
}
`;
