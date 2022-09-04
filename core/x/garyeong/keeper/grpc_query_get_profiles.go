package keeper

import (
	"context"

	"garyeong/x/garyeong/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetProfiles(goCtx context.Context, req *types.QueryGetProfilesRequest) (*types.QueryGetProfilesResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	profiles, err := k.GetEveryProfile(ctx)
	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetProfilesResponse{Profiles: profiles}, nil
}
