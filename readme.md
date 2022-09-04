# garyeong

**garyeong** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

## Get started

```
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

```
ignite scaffold chain garyeong --prefix-address garyeong
ignite scaffold message upload-report target link description tags:strings
ignite scaffold query GetAllReports --response id:uint,creator,target,link,description,tags:strings,recommend:uint,createdAt:int
./garyeongd tx garyeong upload-report ipsi none example "univ,test" --from alice./garyeongd q garyeong get-all-reports
```
