# API設計書（モック）

## 1. 概要

- Next.jsのAPI Route（/src/app/api/xxx/route.ts）で実装
- データはメモリ上の配列で管理
- 認証チェックはスキップ

## 2. エンドポイント例

### ブログ

- GET /api/blogs
- POST /api/blogs

### 画像

- GET /api/images
- POST /api/images

### Like

- GET /api/likes
- POST /api/likes

### タグ

- GET /api/tags
- POST /api/tags

---

- 各エンドポイントはメモリ上の配列を返すだけ
- 本番DB/API導入時はroute.tsの中身を差し替え
