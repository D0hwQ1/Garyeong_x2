/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../garyeong/params";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Report, Comment } from "../garyeong/models";

export const protobufPackage = "garyeong.garyeong";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetAllReportsRequest {
  pagination: PageRequest | undefined;
}

export interface QueryGetAllReportsResponse {
  reports: Report[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCommentsByReportIdRequest {
  reportId: number;
  pagination: PageRequest | undefined;
}

export interface QueryGetCommentsByReportIdResponse {
  comments: Comment[];
  pagination: PageResponse | undefined;
}

export interface QueryGetCommentByIdRequest {
  id: number;
}

export interface QueryGetCommentByIdResponse {
  comment: Comment | undefined;
}

export interface QueryGetReportsCountRequest {}

export interface QueryGetReportsCountResponse {
  count: number;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetAllReportsRequest: object = {};

export const QueryGetAllReportsRequest = {
  encode(
    message: QueryGetAllReportsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAllReportsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAllReportsRequest,
    } as QueryGetAllReportsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllReportsRequest {
    const message = {
      ...baseQueryGetAllReportsRequest,
    } as QueryGetAllReportsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAllReportsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAllReportsRequest>
  ): QueryGetAllReportsRequest {
    const message = {
      ...baseQueryGetAllReportsRequest,
    } as QueryGetAllReportsRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetAllReportsResponse: object = {};

export const QueryGetAllReportsResponse = {
  encode(
    message: QueryGetAllReportsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.reports) {
      Report.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetAllReportsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetAllReportsResponse,
    } as QueryGetAllReportsResponse;
    message.reports = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reports.push(Report.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetAllReportsResponse {
    const message = {
      ...baseQueryGetAllReportsResponse,
    } as QueryGetAllReportsResponse;
    message.reports = [];
    if (object.reports !== undefined && object.reports !== null) {
      for (const e of object.reports) {
        message.reports.push(Report.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetAllReportsResponse): unknown {
    const obj: any = {};
    if (message.reports) {
      obj.reports = message.reports.map((e) =>
        e ? Report.toJSON(e) : undefined
      );
    } else {
      obj.reports = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetAllReportsResponse>
  ): QueryGetAllReportsResponse {
    const message = {
      ...baseQueryGetAllReportsResponse,
    } as QueryGetAllReportsResponse;
    message.reports = [];
    if (object.reports !== undefined && object.reports !== null) {
      for (const e of object.reports) {
        message.reports.push(Report.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCommentsByReportIdRequest: object = { reportId: 0 };

export const QueryGetCommentsByReportIdRequest = {
  encode(
    message: QueryGetCommentsByReportIdRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.reportId !== 0) {
      writer.uint32(8).uint64(message.reportId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCommentsByReportIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCommentsByReportIdRequest,
    } as QueryGetCommentsByReportIdRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.reportId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCommentsByReportIdRequest {
    const message = {
      ...baseQueryGetCommentsByReportIdRequest,
    } as QueryGetCommentsByReportIdRequest;
    if (object.reportId !== undefined && object.reportId !== null) {
      message.reportId = Number(object.reportId);
    } else {
      message.reportId = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCommentsByReportIdRequest): unknown {
    const obj: any = {};
    message.reportId !== undefined && (obj.reportId = message.reportId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCommentsByReportIdRequest>
  ): QueryGetCommentsByReportIdRequest {
    const message = {
      ...baseQueryGetCommentsByReportIdRequest,
    } as QueryGetCommentsByReportIdRequest;
    if (object.reportId !== undefined && object.reportId !== null) {
      message.reportId = object.reportId;
    } else {
      message.reportId = 0;
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCommentsByReportIdResponse: object = {};

export const QueryGetCommentsByReportIdResponse = {
  encode(
    message: QueryGetCommentsByReportIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.comments) {
      Comment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCommentsByReportIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCommentsByReportIdResponse,
    } as QueryGetCommentsByReportIdResponse;
    message.comments = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.comments.push(Comment.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCommentsByReportIdResponse {
    const message = {
      ...baseQueryGetCommentsByReportIdResponse,
    } as QueryGetCommentsByReportIdResponse;
    message.comments = [];
    if (object.comments !== undefined && object.comments !== null) {
      for (const e of object.comments) {
        message.comments.push(Comment.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCommentsByReportIdResponse): unknown {
    const obj: any = {};
    if (message.comments) {
      obj.comments = message.comments.map((e) =>
        e ? Comment.toJSON(e) : undefined
      );
    } else {
      obj.comments = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCommentsByReportIdResponse>
  ): QueryGetCommentsByReportIdResponse {
    const message = {
      ...baseQueryGetCommentsByReportIdResponse,
    } as QueryGetCommentsByReportIdResponse;
    message.comments = [];
    if (object.comments !== undefined && object.comments !== null) {
      for (const e of object.comments) {
        message.comments.push(Comment.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetCommentByIdRequest: object = { id: 0 };

export const QueryGetCommentByIdRequest = {
  encode(
    message: QueryGetCommentByIdRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCommentByIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCommentByIdRequest,
    } as QueryGetCommentByIdRequest;
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

  fromJSON(object: any): QueryGetCommentByIdRequest {
    const message = {
      ...baseQueryGetCommentByIdRequest,
    } as QueryGetCommentByIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetCommentByIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCommentByIdRequest>
  ): QueryGetCommentByIdRequest {
    const message = {
      ...baseQueryGetCommentByIdRequest,
    } as QueryGetCommentByIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetCommentByIdResponse: object = {};

export const QueryGetCommentByIdResponse = {
  encode(
    message: QueryGetCommentByIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.comment !== undefined) {
      Comment.encode(message.comment, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetCommentByIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetCommentByIdResponse,
    } as QueryGetCommentByIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.comment = Comment.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetCommentByIdResponse {
    const message = {
      ...baseQueryGetCommentByIdResponse,
    } as QueryGetCommentByIdResponse;
    if (object.comment !== undefined && object.comment !== null) {
      message.comment = Comment.fromJSON(object.comment);
    } else {
      message.comment = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetCommentByIdResponse): unknown {
    const obj: any = {};
    message.comment !== undefined &&
      (obj.comment = message.comment
        ? Comment.toJSON(message.comment)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetCommentByIdResponse>
  ): QueryGetCommentByIdResponse {
    const message = {
      ...baseQueryGetCommentByIdResponse,
    } as QueryGetCommentByIdResponse;
    if (object.comment !== undefined && object.comment !== null) {
      message.comment = Comment.fromPartial(object.comment);
    } else {
      message.comment = undefined;
    }
    return message;
  },
};

const baseQueryGetReportsCountRequest: object = {};

export const QueryGetReportsCountRequest = {
  encode(
    _: QueryGetReportsCountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetReportsCountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetReportsCountRequest,
    } as QueryGetReportsCountRequest;
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

  fromJSON(_: any): QueryGetReportsCountRequest {
    const message = {
      ...baseQueryGetReportsCountRequest,
    } as QueryGetReportsCountRequest;
    return message;
  },

  toJSON(_: QueryGetReportsCountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetReportsCountRequest>
  ): QueryGetReportsCountRequest {
    const message = {
      ...baseQueryGetReportsCountRequest,
    } as QueryGetReportsCountRequest;
    return message;
  },
};

const baseQueryGetReportsCountResponse: object = { count: 0 };

export const QueryGetReportsCountResponse = {
  encode(
    message: QueryGetReportsCountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.count !== 0) {
      writer.uint32(8).uint64(message.count);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetReportsCountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetReportsCountResponse,
    } as QueryGetReportsCountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.count = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetReportsCountResponse {
    const message = {
      ...baseQueryGetReportsCountResponse,
    } as QueryGetReportsCountResponse;
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },

  toJSON(message: QueryGetReportsCountResponse): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetReportsCountResponse>
  ): QueryGetReportsCountResponse {
    const message = {
      ...baseQueryGetReportsCountResponse,
    } as QueryGetReportsCountResponse;
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of GetAllReports items. */
  GetAllReports(
    request: QueryGetAllReportsRequest
  ): Promise<QueryGetAllReportsResponse>;
  /** Queries a list of GetCommentsByReportId items. */
  GetCommentsByReportId(
    request: QueryGetCommentsByReportIdRequest
  ): Promise<QueryGetCommentsByReportIdResponse>;
  /** Queries a list of GetCommentById items. */
  GetCommentById(
    request: QueryGetCommentByIdRequest
  ): Promise<QueryGetCommentByIdResponse>;
  /** Queries a list of GetReportsCount items. */
  GetReportsCount(
    request: QueryGetReportsCountRequest
  ): Promise<QueryGetReportsCountResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("garyeong.garyeong.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  GetAllReports(
    request: QueryGetAllReportsRequest
  ): Promise<QueryGetAllReportsResponse> {
    const data = QueryGetAllReportsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "garyeong.garyeong.Query",
      "GetAllReports",
      data
    );
    return promise.then((data) =>
      QueryGetAllReportsResponse.decode(new Reader(data))
    );
  }

  GetCommentsByReportId(
    request: QueryGetCommentsByReportIdRequest
  ): Promise<QueryGetCommentsByReportIdResponse> {
    const data = QueryGetCommentsByReportIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "garyeong.garyeong.Query",
      "GetCommentsByReportId",
      data
    );
    return promise.then((data) =>
      QueryGetCommentsByReportIdResponse.decode(new Reader(data))
    );
  }

  GetCommentById(
    request: QueryGetCommentByIdRequest
  ): Promise<QueryGetCommentByIdResponse> {
    const data = QueryGetCommentByIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "garyeong.garyeong.Query",
      "GetCommentById",
      data
    );
    return promise.then((data) =>
      QueryGetCommentByIdResponse.decode(new Reader(data))
    );
  }

  GetReportsCount(
    request: QueryGetReportsCountRequest
  ): Promise<QueryGetReportsCountResponse> {
    const data = QueryGetReportsCountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "garyeong.garyeong.Query",
      "GetReportsCount",
      data
    );
    return promise.then((data) =>
      QueryGetReportsCountResponse.decode(new Reader(data))
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
