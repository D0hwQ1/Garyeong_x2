package garyeong_test

import (
	"testing"

	keepertest "garyeong/testutil/keeper"
	"garyeong/testutil/nullify"
	"garyeong/x/garyeong"
	"garyeong/x/garyeong/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		CommentList: []types.Comment{
			{
				Id: 0,
			},
			{
				Id: 1,
			},
		},
		CommentCount: 2,
		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.GaryeongKeeper(t)
	garyeong.InitGenesis(ctx, *k, genesisState)
	got := garyeong.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	require.ElementsMatch(t, genesisState.CommentList, got.CommentList)
	require.Equal(t, genesisState.CommentCount, got.CommentCount)
	// this line is used by starport scaffolding # genesis/test/assert
}
