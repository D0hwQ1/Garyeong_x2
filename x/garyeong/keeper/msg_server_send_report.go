package keeper

import (
	"context"

	"garyeong/x/garyeong/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SendReport(goCtx context.Context, msg *types.MsgSendReport) (*types.MsgSendReportResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var report = types.Report{
		Creator:     msg.Creator,
		Target:      msg.Target,
		Link:        msg.Link,
		Description: msg.Description,
		Tags:        make([]string, 0),
	}

	id := k.AddReport(ctx, report)

	return &types.MsgSendReportResponse{Id: id}, nil
}
