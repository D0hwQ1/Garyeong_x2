package keeper

import (
	"encoding/binary"
	"errors"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"garyeong/x/garyeong/types"
)

func (k Keeper) AddComment(ctx sdk.Context, comment types.Comment) uint64 {
	count := k.GetCommentCount(ctx)

	comment.Id = count

	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.CommentKey))

	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, comment.Id)

	appendedValue := k.cdc.MustMarshal(&comment)

	store.Set(byteKey, appendedValue)

	k.SetCommentCount(ctx, count+1)
	return count
}

func (k Keeper) GetEveryComment(ctx sdk.Context) ([]*types.Comment, error) {
	var comments []*types.Comment
	count := k.GetCommentCount(ctx)
	for i := uint64(0); i < count; i++ {
		comment, err := k.GetSingleComment(ctx, i)
		if err != nil {
			return nil, err
		}

		comments = append(comments, comment)
	}

	return comments, nil
}

func (k Keeper) GetSingleComment(ctx sdk.Context, id uint64) (*types.Comment, error) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.CommentKey))

	byteKey := make([]byte, 8)
	binary.BigEndian.PutUint64(byteKey, id)

	comment := &types.Comment{}
	bz := store.Get(byteKey)
	if err := k.cdc.Unmarshal(bz, comment); err != nil {
		return nil, err
	}

	return comment, nil
}

func (k Keeper) GetEveryCommentByReportId(ctx sdk.Context, reportId uint64) ([]*types.Comment, error) {
	comments, err := k.GetEveryComment(ctx)
	if err != nil {
		return nil, errors.New("internal error")
	}

	var result []*types.Comment
	for _, comment := range comments {
		if comment.ReportId == reportId {
			result = append(result, comment)
		}
	}

	return result, nil
}

func (k Keeper) GetCommentCount(ctx sdk.Context) uint64 {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.CommentCountKey))

	byteKey := []byte(types.CommentCountKey)

	bz := store.Get(byteKey)

	if bz == nil {
		return 0
	}

	return binary.BigEndian.Uint64(bz)
}

func (k Keeper) SetCommentCount(ctx sdk.Context, count uint64) {
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.CommentCountKey))

	byteKey := []byte(types.CommentCountKey)

	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)

	store.Set(byteKey, bz)
}
