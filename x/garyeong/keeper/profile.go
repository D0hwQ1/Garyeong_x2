package keeper

import (
	"encoding/binary"
	"errors"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"garyeong/x/garyeong/types"
)

func (k Keeper) AddProfile(ctx sdk.Context, profile types.Profile) uint64 {
	count := k.GetProfileCount(ctx)

	profile.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ProfileKey))

	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, profile.Id)

	appendedValue := k.cdc.MustMarshal(&profile)
	store.Set(byteKey, appendedValue)

	k.SetProfileCount(ctx, count+1)

	return count
}

func (k Keeper) UpdateProfile(ctx sdk.Context, profile *types.Profile) error {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ProfileKey))

	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, profile.Id)

	appendedValue := k.cdc.MustMarshal(profile)
	store.Set(byteKey, appendedValue)

	return nil
}

func (k Keeper) GetEveryProfile(ctx sdk.Context) ([]*types.Profile, error) {
	var profiles []*types.Profile
	count := k.GetProfileCount(ctx)
	for i := uint64(0); i < count; i++ {
		profile, err := k.GetSingleProfile(ctx, i)
		if err != nil {
			return nil, err
		}

		profiles = append(profiles, profile)
	}

	return profiles, nil
}

func (k Keeper) GetSingleProfile(ctx sdk.Context, id uint64) (*types.Profile, error) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ProfileKey))

	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, id)

	profile := &types.Profile{}
	bz := store.Get(byteKey)
	if err := k.cdc.Unmarshal(bz, profile); err != nil {
		return nil, err
	}

	return profile, nil
}

func (k Keeper) GetSingleProfileByAddress(ctx sdk.Context, Address string) (*types.Profile, error) {
	profiles, err := k.GetEveryProfile(ctx)
	if err != nil {
		return nil, errors.New("internal error")
	}

	for _, profile := range profiles {
		if profile.Address == Address {
			return profile, nil
		}
	}
	return nil, errors.New("not found by given username")
}

// func (k Keeper) GetEveryRespectedReports(ctx sdk.Context, id uint64) ([]*types.Report, error) {
// 	profile, err := k.GetSingleProfile(ctx, id)
// 	if err != nil {
// 		return nil, errors.New("internal error")
// 	}

// 	var reports []*types.Report
// 	for _, reportId := range profile.RespectedReports {
// 		report, err := k.GetSingleReport(ctx, reportId)
// 		if err != nil {
// 			return nil, errors.New("internal error")
// 		}
// 		reports = append(reports, report)
// 	}

// 	return reports, nil
// }

func (k Keeper) SetProfileCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ProfileCountKey))

	byteKey := []byte(types.ProfileCountKey)

	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)

	store.Set(byteKey, bz)
}

func (k Keeper) GetProfileCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ProfileCountKey))

	byteKey := []byte(types.ProfileCountKey)
	bz := store.Get(byteKey)

	if bz == nil {
		return 0
	}

	return binary.BigEndian.Uint64(bz)
}
