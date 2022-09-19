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

|             RPC List             | REST API                                                    |
| :------------------------------: | :---------------------------------------------------------- |
|       UploadReport(report)       | null                                                        |
| CreateComment(reportId, message) | null                                                        |
|       SetProfile(profile)        | null                                                        |
|     SendRecommend(reportId)      | null                                                        |
|                                  |                                                             |
|         GetAllReports()          | /garyeong​/garyeong​/get_all_reports                        |
|        GetReportsCount()         | ​/garyeong​/garyeong​/get_reports_count                     |
|        GetReportById(id)         | /garyeong​/garyeong​/get_report_by_id​/{id}                 |
|    GetReportByTarget(target)     | ​/garyeong​/garyeong​/get_report_by_target​/{target}        |
|      GetReportsByTags(tags)      | ​/garyeong​/garyeong​/get_reports_by_tags​/{tags}           |
|      GetReportBySite(site)       | ​/garyeong​/garyeong​/get_report_by_site                    |
|    GetCommentsByReportId(id)     | ​/garyeong​/garyeong​/get_comments_by_report_id​/{reportId} |
|        GetCommentById(id)        | ​/garyeong​/garyeong​/get_comment_by_id​/{id}               |
|          GetProfiles()           | ​/garyeong​/garyeong​/get_profiles                          |
|        GetProfileCount()         | ​/garyeong​/garyeong​/get_profiles_count                    |
|        GetProfileById(id)        | ​/garyeong​/garyeong​/get_profile_by_id​/{id}               |
|   GetProfileByAddress(address)   | ​/garyeong​/garyeong​/get_profile_by_address​/{address}     |
