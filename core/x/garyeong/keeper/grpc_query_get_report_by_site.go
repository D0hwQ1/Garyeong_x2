package keeper

import (
	"context"

    "garyeong/x/garyeong/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetReportBySite(goCtx context.Context,  req *types.QueryGetReportBySiteRequest) (*types.QueryGetReportBySiteResponse, error) {
	if req == nil {
        return nil, status.Error(codes.InvalidArgument, "invalid request")
    }

	ctx := sdk.UnwrapSDKContext(goCtx)

    report, err := k.GetEveryReportBySite(ctx, req.Site)
	if err != nil {
		return nil, status.Error(codes.NotFound, "not found")
	}

	return &types.QueryGetReportBySiteResponse{Report: report}, nil
}
