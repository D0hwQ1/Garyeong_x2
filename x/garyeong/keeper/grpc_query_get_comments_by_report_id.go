package keeper

import (
	"context"

	"garyeong/x/garyeong/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetCommentsByReportId(goCtx context.Context, req *types.QueryGetCommentsByReportIdRequest) (*types.QueryGetCommentsByReportIdResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	comments, err := k.GetEveryCommentByReportId(ctx, req.ReportId)
	if err != nil {
		return nil, err
	}

	return &types.QueryGetCommentsByReportIdResponse{Comments: comments}, nil
}
