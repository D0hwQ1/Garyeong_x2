package keeper

import (
	"context"
	"errors"

	"garyeong/x/garyeong/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SendRecommend(goCtx context.Context, msg *types.MsgSendRecommend) (*types.MsgSendRecommendResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	if err := k.AddRecommend(ctx, msg.Creator, msg.ReportId); err != nil {
		return nil, errors.New("Failed to show report")
	}

	return &types.MsgSendRecommendResponse{}, nil
}
