package keeper

import (
	"encoding/binary"
	"errors"
	"time"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"garyeong/x/garyeong/types"
)

// AddRecommend adds recommend object to the blockchain.
func (k Keeper) AddRecommend(ctx sdk.Context, address string, reportId uint64) error {
	recommend_count := k.GetRecommendCount(ctx, reportId)
	k.SetRecommendCount(ctx, reportId, recommend_count+1)

	profile, err := k.GetSingleProfileByAddress(ctx, address)
	if err != nil {
		return err
	}
	for _, participation := range profile.ParticipationRecommend {
		if participation == reportId {
			return errors.New("already participated")
		}
	}

	if time.Now().UnixMilli() >= profile.LastActivityAt+1000*60*60*3 {
		profile.Activity += 1
		profile.LastActivityAt = time.Now().UnixMilli() 
	}
	profile.ParticipationRecommend = append(profile.ParticipationRecommend, reportId)

	if err := k.UpdateProfile(ctx, profile); err != nil {
		return err
	}

	return nil
}

// SetRecommendCount sets profile count from blockchain.
func (k Keeper) SetRecommendCount(ctx sdk.Context, reportId uint64, count uint64) error {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ReportKey))

	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, reportId)

	report := &types.Report{}
	bz := store.Get(byteKey)
	if err := k.cdc.Unmarshal(bz, report); err != nil {
		return err
	}

	report.RecommendCount += 1

	values := k.cdc.MustMarshal(report)
	store.Set(byteKey, values)

	return nil
}

// GetRecommendCount retrieves profile count from blockchain.
func (k Keeper) GetRecommendCount(ctx sdk.Context, reportId uint64) uint64 {
	report, err := k.GetSingleReport(ctx, reportId)
	if err != nil {
		return 0
	}

	return report.RecommendCount
}
