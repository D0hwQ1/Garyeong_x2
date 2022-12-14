package cli

import (
	"fmt"
	// "strings"

	"github.com/spf13/cobra"

	"github.com/cosmos/cosmos-sdk/client"
	// "github.com/cosmos/cosmos-sdk/client/flags"
	// sdk "github.com/cosmos/cosmos-sdk/types"

	"garyeong/x/garyeong/types"
)

// GetQueryCmd returns the cli query commands for this module
func GetQueryCmd(queryRoute string) *cobra.Command {
	// Group garyeong queries under a subcommand
	cmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      fmt.Sprintf("Querying commands for the %s module", types.ModuleName),
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	cmd.AddCommand(CmdQueryParams())
	cmd.AddCommand(CmdGetAllReports())

	cmd.AddCommand(CmdGetCommentsByReportId())

	cmd.AddCommand(CmdGetCommentById())

	cmd.AddCommand(CmdGetReportsCount())

	cmd.AddCommand(CmdGetReportById())

	cmd.AddCommand(CmdGetReportByTarget())

	cmd.AddCommand(CmdGetReportsByTags())

	cmd.AddCommand(CmdGetProfiles())

	cmd.AddCommand(CmdGetProfilesCount())

	cmd.AddCommand(CmdGetProfileById())

	cmd.AddCommand(CmdGetProfileByAddress())

	cmd.AddCommand(CmdGetReportBySite())

// this line is used by starport scaffolding # 1

	return cmd
}
