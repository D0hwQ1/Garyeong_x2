package keeper

import (
	"encoding/binary"
	"errors"
	"time"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/lithammer/fuzzysearch/fuzzy"

	"garyeong/x/garyeong/types"
)

func (k Keeper) AddReport(ctx sdk.Context, address string, report types.Report) (uint64, error) {
	count := k.GetReportCount(ctx)

	report.Id = count

	reports, err := k.GetEveryReport(ctx)
	if err != nil {
		return 0, err
	}

	for i := uint64(0); i < count; i++ {
		if reports[i].Target == report.Target {
			return 0, errors.New("report already exists")
		}
	}

	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ReportKey))

	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, report.Id)

	appendedValue := k.cdc.MustMarshal(&report)

	store.Set(byteKey, appendedValue)

	k.SetReportCount(ctx, count+1)

	profile, err := k.GetSingleProfileByAddress(ctx, address)
	if err != nil {
		return 0, err
	}

	if time.Now().UnixMilli() >= profile.LastActivityAt+1000*60*60*3 {
		profile.Activity += 1
		profile.LastActivityAt = time.Now().UnixMilli() 
	}

	if err := k.UpdateProfile(ctx, profile); err != nil {
		return 0, err
	}

	return count, nil
}

func (k Keeper) UpdateReport(ctx sdk.Context, report types.Report) error {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ReportKey))

	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, report.Id)

	appendedValue := k.cdc.MustMarshal(&report)
	store.Set(byteKey, appendedValue)

	return nil
}

func (k Keeper) GetEveryReport(ctx sdk.Context) ([]*types.Report, error) {
	var reports []*types.Report
	count := k.GetReportCount(ctx)
	for i := uint64(0); i < count; i++ {
		report, err := k.GetSingleReport(ctx, i)
		if err != nil {
			return nil, err
		}

		reports = append(reports, report)
	}

	return reports, nil
}

func (k Keeper) GetSingleReport(ctx sdk.Context, id uint64) (*types.Report, error) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ReportKey))

	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, id)

	report := &types.Report{}
	bz := store.Get(byteKey)
	if err := k.cdc.Unmarshal(bz, report); err != nil {
		return nil, err
	}

	return report, nil
}

func (k Keeper) GetEveryReportByTarget(ctx sdk.Context, target string) ([]*types.Report, error) {
	reports, err := k.GetEveryReport(ctx)
	if err != nil {
		return nil, errors.New("internal error")
	}

	var result []*types.Report
	for _, report := range reports {
		if fuzzy.Match(target, report.Target) {
			result = append(result, report)
		}
	}

	return result, nil
}

func (k Keeper) GetEveryReportByTags(ctx sdk.Context, tags []string) ([]*types.Report, error) {
	reports, err := k.GetEveryReport(ctx)
	if err != nil {
		return nil, errors.New("internal error")
	}

	var result []*types.Report
	for _, report := range reports {
		check := 0
		for _, reportTag := range report.Tags {
			for _, tag := range tags {
				if reportTag == tag {
					check++
				}
			}
		}

		if check == len(tags) {
			result = append(result, report)
		}
	}

	return result, nil
}

func (k Keeper) GetEveryReportBySite(ctx sdk.Context, site string) ([]*types.Report, error) {
	reports, err := k.GetEveryReport(ctx)
	if err != nil {
		return nil, errors.New("internal error")
	}

	var result []*types.Report
	for _, report := range reports {
		if fuzzy.Match(site, report.Link) {
			result = append(result, report)
		}
	}

	return result, nil
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
