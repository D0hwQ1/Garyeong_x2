/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "garyeong.garyeong";

export interface MsgSendReport {
  creator: string;
  username: string;
  target: string;
  link: string;
  description: string;
  tags: string;
}

export interface MsgSendReportResponse {}

const baseMsgSendReport: object = {
  creator: "",
  username: "",
  target: "",
  link: "",
  description: "",
  tags: "",
};

export const MsgSendReport = {
  encode(message: MsgSendReport, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.username !== "") {
      writer.uint32(18).string(message.username);
    }
    if (message.target !== "") {
      writer.uint32(26).string(message.target);
    }
    if (message.link !== "") {
      writer.uint32(34).string(message.link);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.tags !== "") {
      writer.uint32(50).string(message.tags);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendReport {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendReport } as MsgSendReport;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.username = reader.string();
          break;
        case 3:
          message.target = reader.string();
          break;
        case 4:
          message.link = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.tags = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendReport {
    const message = { ...baseMsgSendReport } as MsgSendReport;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = String(object.username);
    } else {
      message.username = "";
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = String(object.target);
    } else {
      message.target = "";
    }
    if (object.link !== undefined && object.link !== null) {
      message.link = String(object.link);
    } else {
      message.link = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.tags !== undefined && object.tags !== null) {
      message.tags = String(object.tags);
    } else {
      message.tags = "";
    }
    return message;
  },

  toJSON(message: MsgSendReport): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.username !== undefined && (obj.username = message.username);
    message.target !== undefined && (obj.target = message.target);
    message.link !== undefined && (obj.link = message.link);
    message.description !== undefined &&
      (obj.description = message.description);
    message.tags !== undefined && (obj.tags = message.tags);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendReport>): MsgSendReport {
    const message = { ...baseMsgSendReport } as MsgSendReport;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.username !== undefined && object.username !== null) {
      message.username = object.username;
    } else {
      message.username = "";
    }
    if (object.target !== undefined && object.target !== null) {
      message.target = object.target;
    } else {
      message.target = "";
    }
    if (object.link !== undefined && object.link !== null) {
      message.link = object.link;
    } else {
      message.link = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.tags !== undefined && object.tags !== null) {
      message.tags = object.tags;
    } else {
      message.tags = "";
    }
    return message;
  },
};

const baseMsgSendReportResponse: object = {};

export const MsgSendReportResponse = {
  encode(_: MsgSendReportResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendReportResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendReportResponse } as MsgSendReportResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSendReportResponse {
    const message = { ...baseMsgSendReportResponse } as MsgSendReportResponse;
    return message;
  },

  toJSON(_: MsgSendReportResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSendReportResponse>): MsgSendReportResponse {
    const message = { ...baseMsgSendReportResponse } as MsgSendReportResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  SendReport(request: MsgSendReport): Promise<MsgSendReportResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SendReport(request: MsgSendReport): Promise<MsgSendReportResponse> {
    const data = MsgSendReport.encode(request).finish();
    const promise = this.rpc.request(
      "garyeong.garyeong.Msg",
      "SendReport",
      data
    );
    return promise.then((data) =>
      MsgSendReportResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
