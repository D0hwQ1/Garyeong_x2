/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../garyeong/params";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { Report, Comment, Profile } from "../garyeong/models";

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

export interface QueryGetReportByIdRequest {
  id: number;
}

export interface QueryGetReportByIdResponse {
  report: Report | undefined;
}

export interface QueryGetReportByTargetRequest {
  target: string;
}

export interface QueryGetReportByTargetResponse {
  report: Report[];
}

export interface QueryGetReportsByTagsRequest {
  tags: string[];
}

export interface QueryGetReportsByTagsResponse {
  report: Report[];
}

export interface QueryGetProfilesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryGetProfilesResponse {
  profiles: Profile[];
  pagination: PageResponse | undefined;
}

export interface QueryGetProfilesCountRequest {}

export interface QueryGetProfilesCountResponse {
  count: number;
}

export interface QueryGetProfileByIdRequest {
  id: number;
}

export interface QueryGetProfileByIdResponse {
  profile: Profile | undefined;
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

const baseQueryGetReportByIdRequest: object = { id: 0 };

export const QueryGetReportByIdRequest = {
  encode(
    message: QueryGetReportByIdRequest,
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
  ): QueryGetReportByIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetReportByIdRequest,
    } as QueryGetReportByIdRequest;
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

  fromJSON(object: any): QueryGetReportByIdRequest {
    const message = {
      ...baseQueryGetReportByIdRequest,
    } as QueryGetReportByIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetReportByIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetReportByIdRequest>
  ): QueryGetReportByIdRequest {
    const message = {
      ...baseQueryGetReportByIdRequest,
    } as QueryGetReportByIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetReportByIdResponse: object = {};

export const QueryGetReportByIdResponse = {
  encode(
    message: QueryGetReportByIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.report !== undefined) {
      Report.encode(message.report, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetReportByIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetReportByIdResponse,
    } as QueryGetReportByIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.report = Report.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetReportByIdResponse {
    const message = {
      ...baseQueryGetReportByIdResponse,
    } as QueryGetReportByIdResponse;
    if (object.report !== undefined && object.report !== null) {
      message.report = Report.fromJSON(object.report);
    } else {
      message.report = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetReportByIdResponse): unknown {
    const obj: any = {};
    message.report !== undefined &&
      (obj.report = message.report ? Report.toJSON(message.report) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetReportByIdResponse>
  ): QueryGetReportByIdResponse {
    const message = {
      ...baseQueryGetReportByIdResponse,
    } as QueryGetReportByIdResponse;
    if (object.report !== undefined && object.report !== null) {
      message.report = Report.fromPartial(object.report);
    } else {
      message.report = undefined;
    }
    return message;
  },
};

const baseQueryGetReportByTargetRequest: object = { target: "" };

export const QueryGetReportByTargetRequest = {
  encode(
    message: QueryGetReportByTargetRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.target !== "") {
      writer.uint32(10).string(message.target);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetReportByTargetRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetReportByTargetRequest,
    } as QueryGetReportByTargetRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.target = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetReportByTargetRequest {
    const message = {
      ...baseQueryGetReportByTargetRequest,
    } as QueryGetReportByTargetRequest;
    if (object.target !== undefined && object.target !== null) {
      message.target = String(object.target);
    } else {
      message.target = "";
    }
    return message;
  },

  toJSON(message: QueryGetReportByTargetRequest): unknown {
    const obj: any = {};
    message.target !== undefined && (obj.target = message.target);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetReportByTargetRequest>
  ): QueryGetReportByTargetRequest {
    const message = {
      ...baseQueryGetReportByTargetRequest,
    } as QueryGetReportByTargetRequest;
    if (object.target !== undefined && object.target !== null) {
      message.target = object.target;
    } else {
      message.target = "";
    }
    return message;
  },
};

const baseQueryGetReportByTargetResponse: object = {};

export const QueryGetReportByTargetResponse = {
  encode(
    message: QueryGetReportByTargetResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.report) {
      Report.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetReportByTargetResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetReportByTargetResponse,
    } as QueryGetReportByTargetResponse;
    message.report = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.report.push(Report.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetReportByTargetResponse {
    const message = {
      ...baseQueryGetReportByTargetResponse,
    } as QueryGetReportByTargetResponse;
    message.report = [];
    if (object.report !== undefined && object.report !== null) {
      for (const e of object.report) {
        message.report.push(Report.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryGetReportByTargetResponse): unknown {
    const obj: any = {};
    if (message.report) {
      obj.report = message.report.map((e) =>
        e ? Report.toJSON(e) : undefined
      );
    } else {
      obj.report = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetReportByTargetResponse>
  ): QueryGetReportByTargetResponse {
    const message = {
      ...baseQueryGetReportByTargetResponse,
    } as QueryGetReportByTargetResponse;
    message.report = [];
    if (object.report !== undefined && object.report !== null) {
      for (const e of object.report) {
        message.report.push(Report.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryGetReportsByTagsRequest: object = { tags: "" };

export const QueryGetReportsByTagsRequest = {
  encode(
    message: QueryGetReportsByTagsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.tags) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetReportsByTagsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetReportsByTagsRequest,
    } as QueryGetReportsByTagsRequest;
    message.tags = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.tags.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetReportsByTagsRequest {
    const message = {
      ...baseQueryGetReportsByTagsRequest,
    } as QueryGetReportsByTagsRequest;
    message.tags = [];
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: QueryGetReportsByTagsRequest): unknown {
    const obj: any = {};
    if (message.tags) {
      obj.tags = message.tags.map((e) => e);
    } else {
      obj.tags = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetReportsByTagsRequest>
  ): QueryGetReportsByTagsRequest {
    const message = {
      ...baseQueryGetReportsByTagsRequest,
    } as QueryGetReportsByTagsRequest;
    message.tags = [];
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(e);
      }
    }
    return message;
  },
};

const baseQueryGetReportsByTagsResponse: object = {};

export const QueryGetReportsByTagsResponse = {
  encode(
    message: QueryGetReportsByTagsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.report) {
      Report.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetReportsByTagsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetReportsByTagsResponse,
    } as QueryGetReportsByTagsResponse;
    message.report = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.report.push(Report.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetReportsByTagsResponse {
    const message = {
      ...baseQueryGetReportsByTagsResponse,
    } as QueryGetReportsByTagsResponse;
    message.report = [];
    if (object.report !== undefined && object.report !== null) {
      for (const e of object.report) {
        message.report.push(Report.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryGetReportsByTagsResponse): unknown {
    const obj: any = {};
    if (message.report) {
      obj.report = message.report.map((e) =>
        e ? Report.toJSON(e) : undefined
      );
    } else {
      obj.report = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetReportsByTagsResponse>
  ): QueryGetReportsByTagsResponse {
    const message = {
      ...baseQueryGetReportsByTagsResponse,
    } as QueryGetReportsByTagsResponse;
    message.report = [];
    if (object.report !== undefined && object.report !== null) {
      for (const e of object.report) {
        message.report.push(Report.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryGetProfilesRequest: object = {};

export const QueryGetProfilesRequest = {
  encode(
    message: QueryGetProfilesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetProfilesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfilesRequest,
    } as QueryGetProfilesRequest;
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

  fromJSON(object: any): QueryGetProfilesRequest {
    const message = {
      ...baseQueryGetProfilesRequest,
    } as QueryGetProfilesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProfilesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfilesRequest>
  ): QueryGetProfilesRequest {
    const message = {
      ...baseQueryGetProfilesRequest,
    } as QueryGetProfilesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetProfilesResponse: object = {};

export const QueryGetProfilesResponse = {
  encode(
    message: QueryGetProfilesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.profiles) {
      Profile.encode(v!, writer.uint32(10).fork()).ldelim();
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
  ): QueryGetProfilesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfilesResponse,
    } as QueryGetProfilesResponse;
    message.profiles = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profiles.push(Profile.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryGetProfilesResponse {
    const message = {
      ...baseQueryGetProfilesResponse,
    } as QueryGetProfilesResponse;
    message.profiles = [];
    if (object.profiles !== undefined && object.profiles !== null) {
      for (const e of object.profiles) {
        message.profiles.push(Profile.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProfilesResponse): unknown {
    const obj: any = {};
    if (message.profiles) {
      obj.profiles = message.profiles.map((e) =>
        e ? Profile.toJSON(e) : undefined
      );
    } else {
      obj.profiles = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfilesResponse>
  ): QueryGetProfilesResponse {
    const message = {
      ...baseQueryGetProfilesResponse,
    } as QueryGetProfilesResponse;
    message.profiles = [];
    if (object.profiles !== undefined && object.profiles !== null) {
      for (const e of object.profiles) {
        message.profiles.push(Profile.fromPartial(e));
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

const baseQueryGetProfilesCountRequest: object = {};

export const QueryGetProfilesCountRequest = {
  encode(
    _: QueryGetProfilesCountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProfilesCountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfilesCountRequest,
    } as QueryGetProfilesCountRequest;
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

  fromJSON(_: any): QueryGetProfilesCountRequest {
    const message = {
      ...baseQueryGetProfilesCountRequest,
    } as QueryGetProfilesCountRequest;
    return message;
  },

  toJSON(_: QueryGetProfilesCountRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetProfilesCountRequest>
  ): QueryGetProfilesCountRequest {
    const message = {
      ...baseQueryGetProfilesCountRequest,
    } as QueryGetProfilesCountRequest;
    return message;
  },
};

const baseQueryGetProfilesCountResponse: object = { count: 0 };

export const QueryGetProfilesCountResponse = {
  encode(
    message: QueryGetProfilesCountResponse,
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
  ): QueryGetProfilesCountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfilesCountResponse,
    } as QueryGetProfilesCountResponse;
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

  fromJSON(object: any): QueryGetProfilesCountResponse {
    const message = {
      ...baseQueryGetProfilesCountResponse,
    } as QueryGetProfilesCountResponse;
    if (object.count !== undefined && object.count !== null) {
      message.count = Number(object.count);
    } else {
      message.count = 0;
    }
    return message;
  },

  toJSON(message: QueryGetProfilesCountResponse): unknown {
    const obj: any = {};
    message.count !== undefined && (obj.count = message.count);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfilesCountResponse>
  ): QueryGetProfilesCountResponse {
    const message = {
      ...baseQueryGetProfilesCountResponse,
    } as QueryGetProfilesCountResponse;
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    } else {
      message.count = 0;
    }
    return message;
  },
};

const baseQueryGetProfileByIdRequest: object = { id: 0 };

export const QueryGetProfileByIdRequest = {
  encode(
    message: QueryGetProfileByIdRequest,
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
  ): QueryGetProfileByIdRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfileByIdRequest,
    } as QueryGetProfileByIdRequest;
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

  fromJSON(object: any): QueryGetProfileByIdRequest {
    const message = {
      ...baseQueryGetProfileByIdRequest,
    } as QueryGetProfileByIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id);
    } else {
      message.id = 0;
    }
    return message;
  },

  toJSON(message: QueryGetProfileByIdRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfileByIdRequest>
  ): QueryGetProfileByIdRequest {
    const message = {
      ...baseQueryGetProfileByIdRequest,
    } as QueryGetProfileByIdRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = 0;
    }
    return message;
  },
};

const baseQueryGetProfileByIdResponse: object = {};

export const QueryGetProfileByIdResponse = {
  encode(
    message: QueryGetProfileByIdResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.profile !== undefined) {
      Profile.encode(message.profile, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetProfileByIdResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetProfileByIdResponse,
    } as QueryGetProfileByIdResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.profile = Profile.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetProfileByIdResponse {
    const message = {
      ...baseQueryGetProfileByIdResponse,
    } as QueryGetProfileByIdResponse;
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromJSON(object.profile);
    } else {
      message.profile = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetProfileByIdResponse): unknown {
    const obj: any = {};
    message.profile !== undefined &&
      (obj.profile = message.profile
        ? Profile.toJSON(message.profile)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetProfileByIdResponse>
  ): QueryGetProfileByIdResponse {
    const message = {
      ...baseQueryGetProfileByIdResponse,
    } as QueryGetProfileByIdResponse;
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Profile.fromPartial(object.profile);
    } else {
      message.profile = undefined;
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
  /** Queries a list of GetReportById items. */
  GetReportById(
    request: QueryGetReportByIdRequest
  ): Promise<QueryGetReportByIdResponse>;
  /** Queries a list of GetReportByTarget items. */
  GetReportByTarget(
    request: QueryGetReportByTargetRequest
  ): Promise<QueryGetReportByTargetResponse>;
  /** Queries a list of GetReportsByTags items. */
  GetReportsByTags(
    request: QueryGetReportsByTagsRequest
  ): Promise<QueryGetReportsByTagsResponse>;
  /** Queries a list of GetProfiles items. */
  GetProfiles(
    request: QueryGetProfilesRequest
  ): Promise<QueryGetProfilesResponse>;
  /** Queries a list of GetProfilesCount items. */
  GetProfilesCount(
    request: QueryGetProfilesCountRequest
  ): Promise<QueryGetProfilesCountResponse>;
  /** Queries a list of GetProfileById items. */
  GetProfileById(
    request: QueryGetProfileByIdRequest
  ): Promise<QueryGetProfileByIdResponse>;
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

  GetReportById(
    request: QueryGetReportByIdRequest
  ): Promise<QueryGetReportByIdResponse> {
    const data = QueryGetReportByIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "garyeong.garyeong.Query",
      "GetReportById",
      data
    );
    return promise.then((data) =>
      QueryGetReportByIdResponse.decode(new Reader(data))
    );
  }

  GetReportByTarget(
    request: QueryGetReportByTargetRequest
  ): Promise<QueryGetReportByTargetResponse> {
    const data = QueryGetReportByTargetRequest.encode(request).finish();
    const promise = this.rpc.request(
      "garyeong.garyeong.Query",
      "GetReportByTarget",
      data
    );
    return promise.then((data) =>
      QueryGetReportByTargetResponse.decode(new Reader(data))
    );
  }

  GetReportsByTags(
    request: QueryGetReportsByTagsRequest
  ): Promise<QueryGetReportsByTagsResponse> {
    const data = QueryGetReportsByTagsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "garyeong.garyeong.Query",
      "GetReportsByTags",
      data
    );
    return promise.then((data) =>
      QueryGetReportsByTagsResponse.decode(new Reader(data))
    );
  }

  GetProfiles(
    request: QueryGetProfilesRequest
  ): Promise<QueryGetProfilesResponse> {
    const data = QueryGetProfilesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "garyeong.garyeong.Query",
      "GetProfiles",
      data
    );
    return promise.then((data) =>
      QueryGetProfilesResponse.decode(new Reader(data))
    );
  }

  GetProfilesCount(
    request: QueryGetProfilesCountRequest
  ): Promise<QueryGetProfilesCountResponse> {
    const data = QueryGetProfilesCountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "garyeong.garyeong.Query",
      "GetProfilesCount",
      data
    );
    return promise.then((data) =>
      QueryGetProfilesCountResponse.decode(new Reader(data))
    );
  }

  GetProfileById(
    request: QueryGetProfileByIdRequest
  ): Promise<QueryGetProfileByIdResponse> {
    const data = QueryGetProfileByIdRequest.encode(request).finish();
    const promise = this.rpc.request(
      "garyeong.garyeong.Query",
      "GetProfileById",
      data
    );
    return promise.then((data) =>
      QueryGetProfileByIdResponse.decode(new Reader(data))
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
