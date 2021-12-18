import { GraphQLClient } from 'graphql-request';
import { getBoard } from '../src/graphql/queries';
import { createBoard, updateBoard, deleteBoard } from '../src/graphql/mutations';
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

describe('Board Model', () => {
  test('Owner and Other both can get their Boards', async () => {
    const boardName = 'Test Board';
    const testBoard = {
      name: boardName,
      owner: testUsers[0],
    };

    // Test用Boardの作成
    const board = await clients[0].request(createBoard, {input: testBoard});

    // Owner自身によるGetが成功することを確認
    const getByOwner = await clients[0].request(getBoard, {id: board.createBoard.id});
    expect(getByOwner.getBoard.name).toStrictEqual(boardName);

    // Owner以外によるGetが成功することを確認
    const getByOther = await clients[1].request(getBoard, {id: board.createBoard.id});
    expect(getByOther.getBoard.name).toStrictEqual(boardName);
  });

  test('Only owner can update their Boards', async () => {
    const testBoard = {
      name: 'Test Board',
      owner: testUsers[0],
    };

    // Test用Boardの作成
    const board = await clients[0].request(createBoard, {input: testBoard});

    // Owner自身によるUpdateが成功することを確認
    const updatedName0 = 'Updated Test Board by user_0';
    const updatedByOwner = await clients[0].request(updateBoard, {input: {id: board.createBoard.id, name: updatedName0}});
    expect(updatedByOwner.updateBoard.name).toStrictEqual(updatedName0);

    // Owner以外によるUpdateが失敗することを確認
    const updatedName1 = 'Updated Test Board by user_1';
    const updatedByOthers =  clients[1].request(updateBoard, {input: {id: board.createBoard.id, name: updatedName1}});
    await expect(updatedByOthers).rejects.toThrowError('ConditionalCheckFailedException');
  });

  test('Only owner can delete their Boards', async () => {
    const testBoard = {
      name: 'Test Board',
      owner: testUsers[0],
    };

    // Test用Boardの作成
    const board = await clients[0].request(createBoard, {input: testBoard});

    // Owner以外によるDeleteが失敗することを確認
    const deletedByOthers =  clients[1].request(deleteBoard, {input: {id: board.createBoard.id}});
    await expect(deletedByOthers).rejects.toThrowError('ConditionalCheckFailedException');

    // Owner自身によるDeleteが成功することを確認
    const deletedByOwner = await clients[0].request(deleteBoard, {input: {id: board.createBoard.id}});
    expect(deletedByOwner.deleteBoard.id).toStrictEqual(board.createBoard.id);
  });
});