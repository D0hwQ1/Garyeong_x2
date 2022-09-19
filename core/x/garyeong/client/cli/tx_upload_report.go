package cli

import (
	"strconv"

	"garyeong/x/garyeong/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"strings"
)

var _ = strconv.Itoa(0)

func CmdUploadReport() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "upload-report [target] [link] [description] [tags]",
		Short: "Broadcast message upload-report",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTarget := args[0]
			argLink := args[1]
			argDescription := args[2]
			argTags := strings.Split(strings.Replace(args[3], " ", "", -1), ",")

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgUploadReport(
				clientCtx.GetFromAddress().String(),
				argTarget,
				argLink,
				argDescription,
				argTags,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
