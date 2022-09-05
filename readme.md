# garyeong

우리말샘을 살펴보면...

> 가령 : 가정하여 말하여. / 예를 들어.

> 가령가령-하다 : 깨끗하고 곱다.

## How to Start Garyeong_x2

```

cd core
ignite scaffold chain garyeong --prefix-address garyeong
ignite chain build -o ./
ignite chain serve
```

## RPCs

-   UploadReport(report)
-   CreateComment(reportId, message)
-   SetProfile(profile)
-   SendRecommend(reportId)

-   GetAllReports()
-   GetReportsCount()
-   GetReportById(id)
-   GetReportByTarget(target)
-   GetReportsByTags(tags)
-   GetCommentsByReportId(id)
-   GetCommentById(id)
-   GetProfiles()
-   GetProfileCount()
-   GetProfileById(id)
-   GetProfileByAddress(address)
