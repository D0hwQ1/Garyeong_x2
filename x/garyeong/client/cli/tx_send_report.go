package cli

import (
	"strconv"

	"garyeong/x/garyeong/types"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
)

var _ = strconv.Itoa(0)

func CmdSendReport() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "send-report [target] [link] [description] [tags]",
		Short: "Broadcast message sendReport",
		Args:  cobra.ExactArgs(4),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTarget := args[0]
			argLink := args[1]
			argDescription := args[2]
			argTags := args[3]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgSendReport(
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
