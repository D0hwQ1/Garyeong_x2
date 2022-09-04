package keeper

import (
	"context"

	"garyeong/x/garyeong/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetReportByTarget(goCtx context.Context, req *types.QueryGetReportByTargetRequest) (*types.QueryGetReportByTargetResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	report, err := k.GetEveryReportByTarget(ctx, req.Target)
	if err != nil {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetReportByTargetResponse{Report: report}, nil
}
