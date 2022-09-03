package keeper_test

import (
	"context"
	"testing"

	keepertest "garyeong/testutil/keeper"
	"garyeong/x/garyeong/keeper"
	"garyeong/x/garyeong/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.GaryeongKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
