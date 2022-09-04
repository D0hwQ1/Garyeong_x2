package simulation

import (
	"math/rand"

	"garyeong/x/garyeong/keeper"
	"garyeong/x/garyeong/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
)

func SimulateMsgUploadReport(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgUploadReport{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the UploadReport simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "UploadReport simulation not implemented"), nil, nil
	}
}
