# TodoAPI

## 概要

某社向けTodoAPIです。

## フロントエンド仕様

- Boardを作成
- Board内にてPost(各Todo)を作成
- フロントエンドは一部機能のみ実装済み
  - ボード一覧
  - 投稿一覧(＝ボード詳細)、ボードごとの投稿絞り込みは未実装
  - ボード作成
  - 投稿作成
- 調子が悪いときはリロードか、クッキーを削除して再ログインしてください

## バックエンド仕様

アクセス方法、実装API一覧などはspreadsheetに記載

<https://docs.google.com/spreadsheets/d/1uM_1OXTyvKHUFSuEELi1YIcUTegnd0mHinh8F_ACFE4/edit#gid=1895723045>

## ローカル動作方法

git clone後に以下を実施

```bash
yarn
amplify mock api # http://localhost:20002/ にてAPIの検証が可能
yarn run dev # http://localhost:3000/ にてコマンドの実行が可能
```

## APIテスト

```bash
yarn
yarn run jest
```
