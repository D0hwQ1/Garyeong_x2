package cli

import (
    "strconv"
	
	"github.com/spf13/cobra"
    "github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"garyeong/x/garyeong/types"
)

var _ = strconv.Itoa(0)

func CmdGetProfileByAddress() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "get-profile-by-address [address]",
		Short: "Query GetProfileByAddress",
		Args:  cobra.ExactArgs(1),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			 reqAddress := args[0]
			
			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			queryClient := types.NewQueryClient(clientCtx)

			params := &types.QueryGetProfileByAddressRequest{
				
                Address: reqAddress, 
            }

            

			res, err := queryClient.GetProfileByAddress(cmd.Context(), params)
            if err != nil {
                return err
            }

            return clientCtx.PrintProto(res)
		},
	}

	flags.AddQueryFlagsToCmd(cmd)

    return cmd
}