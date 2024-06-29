---
category: "Framework"
title: "Laravel備忘録"
thumbnail: "framework-thumbnail.jpg"
created_at: "2024-01-01"
updated_at: ""
tag: ["", ""]
related: ["", ""]
summary: ""
question: ""
---

## 概要



## ルーティング設定

```
```

## データベースの操作

Laravelの標準機能を使ってデータベースの操作をする方法は2つあります。

- Query Builder

- Eloquent ORM

Query BuilderはSQLの命令文を実行する機能で、Laravelから提供されるFacade DBクラスを使います。一方でEloquent ORMはデータベース操作のカプセル化をおこなう機能で、Laravelから提供されるEloquent Modelクラスを継承する必要があり方法が異なります。

### DBクラスのインポート

```
```

### SELECT(単一)

```
```


### SELECT(複数)
```
```

### INSERT
```
```

### UPDATE
```
```

### DELETE
```
```

### TRANSACTION
```
```

### よくある：SELECT結果を配列に変換

### よくある：SELECT結果によりINSERTまたはUPDATE

### よくやる：SELECT結果をコピーしてINSERT






## メールの操作



## 日付の操作

