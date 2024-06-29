---
category: "CLI"
title: "Git備忘録"
thumbnail: "framework-thumbnail.jpg"
created_at: "2024-01-01"
updated_at: ""
tag: ["", ""]
related: ["", ""]
summary: ""
question: ""
---

## 概要

- Gitはソースコード管理をするためのバージョン管理システム

- 開発者がソースコードの変更履歴を記録して、複数人での協力作業を円滑に行うために使用される

- 各開発者が自分のローカルリポジトリでコードの履歴を管理できることが特徴

### 主要機能

- ブランチ管理: そ各開発者が独立したブランチで作業し、後で統合することができる

- マージ: 別のブランチの変更を統合

- コミット: コードの変更を記録する操作

- リポジトリ: プロジェクトファイルとその変更履歴を含むデータベース

- プルリクエスト: 別のブランチへの変更提案とレビュー


## ブランチを切って切り替えたい

現在のブランチから新しいブランチを作成します。

```
git branch {ブランチ名}
```

新しく作成したブランチに切り替えます。

```
git checkout {ブランチ名}
```

なお、ブランチの作成と切り替えを一度に行うコマンドもあります。

```
git checkout -b {ブランチ名}
```


## コミットメッセージを変更したい

### 直前のコミットメッセージを変更

直前のコミットメッセージを変更するには、git commit --amend コマンドを使用します。
このコマンドを実行すると、エディタが開き、新しいメッセージに編集できます。

```
git commit --amend
```

エディタが開いたら、コミットメッセージを変更して保存します。


### 過去のコミットメッセージを変更

過去のコミットメッセージを変更するには、git rebase -i コマンドを使用します。


例えば、直近3つのコミットのメッセージを変更したい場合、以下のコマンドを実行します。

```sh
git rebase -i HEAD~3
```

エディタが開き、以下のようなリストが表示されます。

```
pick abcdef1 Commit message 1
pick abcdef2 Commit message 2
pick abcdef3 Commit message 3
```

変更したいコミットメッセージの行を pick から reword に変更します。

```
reword abcdef1 Commit message 1
pick abcdef2 Commit message 2
reword abcdef3 Commit message 3
```

エディタを保存して閉じると、reword が指定されたコミットごとにメッセージを入力するためのエディタが開きます。
新しいメッセージを入力して保存します。


### 補足

メッセージを変更したコミットが既にリモートリポジトリにプッシュされている場合、強制的にプッシュする必要があります。

```
git push -f
```


## コミットをまとめたい

### 1. リベース

まとめたいコミットの直前のコミットのハッシュを指定します。

```
git rebase -i <直前のコミットのハッシュ>
```

これによりリベースが開始します。エディタが開いてリベースするコミットの一覧が表示されます。

### 2. コミットをsqueshに変更

エディタでpickをsquashに変更します。
最初のコミットはpickのままにし、以降のコミットをsquashに変更します。

```
pick abcdef1 Initial commit
squash abcdef2 Second commit
squash abcdef3 Third commit
```

エディタを保存して閉じます。

### 3.コミットメッセージの編集

再度エディタが開いてまとめられたコミットメッセージを編集できます。

### 補足

コミットが既にリモートリポジトリにプッシュされている場合、強制的にプッシュする必要があります。

```
git push -f
```

## リリースの履歴を管理したい

### 1.タグの作成

タグを作成するには以下のコマンドを使用します。`v2.0.0`はタグ名です。

```
git tag v2.0.0
```

タグにメッセージをつけることもできます。
```
git tag -a v2.0.0 -m "Version 2.0.0 release"
```


### 2.タグをプッシュする

作成したタグをリモートリポジトリにプッシュします。
```
git push origin v2.0.0
```

なお、全てのタグをプッシュすることもできます。
```
git push origin --tags
```

### 3. リリースノートを作成する

ルートディレクトリにCHANGELOG.mdファイルを作成します。

```bash
touch CHANGELOG.md
```

以下のフォーマットを使用して、 CHANGELOG.md にリリース情報を追加していきます。

```markdown
# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- New feature description.

### Changed
- Change description.

### Fixed
- Bug fix description.

## [1.0.0] - 2024-05-24
### Added
- Initial release.
```

新しいバージョンをリリースするたびに、 CHANGELOG.md に変更内容を追記します。
例えば、バージョン1.1.0をリリースする場合は以下のように記述します。

```markdown
## [1.1.0] - 2024-06-01
### Added
- New feature: User authentication.
- New API endpoints for data retrieval.

### Fixed
- Fixed issue with data synchronization.
- Resolved bug in the user registration process.
```



### 4. GitHub Releasesページでのリリース作成

1. GitHubリポジトリのページに移動します。

2. Releasesをクリックします

3. Create a new releaseをクリックします

4. リリース情報を入力します


- Tag version: ドロップダウンから先ほど作成したタグ（例: v1.0.0）を選択します。

- Release title: リリースのタイトルを入力します（例: Version 1.0.0）。

- Description: CHANGELOG.md からリリースノートをコピーして貼り付けます。以下のように、追加機能、変更点、修正点を記載します。


```markdown
## [1.0.0] - 2024-05-24
### Added
- Initial release with the following features:
  - User authentication
  - Data retrieval API

### Fixed
- None
```

