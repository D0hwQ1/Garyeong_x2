package keeper

import (
	"context"

	"garyeong/x/garyeong/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetCommentById(goCtx context.Context, req *types.QueryGetCommentByIdRequest) (*types.QueryGetCommentByIdResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	comment, err := k.GetSingleComment(ctx, req.Id)
	if err != nil {
		return nil, status.Error(codes.Internal, "Internal service error")
	}

	return &types.QueryGetCommentByIdResponse{Comment: comment}, nil
}
