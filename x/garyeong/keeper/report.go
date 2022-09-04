package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"garyeong/x/garyeong/types"
)

func (k Keeper) AddReport(ctx sdk.Context, report types.Report) uint64 {
	count := k.GetReportCount(ctx)

	report.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ReportKey))

	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, report.Id)

	appendedValue := k.cdc.MustMarshal(&report)

	store.Set(byteKey, appendedValue)

	k.SetReportCount(ctx, count+1)
	return count
}

func (k Keeper) GetReportCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ReportCountKey))

	byteKey := []byte(types.ReportCountKey)

	bz := store.Get(byteKey)

	if bz == nil {
		return 0
	}

	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) SetReportCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ReportCountKey))

	byteKey := []byte(types.ReportCountKey)

	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)

	store.Set(byteKey, bz)
}
