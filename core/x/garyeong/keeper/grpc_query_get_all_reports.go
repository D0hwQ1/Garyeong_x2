package keeper

import (
	"context"

	"garyeong/x/garyeong/types"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) GetAllReports(goCtx context.Context, req *types.QueryGetAllReportsRequest) (*types.QueryGetAllReportsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	var reports []*types.Report

	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ReportKey))

	pageResponse, err := query.Paginate(store, req.Pagination, func(key []byte, value []byte) error {
		var report types.Report
		if err := k.cdc.Unmarshal(value, &report); err != nil {
			return err
		}

		reports = append(reports, &report)

		return nil
	})

	if err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryGetAllReportsResponse{Reports: reports, Pagination: pageResponse}, nil
}
