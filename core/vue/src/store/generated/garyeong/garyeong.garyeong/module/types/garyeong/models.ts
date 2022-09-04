/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "garyeong.garyeong";

export interface Profile {
  id: number;
  address: string;
  activity: number;
  participationRecommend: number[];
  lastActivityAt: number;
}

export interface Report {
  id: number;
  creator: string;
  target: string;
  link: string;
  description: string;
  tags: string[];
  recommendCount: number;
  createdAt: number;
}

export interface Comment {
  id: number;
  creator: string;
  reportId: number;
  comment: string;
  createdAt: number;
}

const baseProfile: object = {
  id: 0,
  address: "",
  activity: 0,
  participationRecommend: 0,
  lastActivityAt: 0,
};

export const Profile = {
  encode(message: Profile, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    if (message.activity !== 0) {
      writer.uint32(24).uint64(message.activity);
    }
    writer.uint32(34).fork();
    for (const v of message.participationRecommend) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.lastActivityAt !== 0) {
      writer.uint32(40).int64(message.lastActivityAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Profile {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseProfile } as Profile;
    message.participationRecommend = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.activity = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos;
            while (reader.pos < end2) {
              message.participationRecommend.push(
                longToNumber(reader.uint64() as Long)
              );
            }
          } else {
            message.participationRecommend.push(
              longToNumber(reader.uint64() as Long)
            );
          }
          break;
        case 5:
          message.lastActivityAt = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Profile {
    const message = { ...baseProfile } as Profile;
    message.participationRecommend = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    if (object.activity !== undefined && object.activity !== null) {
      message.activity = Number(object.activity);
    } else {
      message.activity = 0;
    }
    if (
      object.participationRecommend !== undefined &&
      object.participationRecommend !== null
    ) {
      for (const e of object.participationRecommend) {
        message.participationRecommend.push(Number(e));
      }
    }
    if (object.lastActivityAt !== undefined && object.lastActivityAt !== null) {
      message.lastActivityAt = Number(object.lastActivityAt);
    } else {
      message.lastActivityAt = 0;
    }
    return message;
  },

  toJSON(message: Profile): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.address !== undefined && (obj.address = message.address);
    message.activity !== undefined && (obj.activity = message.activity);
    if (message.participationRecommend) {
      obj.participationRecommend = message.participationRecommend.map((e) => e);
    } else {
      obj.participationRecommend = [];
    }
    message.lastActivityAt !== undefined &&
      (obj.lastActivityAt = message.lastActivityAt);
    return obj;
  },

  fromPartial(object: DeepPartial<Profile>): Profile {
    const message = { ...baseProfile } as Profile;
    message.participationRecommend = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    if (object.activity !== undefined && object.activity !== null) {
      message.activity = object.activity;
    } else {
      message.activity = 0;
    }
    if (
      object.participationRecommend !== undefined &&
      object.participationRecommend !== null
    ) {
      for (const e of object.participationRecommend) {
        message.participationRecommend.push(e);
      }
    }
    if (object.lastActivityAt !== undefined && object.lastActivityAt !== null) {
      message.lastActivityAt = object.lastActivityAt;
    } else {
      message.lastActivityAt = 0;
    }
    return message;
  },
};

const baseReport: object = {
  id: 0,
  creator: "",
  target: "",
  link: "",
  description: "",
  tags: "",
  recommendCount: 0,
  createdAt: 0,
};

export const Report = {
  encode(message: Report, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
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
    for (const v of message.tags) {
      writer.uint32(50).string(v!);
    }
    if (message.recommendCount !== 0) {
      writer.uint32(56).uint64(message.recommendCount);
    }
    if (message.createdAt !== 0) {
      writer.uint32(64).int64(message.createdAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Report {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseReport } as Report;
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
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
          message.tags.push(reader.string());
          break;
        case 7:
          message.recommendCount = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Report {
    const message = { ...baseReport } as Report;
    message.tags = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
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
    if (object.recommendCount !== undefined && object.recommendCount !== null) {
      message.recommendCount = Number(object.recommendCount);
    } else {
      message.recommendCount = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    return message;
  },

  toJSON(message: Report): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
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
    message.recommendCount !== undefined &&
      (obj.recommendCount = message.recommendCount);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  fromPartial(object: DeepPartial<Report>): Report {
    const message = { ...baseReport } as Report;
    message.tags = [];
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
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
    if (object.recommendCount !== undefined && object.recommendCount !== null) {
      message.recommendCount = object.recommendCount;
    } else {
      message.recommendCount = 0;
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    return message;
  },
};

const baseComment: object = {
  id: 0,
  creator: "",
  reportId: 0,
  comment: "",
  createdAt: 0,
};

export const Comment = {
  encode(message: Comment, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(18).string(message.creator);
    }
    if (message.reportId !== 0) {
      writer.uint32(24).uint64(message.reportId);
    }
    if (message.comment !== "") {
      writer.uint32(34).string(message.comment);
    }
    if (message.createdAt !== 0) {
      writer.uint32(40).int64(message.createdAt);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Comment {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseComment } as Comment;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.creator = reader.string();
          break;
        case 3:
          message.reportId = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.comment = reader.string();
          break;
        case 5:
          message.createdAt = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Comment {
    const message = { ...baseComment } as Comment;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.reportId !== undefined && object.reportId !== null) {
      message.reportId = Number(object.reportId);
    } else {
      message.reportId = 0;
    }
    if (object.comment !== undefined && object.comment !== null) {
      message.comment = String(object.comment);
    } else {
      message.comment = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = Number(object.createdAt);
    } else {
      message.createdAt = 0;
    }
    return message;
  },

  toJSON(message: Comment): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.creator !== undefined && (obj.creator = message.creator);
    message.reportId !== undefined && (obj.reportId = message.reportId);
    message.comment !== undefined && (obj.comment = message.comment);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt);
    return obj;
  },

  fromPartial(object: DeepPartial<Comment>): Comment {
    const message = { ...baseComment } as Comment;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.reportId !== undefined && object.reportId !== null) {
      message.reportId = object.reportId;
    } else {
      message.reportId = 0;
    }
    if (object.comment !== undefined && object.comment !== null) {
      message.comment = object.comment;
    } else {
      message.comment = "";
    }
    if (object.createdAt !== undefined && object.createdAt !== null) {
      message.createdAt = object.createdAt;
    } else {
      message.createdAt = 0;
    }
    return message;
  },
};

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
