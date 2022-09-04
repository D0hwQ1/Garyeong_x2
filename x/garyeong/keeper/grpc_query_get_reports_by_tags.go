package keeper

import (
	"context"

	"garyeong/x/garyeong/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetReportsByTags(goCtx context.Context, req *types.QueryGetReportsByTagsRequest) (*types.QueryGetReportsByTagsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	report, err := k.GetEveryReportByTags(ctx, req.Tags)
	if err != nil {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetReportsByTagsResponse{Report: report}, nil
}
