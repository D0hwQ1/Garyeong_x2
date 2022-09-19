package keeper

import (
	"context"
	"time"

	"garyeong/x/garyeong/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) SetProfile(goCtx context.Context, msg *types.MsgSetProfile) (*types.MsgSetProfileResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var profile = types.Profile{
		Address:        msg.Creator,
		Activity:	1,
		LastActivityAt: time.Now().UnixMilli(),
	}

	id := k.AddProfile(ctx, profile)

	return &types.MsgSetProfileResponse{Id: id}, nil
}
