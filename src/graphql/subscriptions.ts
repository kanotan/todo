/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBoard = /* GraphQL */ `
  subscription OnCreateBoard {
    onCreateBoard {
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
`;
export const onUpdateBoard = /* GraphQL */ `
  subscription OnUpdateBoard {
    onUpdateBoard {
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
`;
export const onDeleteBoard = /* GraphQL */ `
  subscription OnDeleteBoard {
    onDeleteBoard {
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
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
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
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
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
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
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
  }
`;
