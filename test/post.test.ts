import { GraphQLClient } from 'graphql-request';
import { getPost } from '../src/graphql/queries';
import { StatusEnum } from '../src/API';
import { createBoard, createPost, updatePost, deletePost } from '../src/graphql/mutations';
import { cognitoJwtGenerator } from './cognitoJwtGenerator';

//2ユーザーからリクエストを行えるよう2つのクライアントを作成
const testUsers = ['user_0', 'user_1'];
const clients: GraphQLClient[] = [];

clients.push(new GraphQLClient('http://localhost:20002/graphql', {
  headers: {
    Authorization: cognitoJwtGenerator(testUsers[0])
  },
}));

clients.push(new GraphQLClient('http://localhost:20002/graphql', {
  headers: {
    Authorization: cognitoJwtGenerator(testUsers[1])
  },
}));

describe('Post Model', () => {
  test('Owner and Other both can get their Posts', async () => {
    const testBoard = {
      name: 'Test Board',
      owner: testUsers[0],
    };

    // Test用Boardの作成
    const board = await clients[0].request(createBoard, {input: testBoard});
    // Test用Postの作成
    const postTitle = 'Test Post'
    const testPost = {
      title: postTitle,
      status: StatusEnum.ready,
      boardID: board.createBoard.id,
      owner: testUsers[0],
    }
    const post = await clients[0].request(createPost, {input: testPost});

    // Owner自身によるGetが成功することを確認
    const getByOwner = await clients[0].request(getPost, {id: post.createPost.id});
    expect(getByOwner.getPost.title).toStrictEqual(postTitle);

    // Owner以外によるGetが成功することを確認
    const getByOther = await clients[1].request(getPost, {id: post.createPost.id});
    expect(getByOther.getPost.title).toStrictEqual(postTitle);
  });

  test('Only owner can update their Posts', async () => {
    const testBoard = {
      name: 'Test Board',
      owner: testUsers[0],
    };

    // Test用Boardの作成
    const board = await clients[0].request(createBoard, {input: testBoard});

    // Test用Postの作成
    const postTitle = 'Test Post'
    const testPost = {
      title: postTitle,
      status: 'ready',
      boardID: board.createBoard.id,
      owner: testUsers[0],
    }
    const post = await clients[0].request(createPost, {input: testPost});

    // Owner自身によるUpdateが成功することを確認
    const updatedTitle0 = 'Updated Test Post by user_0';
    const updatedByOwner = await clients[0].request(updatePost, {input: {id: post.createPost.id, title: updatedTitle0}});
    expect(updatedByOwner.updatePost.title).toStrictEqual(updatedTitle0);

    // Owner以外によるUpdateが失敗することを確認
    const updatedTitle1 = 'Updated Test Post by user_1';
    const updatedByOthers =  clients[1].request(updatePost, {input: {id: post.createPost.id, title: updatedTitle1}});
    await expect(updatedByOthers).rejects.toThrowError('ConditionalCheckFailedException');
  });

  test('Only owner can delete their Posts', async () => {
    const testBoard = {
      name: 'Test Board',
      owner: testUsers[0],
    };

    // Test用Boardの作成
    const board = await clients[0].request(createBoard, {input: testBoard});
    // Test用Postの作成
    const postTitle = 'Test Post'
    const testPost = {
      title: postTitle,
      status: 'ready',
      boardID: board.createBoard.id,
      owner: testUsers[0],
    }
    const post = await clients[0].request(createPost, {input: testPost});

    // Owner以外によるDeleteが失敗することを確認
    const deletedByOthers =  clients[1].request(deletePost, {input: {id: post.createPost.id}});
    await expect(deletedByOthers).rejects.toThrowError('ConditionalCheckFailedException');

    // Owner自身によるDeleteが成功することを確認
    const deletedByOwner = await clients[0].request(deletePost, {input: {id: post.createPost.id}});
    expect(deletedByOwner.deletePost.id).toStrictEqual(post.createPost.id);
  });
});