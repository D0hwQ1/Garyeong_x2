package cli

import (
	"strconv"

	"garyeong/x/garyeong/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdGetReportByTarget() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "get-report-by-target [target]",
		Short: "Query GetReportByTarget",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqTarget := args[0]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetReportByTargetRequest{

				Target: reqTarget,
			}

			res, err := queryClient.GetReportByTarget(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
