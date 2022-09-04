package garyeong

import (
	"math/rand"

	"garyeong/testutil/sample"
	garyeongsimulation "garyeong/x/garyeong/simulation"
	"garyeong/x/garyeong/types"
	"github.com/cosmos/cosmos-sdk/baseapp"
	simappparams "github.com/cosmos/cosmos-sdk/simapp/params"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/module"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"github.com/cosmos/cosmos-sdk/x/simulation"
)

// avoid unused import issue
var (
	_ = sample.AccAddress
	_ = garyeongsimulation.FindAccount
	_ = simappparams.StakePerAccount
	_ = simulation.MsgEntryKind
	_ = baseapp.Paramspace
)

const (
	opWeightMsgUploadReport = "op_weight_msg_upload_report"
	// TODO: Determine the simulation weight value
	defaultWeightMsgUploadReport int = 100

	opWeightMsgCreateComment = "op_weight_msg_create_comment"
	// TODO: Determine the simulation weight value
	defaultWeightMsgCreateComment int = 100

	// this line is used by starport scaffolding # simapp/module/const
)

// GenerateGenesisState creates a randomized GenState of the module
func (AppModule) GenerateGenesisState(simState *module.SimulationState) {
	accs := make([]string, len(simState.Accounts))
	for i, acc := range simState.Accounts {
		accs[i] = acc.Address.String()
	}
	garyeongGenesis := types.GenesisState{
		Params: types.DefaultParams(),
		// this line is used by starport scaffolding # simapp/module/genesisState
	}
	simState.GenState[types.ModuleName] = simState.Cdc.MustMarshalJSON(&garyeongGenesis)
}

// ProposalContents doesn't return any content functions for governance proposals
func (AppModule) ProposalContents(_ module.SimulationState) []simtypes.WeightedProposalContent {
	return nil
}

// RandomizedParams creates randomized  param changes for the simulator
func (am AppModule) RandomizedParams(_ *rand.Rand) []simtypes.ParamChange {

	return []simtypes.ParamChange{}
}

// RegisterStoreDecoder registers a decoder
func (am AppModule) RegisterStoreDecoder(_ sdk.StoreDecoderRegistry) {}

// WeightedOperations returns the all the gov module operations with their respective weights.
func (am AppModule) WeightedOperations(simState module.SimulationState) []simtypes.WeightedOperation {
	operations := make([]simtypes.WeightedOperation, 0)

	var weightMsgUploadReport int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgUploadReport, &weightMsgUploadReport, nil,
		func(_ *rand.Rand) {
			weightMsgUploadReport = defaultWeightMsgUploadReport
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgUploadReport,
		garyeongsimulation.SimulateMsgUploadReport(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	var weightMsgCreateComment int
	simState.AppParams.GetOrGenerate(simState.Cdc, opWeightMsgCreateComment, &weightMsgCreateComment, nil,
		func(_ *rand.Rand) {
			weightMsgCreateComment = defaultWeightMsgCreateComment
		},
	)
	operations = append(operations, simulation.NewWeightedOperation(
		weightMsgCreateComment,
		garyeongsimulation.SimulateMsgCreateComment(am.accountKeeper, am.bankKeeper, am.keeper),
	))

	// this line is used by starport scaffolding # simapp/module/operation

	return operations
}
