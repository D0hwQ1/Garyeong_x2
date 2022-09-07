import { Bech32Address } from "@keplr-wallet/cosmos";
export const chainInfo = {
    rpc: process.env.NEXT_PUBLIC_RPC,
    rest: process.env.NEXT_PUBLIC_REST,
    chainId: process.env.NEXT_PUBLIC_CHAIN_ID,
    chainName: "Garyeong_x2",
    stakeCurrency: {
        coinDenom: "SAVE",
        coinMinimalDenom: "usave",
        coinDecimals: 6,
    },
    bip44: {
        coinType: 118,
    },
    bech32Config: Bech32Address.defaultBech32Config("garyeong"),
    currencies: [
        {
            coinDenom: "SAVE",
            coinMinimalDenom: "usave",
            coinDecimals: 6,
        },
    ],
    feeCurrencies: [
        {
            coinDenom: "SAVE",
            coinMinimalDenom: "usave",
            coinDecimals: 6,
        },
    ],
    features: ["stargate", "ibc-transfer"],
};
