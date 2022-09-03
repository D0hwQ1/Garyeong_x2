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

func (k Keeper) GetReports(goCtx context.Context, req *types.QueryGetReportsRequest) (*types.QueryGetReportsResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var reports []*types.Report

	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)

	reportStore := prefix.NewStore(store, []byte(types.ReportKey))

	pageRes, err := query.Paginate(reportStore, req.Pagination, func(key []byte, value []byte) error {
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

	return &types.QueryGetReportsResponse{Report: reports, Pagination: pageRes}, nil
}
