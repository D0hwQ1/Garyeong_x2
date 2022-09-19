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
-   GetReportBySite(site)
-   GetCommentsByReportId(id)
-   GetCommentById(id)
-   GetProfiles()
-   GetProfileCount()
-   GetProfileById(id)
-   GetProfileByAddress(address)

​/garyeong​/garyeong​/get_all_reports
​/garyeong​/garyeong​/get_comment_by_id​/{id}
​/garyeong​/garyeong​/get_comments_by_report_id​/{reportId}
​/garyeong​/garyeong​/get_profile_by_address​/{address}
​/garyeong​/garyeong​/get_profile_by_id​/{id}
​/garyeong​/garyeong​/get_profiles
​/garyeong​/garyeong​/get_profiles_count
​/garyeong​/garyeong​/get_report_by_id​/{id}
​/garyeong​/garyeong​/get_report_by_target​/{target}
​/garyeong​/garyeong​/get_reports_by_tags​/{tags}
​/garyeong​/garyeong​/get_reports_count
