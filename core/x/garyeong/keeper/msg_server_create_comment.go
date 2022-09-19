package keeper

import (
	"context"
	"time"

	"garyeong/x/garyeong/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateComment(goCtx context.Context, msg *types.MsgCreateComment) (*types.MsgCreateCommentResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var comment = types.Comment{
		Creator:   msg.Creator,
		ReportId:  msg.ReportId,
		Comment:   msg.Comment,
		CreatedAt: time.Now().UnixMilli(),
	}

	err := k.AddComment(ctx, msg.Creator, comment)
	if err != nil {
		return nil, err
	}

	return &types.MsgCreateCommentResponse{}, nil
}
