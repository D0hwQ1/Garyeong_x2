package cli

import (
	"strconv"

	"garyeong/x/garyeong/types"
	"strings"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdGetReportsByTags() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "get-reports-by-tags [tags]",
		Short: "Query GetReportsByTags",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			reqTags := strings.Split(args[0], ",")

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetReportsByTagsRequest{

				Tags: reqTags,
			}

			res, err := queryClient.GetReportsByTags(cmd.Context(), params)
			if err != nil {
				return err
			}

			return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

	return cmd
}
