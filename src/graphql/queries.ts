/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBoard = /* GraphQL */ `
  query GetBoard($id: ID!) {
    getBoard(id: $id) {
      id
      name
      owner
      createdAt
      updatedAt
      posts {
        items {
          id
          title
          content
          status
          owner
          createdAt
          updatedAt
          boardID
        }
        nextToken
      }
    }
  }
`;
export const listBoards = /* GraphQL */ `
  query ListBoards(
    $filter: ModelBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        owner
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const listBoardsByOwner = /* GraphQL */ `
  query ListBoardsByOwner(
    $owner: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBoardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoardsByOwner(
      owner: $owner
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        owner
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      content
      status
      owner
      createdAt
      updatedAt
      boardID
      board {
        id
        name
        owner
        createdAt
        updatedAt
        posts {
          nextToken
        }
      }
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        status
        owner
        createdAt
        updatedAt
        boardID
        board {
          id
          name
          owner
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listPostsByBoard = /* GraphQL */ `
  query ListPostsByBoard(
    $boardID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostsByBoard(
      boardID: $boardID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        content
        status
        owner
        createdAt
        updatedAt
        boardID
        board {
          id
          name
          owner
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listPostsByOwner = /* GraphQL */ `
  query ListPostsByOwner(
    $owner: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostsByOwner(
      owner: $owner
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        content
        status
        owner
        createdAt
        updatedAt
        boardID
        board {
          id
          name
          owner
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const searchPosts = /* GraphQL */ `
  query SearchPosts(
    $filter: SearchablePostFilterInput
    $sort: SearchablePostSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchPosts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        title
        content
        status
        owner
        createdAt
        updatedAt
        boardID
        board {
          id
          name
          owner
          createdAt
          updatedAt
        }
      }
      nextToken
      total
    }
  }
`;
