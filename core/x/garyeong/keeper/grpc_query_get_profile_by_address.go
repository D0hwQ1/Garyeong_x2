package keeper

import (
	"context"

	"garyeong/x/garyeong/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetProfileByAddress(goCtx context.Context, req *types.QueryGetProfileByAddressRequest) (*types.QueryGetProfileByAddressResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	profile, err := k.GetSingleProfileByAddress(ctx, req.Address)
	if err != nil {
		return nil, status.Error(codes.NotFound, "profile not found")
	}

	return &types.QueryGetProfileByAddressResponse{Profile: profile}, nil
}
