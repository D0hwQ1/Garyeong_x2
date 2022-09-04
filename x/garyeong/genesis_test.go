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

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.GaryeongKeeper(t)
	garyeong.InitGenesis(ctx, *k, genesisState)
	got := garyeong.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
