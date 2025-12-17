# repositories

- 外部リソースにアクセスする処理を置くディレクトリ
- 外部へのアクセスだけを書きロジックはここには書かない
- 例えばAPIアクセスの場合はfetchして結果をオブジェクトにマッピングして返すだけしかしない

## 命名ルール

- 現状はこのアプリ専用のAPIにしかアクセスしないためそれを前提とした命名としている

### ディレクトリ

- 一階層目
  - アクセス先のURLから判断する
  - `/blogs` へのアクセスの場合は `blogs`
  - `/blogs/1/comments` へのアクセスの場合は `blogs-comments`
- 二階層目
  - 処理内容に応じて `list` `search` `detail` `create` `update` `delete` などのディレクトリを作成する

### ファイル

- 以下の構成を基本とする

```
index.ts // 環境変数に応じてrepositoryとrepository.mockを差し替える
repository.ts // fetch処理を実行する
repository.mock.ts // ダミーのレスポンスを返す
responseSchema.ts // レスポンスのバリデーションとオブジェクトへのマッピング
responseSchema.test.ts // responseSchemaのテスト
```

### 関数

- repository内のの関数名は以下の値を組み合わせたものとする
  - `get` `create` `update` `delete` など
  - 第一階層のディレクトリ名(単数系/複数系は処理に応じて使い分ける)
  - `GET blogs/1/comments` の場合は `getBlogComments`
