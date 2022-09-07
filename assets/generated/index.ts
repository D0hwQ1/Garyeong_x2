// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgSendRecommend } from "./types/garyeong/tx";
import { MsgSetProfile } from "./types/garyeong/tx";
import { MsgCreateComment } from "./types/garyeong/tx";
import { MsgUploadReport } from "./types/garyeong/tx";

const types = [
    ["/garyeong.garyeong.MsgSendRecommend", MsgSendRecommend],
    ["/garyeong.garyeong.MsgSetProfile", MsgSetProfile],
    ["/garyeong.garyeong.MsgCreateComment", MsgCreateComment],
    ["/garyeong.garyeong.MsgUploadReport", MsgUploadReport],
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
    amount: [],
    gas: "200000",
};

interface TxClientOptions {
    addr: string;
}

interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
    if (!wallet) throw MissingWalletError;
    let client;
    if (addr) {
        client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
    } else {
        client = await SigningStargateClient.offline(wallet, { registry });
    }
    const { address } = (await wallet.getAccounts())[0];

    return {
        signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = { fee: defaultFee, memo: "" }) =>
            client.signAndBroadcast(address, msgs, fee, memo),
        msgSendRecommend: (data: MsgSendRecommend): EncodeObject => ({
            typeUrl: "/garyeong.garyeong.MsgSendRecommend",
            value: MsgSendRecommend.fromPartial(data),
        }),
        msgSetProfile: (data: MsgSetProfile): EncodeObject => ({ typeUrl: "/garyeong.garyeong.MsgSetProfile", value: MsgSetProfile.fromPartial(data) }),
        msgCreateComment: (data: MsgCreateComment): EncodeObject => ({
            typeUrl: "/garyeong.garyeong.MsgCreateComment",
            value: MsgCreateComment.fromPartial(data),
        }),
        msgUploadReport: (data: MsgUploadReport): EncodeObject => ({ typeUrl: "/garyeong.garyeong.MsgUploadReport", value: MsgUploadReport.fromPartial(data) }),
    };
};

interface QueryClientOptions {
    addr: string;
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
    return new Api({ baseUrl: addr });
};

export { txClient, queryClient };
