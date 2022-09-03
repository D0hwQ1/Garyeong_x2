/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";

export const protobufPackage = "garyeong.garyeong";

export interface MsgSendReport {
  creator: string;
  target: string;
  link: string;
  description: string;
  tags: string[];
}

export interface MsgSendReportResponse {
  id: number;
}

const baseMsgSendReport: object = {
  creator: "",
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
    if (message.target !== "") {
      writer.uint32(18).string(message.target);
    }
    if (message.link !== "") {
      writer.uint32(26).string(message.link);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    for (const v of message.tags) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendReport {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendReport } as MsgSendReport;
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.target = reader.string();
          break;
        case 3:
          message.link = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.tags.push(reader.string());
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
    message.tags = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
      for (const e of object.tags) {
        message.tags.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgSendReport): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.target !== undefined && (obj.target = message.target);
    message.link !== undefined && (obj.link = message.link);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendReport>): MsgSendReport {
    const message = { ...baseMsgSendReport } as MsgSendReport;
    message.tags = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
      for (const e of object.tags) {
        message.tags.push(e);
      }
    }
    return message;
  },
};

const baseMsgSendReportResponse: object = { id: 0 };

export const MsgSendReportResponse = {
  encode(
    message: MsgSendReportResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendReportResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendReportResponse } as MsgSendReportResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendReportResponse {
    const message = { ...baseMsgSendReportResponse } as MsgSendReportResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: MsgSendReportResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendReportResponse>
  ): MsgSendReportResponse {
    const message = { ...baseMsgSendReportResponse } as MsgSendReportResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
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

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
