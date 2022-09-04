package keeper

import (
	"context"
	"time"

	"garyeong/x/garyeong/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) UploadReport(goCtx context.Context, msg *types.MsgUploadReport) (*types.MsgUploadReportResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var report = types.Report{
		Creator:     msg.Creator,
		Target:      msg.Target,
		Link:        msg.Link,
		Description: msg.Description,
		Tags:        msg.Tags,
		Recommend:   0,
		CreatedAt:   time.Now().UnixMilli(),
	}

	id := k.AddReport(ctx, report)

	return &types.MsgUploadReportResponse{Id: id}, nil
}
