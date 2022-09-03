package keeper_test

import (
	"testing"

	testkeeper "garyeong/testutil/keeper"
	"garyeong/x/garyeong/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.GaryeongKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
