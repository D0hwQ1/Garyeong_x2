# garyeong

**garyeong** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

## Get started

```
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

```
ignite scaffold chain garyeong --prefix-address garyeong
```

```
ignite scaffold message upload-report target link description tags:strings
ignite scaffold query GetAllReports --response id:uint,creator,target,link,description,tags:strings,recommend:uint,createdAt:int

./garyeongd tx garyeong upload-report ipsi none example "univ,test" --from alice
./garyeongd q garyeong get-all-reports
```

```
ignite scaffold message create-comment reportId:uint comment
ignite scaffold query GetCommentsByReportId reportId:uint --paginated --response comments:Comment

./garyeongd tx garyeong create-comment 0 "Hello, World" --from alice
./garyeongd tx garyeong create-comment 0 "World, Hello" --from bob
./garyeongd q garyeong get-comments-by-report-id 0

ignite scaffold query GetCommentById id:uint --response comment:Comment

./garyeongd tx garyeong upload-report ipsi2 none example "univ,test" --from alice
./garyeongd tx garyeong create-comment 1 "Hello, World2" --from alice
./garyeongd q garyeong get-comments-by-report-id 1
./garyeongd q garyeong get-comment-by-id 2
```
