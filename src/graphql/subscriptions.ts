/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBoard = /* GraphQL */ `
  subscription OnCreateBoard($owner: String) {
    onCreateBoard(owner: $owner) {
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
export const onUpdateBoard = /* GraphQL */ `
  subscription OnUpdateBoard($owner: String) {
    onUpdateBoard(owner: $owner) {
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
export const onDeleteBoard = /* GraphQL */ `
  subscription OnDeleteBoard($owner: String) {
    onDeleteBoard(owner: $owner) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($owner: String) {
    onCreatePost(owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($owner: String) {
    onUpdatePost(owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($owner: String) {
    onDeletePost(owner: $owner) {
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
