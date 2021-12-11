/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBoard = /* GraphQL */ `
  mutation CreateBoard(
    $input: CreateBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    createBoard(input: $input, condition: $condition) {
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
export const updateBoard = /* GraphQL */ `
  mutation UpdateBoard(
    $input: UpdateBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    updateBoard(input: $input, condition: $condition) {
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
export const deleteBoard = /* GraphQL */ `
  mutation DeleteBoard(
    $input: DeleteBoardInput!
    $condition: ModelBoardConditionInput
  ) {
    deleteBoard(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
