package keeper

import (
	"context"

	"garyeong/x/garyeong/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetProfileById(goCtx context.Context, req *types.QueryGetProfileByIdRequest) (*types.QueryGetProfileByIdResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	profile, err := k.GetSingleProfile(ctx, req.Id)
	if err != nil {
		return nil, status.Error(codes.NotFound, "profile not found")
	}

	return &types.QueryGetProfileByIdResponse{Profile: profile}, nil
}
