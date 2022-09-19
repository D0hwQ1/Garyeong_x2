/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal"
import * as Long from "long"

export const protobufPackage = "garyeong.garyeong"

export interface MsgUploadReport {
    creator: string
    target: string
    link: string
    description: string
    tags: string[]
}

export interface MsgUploadReportResponse {
    id: number
}

export interface MsgCreateComment {
    creator: string
    reportId: number
    comment: string
}

export interface MsgCreateCommentResponse {}

export interface MsgSetProfile {
    creator: string
}

export interface MsgSetProfileResponse {
    id: number
}

export interface MsgSendRecommend {
    creator: string
    reportId: number
}

export interface MsgSendRecommendResponse {}

const baseMsgUploadReport: object = {
    creator: "",
    target: "",
    link: "",
    description: "",
    tags: "",
}

export const MsgUploadReport = {
    encode(message: MsgUploadReport, writer: Writer = Writer.create()): Writer {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator)
        }
        if (message.target !== "") {
            writer.uint32(18).string(message.target)
        }
        if (message.link !== "") {
            writer.uint32(26).string(message.link)
        }
        if (message.description !== "") {
            writer.uint32(34).string(message.description)
        }
        for (const v of message.tags) {
            writer.uint32(42).string(v!)
        }
        return writer
    },

    decode(input: Reader | Uint8Array, length?: number): MsgUploadReport {
        const reader = input instanceof Uint8Array ? new Reader(input) : input
        let end = length === undefined ? reader.len : reader.pos + length
        const message = { ...baseMsgUploadReport } as MsgUploadReport
        message.tags = []
        while (reader.pos < end) {
            const tag = reader.uint32()
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string()
                    break
                case 2:
                    message.target = reader.string()
                    break
                case 3:
                    message.link = reader.string()
                    break
                case 4:
                    message.description = reader.string()
                    break
                case 5:
                    message.tags.push(reader.string())
                    break
                default:
                    reader.skipType(tag & 7)
                    break
            }
        }
        return message
    },

    fromJSON(object: any): MsgUploadReport {
        const message = { ...baseMsgUploadReport } as MsgUploadReport
        message.tags = []
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator)
        } else {
            message.creator = ""
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = String(object.target)
        } else {
            message.target = ""
        }
        if (object.link !== undefined && object.link !== null) {
            message.link = String(object.link)
        } else {
            message.link = ""
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description)
        } else {
            message.description = ""
        }
        if (object.tags !== undefined && object.tags !== null) {
            for (const e of object.tags) {
                message.tags.push(String(e))
            }
        }
        return message
    },

    toJSON(message: MsgUploadReport): unknown {
        const obj: any = {}
        message.creator !== undefined && (obj.creator = message.creator)
        message.target !== undefined && (obj.target = message.target)
        message.link !== undefined && (obj.link = message.link)
        message.description !== undefined && (obj.description = message.description)
        if (message.tags) {
            obj.tags = message.tags.map((e) => e)
        } else {
            obj.tags = []
        }
        return obj
    },

    fromPartial(object: DeepPartial<MsgUploadReport>): MsgUploadReport {
        const message = { ...baseMsgUploadReport } as MsgUploadReport
        message.tags = []
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator
        } else {
            message.creator = ""
        }
        if (object.target !== undefined && object.target !== null) {
            message.target = object.target
        } else {
            message.target = ""
        }
        if (object.link !== undefined && object.link !== null) {
            message.link = object.link
        } else {
            message.link = ""
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description
        } else {
            message.description = ""
        }
        if (object.tags !== undefined && object.tags !== null) {
            for (const e of object.tags) {
                message.tags.push(e)
            }
        }
        return message
    },
}

const baseMsgUploadReportResponse: object = { id: 0 }

export const MsgUploadReportResponse = {
    encode(message: MsgUploadReportResponse, writer: Writer = Writer.create()): Writer {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id)
        }
        return writer
    },

    decode(input: Reader | Uint8Array, length?: number): MsgUploadReportResponse {
        const reader = input instanceof Uint8Array ? new Reader(input) : input
        let end = length === undefined ? reader.len : reader.pos + length
        const message = {
            ...baseMsgUploadReportResponse,
        } as MsgUploadReportResponse
        while (reader.pos < end) {
            const tag = reader.uint32()
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64() as Long)
                    break
                default:
                    reader.skipType(tag & 7)
                    break
            }
        }
        return message
    },

    fromJSON(object: any): MsgUploadReportResponse {
        const message = {
            ...baseMsgUploadReportResponse,
        } as MsgUploadReportResponse
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id)
        } else {
            message.id = 0
        }
        return message
    },

    toJSON(message: MsgUploadReportResponse): unknown {
        const obj: any = {}
        message.id !== undefined && (obj.id = message.id)
        return obj
    },

    fromPartial(object: DeepPartial<MsgUploadReportResponse>): MsgUploadReportResponse {
        const message = {
            ...baseMsgUploadReportResponse,
        } as MsgUploadReportResponse
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id
        } else {
            message.id = 0
        }
        return message
    },
}

const baseMsgCreateComment: object = { creator: "", reportId: 0, comment: "" }

export const MsgCreateComment = {
    encode(message: MsgCreateComment, writer: Writer = Writer.create()): Writer {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator)
        }
        if (message.reportId !== 0) {
            writer.uint32(16).uint64(message.reportId)
        }
        if (message.comment !== "") {
            writer.uint32(26).string(message.comment)
        }
        return writer
    },

    decode(input: Reader | Uint8Array, length?: number): MsgCreateComment {
        const reader = input instanceof Uint8Array ? new Reader(input) : input
        let end = length === undefined ? reader.len : reader.pos + length
        const message = { ...baseMsgCreateComment } as MsgCreateComment
        while (reader.pos < end) {
            const tag = reader.uint32()
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string()
                    break
                case 2:
                    message.reportId = longToNumber(reader.uint64() as Long)
                    break
                case 3:
                    message.comment = reader.string()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
            }
        }
        return message
    },

    fromJSON(object: any): MsgCreateComment {
        const message = { ...baseMsgCreateComment } as MsgCreateComment
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator)
        } else {
            message.creator = ""
        }
        if (object.reportId !== undefined && object.reportId !== null) {
            message.reportId = Number(object.reportId)
        } else {
            message.reportId = 0
        }
        if (object.comment !== undefined && object.comment !== null) {
            message.comment = String(object.comment)
        } else {
            message.comment = ""
        }
        return message
    },

    toJSON(message: MsgCreateComment): unknown {
        const obj: any = {}
        message.creator !== undefined && (obj.creator = message.creator)
        message.reportId !== undefined && (obj.reportId = message.reportId)
        message.comment !== undefined && (obj.comment = message.comment)
        return obj
    },

    fromPartial(object: DeepPartial<MsgCreateComment>): MsgCreateComment {
        const message = { ...baseMsgCreateComment } as MsgCreateComment
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator
        } else {
            message.creator = ""
        }
        if (object.reportId !== undefined && object.reportId !== null) {
            message.reportId = object.reportId
        } else {
            message.reportId = 0
        }
        if (object.comment !== undefined && object.comment !== null) {
            message.comment = object.comment
        } else {
            message.comment = ""
        }
        return message
    },
}

const baseMsgCreateCommentResponse: object = {}

export const MsgCreateCommentResponse = {
    encode(_: MsgCreateCommentResponse, writer: Writer = Writer.create()): Writer {
        return writer
    },

    decode(input: Reader | Uint8Array, length?: number): MsgCreateCommentResponse {
        const reader = input instanceof Uint8Array ? new Reader(input) : input
        let end = length === undefined ? reader.len : reader.pos + length
        const message = {
            ...baseMsgCreateCommentResponse,
        } as MsgCreateCommentResponse
        while (reader.pos < end) {
            const tag = reader.uint32()
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7)
                    break
            }
        }
        return message
    },

    fromJSON(_: any): MsgCreateCommentResponse {
        const message = {
            ...baseMsgCreateCommentResponse,
        } as MsgCreateCommentResponse
        return message
    },

    toJSON(_: MsgCreateCommentResponse): unknown {
        const obj: any = {}
        return obj
    },

    fromPartial(_: DeepPartial<MsgCreateCommentResponse>): MsgCreateCommentResponse {
        const message = {
            ...baseMsgCreateCommentResponse,
        } as MsgCreateCommentResponse
        return message
    },
}

const baseMsgSetProfile: object = { creator: "" }

export const MsgSetProfile = {
    encode(message: MsgSetProfile, writer: Writer = Writer.create()): Writer {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator)
        }
        return writer
    },

    decode(input: Reader | Uint8Array, length?: number): MsgSetProfile {
        const reader = input instanceof Uint8Array ? new Reader(input) : input
        let end = length === undefined ? reader.len : reader.pos + length
        const message = { ...baseMsgSetProfile } as MsgSetProfile
        while (reader.pos < end) {
            const tag = reader.uint32()
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string()
                    break
                default:
                    reader.skipType(tag & 7)
                    break
            }
        }
        return message
    },

    fromJSON(object: any): MsgSetProfile {
        const message = { ...baseMsgSetProfile } as MsgSetProfile
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator)
        } else {
            message.creator = ""
        }
        return message
    },

    toJSON(message: MsgSetProfile): unknown {
        const obj: any = {}
        message.creator !== undefined && (obj.creator = message.creator)
        return obj
    },

    fromPartial(object: DeepPartial<MsgSetProfile>): MsgSetProfile {
        const message = { ...baseMsgSetProfile } as MsgSetProfile
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator
        } else {
            message.creator = ""
        }
        return message
    },
}

const baseMsgSetProfileResponse: object = { id: 0 }

export const MsgSetProfileResponse = {
    encode(message: MsgSetProfileResponse, writer: Writer = Writer.create()): Writer {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id)
        }
        return writer
    },

    decode(input: Reader | Uint8Array, length?: number): MsgSetProfileResponse {
        const reader = input instanceof Uint8Array ? new Reader(input) : input
        let end = length === undefined ? reader.len : reader.pos + length
        const message = { ...baseMsgSetProfileResponse } as MsgSetProfileResponse
        while (reader.pos < end) {
            const tag = reader.uint32()
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64() as Long)
                    break
                default:
                    reader.skipType(tag & 7)
                    break
            }
        }
        return message
    },

    fromJSON(object: any): MsgSetProfileResponse {
        const message = { ...baseMsgSetProfileResponse } as MsgSetProfileResponse
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id)
        } else {
            message.id = 0
        }
        return message
    },

    toJSON(message: MsgSetProfileResponse): unknown {
        const obj: any = {}
        message.id !== undefined && (obj.id = message.id)
        return obj
    },

    fromPartial(object: DeepPartial<MsgSetProfileResponse>): MsgSetProfileResponse {
        const message = { ...baseMsgSetProfileResponse } as MsgSetProfileResponse
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id
        } else {
            message.id = 0
        }
        return message
    },
}

const baseMsgSendRecommend: object = { creator: "", reportId: 0 }

export const MsgSendRecommend = {
    encode(message: MsgSendRecommend, writer: Writer = Writer.create()): Writer {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator)
        }
        if (message.reportId !== 0) {
            writer.uint32(16).uint64(message.reportId)
        }
        return writer
    },

    decode(input: Reader | Uint8Array, length?: number): MsgSendRecommend {
        const reader = input instanceof Uint8Array ? new Reader(input) : input
        let end = length === undefined ? reader.len : reader.pos + length
        const message = { ...baseMsgSendRecommend } as MsgSendRecommend
        while (reader.pos < end) {
            const tag = reader.uint32()
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string()
                    break
                case 2:
                    message.reportId = longToNumber(reader.uint64() as Long)
                    break
                default:
                    reader.skipType(tag & 7)
                    break
            }
        }
        return message
    },

    fromJSON(object: any): MsgSendRecommend {
        const message = { ...baseMsgSendRecommend } as MsgSendRecommend
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator)
        } else {
            message.creator = ""
        }
        if (object.reportId !== undefined && object.reportId !== null) {
            message.reportId = Number(object.reportId)
        } else {
            message.reportId = 0
        }
        return message
    },

    toJSON(message: MsgSendRecommend): unknown {
        const obj: any = {}
        message.creator !== undefined && (obj.creator = message.creator)
        message.reportId !== undefined && (obj.reportId = message.reportId)
        return obj
    },

    fromPartial(object: DeepPartial<MsgSendRecommend>): MsgSendRecommend {
        const message = { ...baseMsgSendRecommend } as MsgSendRecommend
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator
        } else {
            message.creator = ""
        }
        if (object.reportId !== undefined && object.reportId !== null) {
            message.reportId = object.reportId
        } else {
            message.reportId = 0
        }
        return message
    },
}

const baseMsgSendRecommendResponse: object = {}

export const MsgSendRecommendResponse = {
    encode(_: MsgSendRecommendResponse, writer: Writer = Writer.create()): Writer {
        return writer
    },

    decode(input: Reader | Uint8Array, length?: number): MsgSendRecommendResponse {
        const reader = input instanceof Uint8Array ? new Reader(input) : input
        let end = length === undefined ? reader.len : reader.pos + length
        const message = {
            ...baseMsgSendRecommendResponse,
        } as MsgSendRecommendResponse
        while (reader.pos < end) {
            const tag = reader.uint32()
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7)
                    break
            }
        }
        return message
    },

    fromJSON(_: any): MsgSendRecommendResponse {
        const message = {
            ...baseMsgSendRecommendResponse,
        } as MsgSendRecommendResponse
        return message
    },

    toJSON(_: MsgSendRecommendResponse): unknown {
        const obj: any = {}
        return obj
    },

    fromPartial(_: DeepPartial<MsgSendRecommendResponse>): MsgSendRecommendResponse {
        const message = {
            ...baseMsgSendRecommendResponse,
        } as MsgSendRecommendResponse
        return message
    },
}

/** Msg defines the Msg service. */
export interface Msg {
    UploadReport(request: MsgUploadReport): Promise<MsgUploadReportResponse>
    CreateComment(request: MsgCreateComment): Promise<MsgCreateCommentResponse>
    SetProfile(request: MsgSetProfile): Promise<MsgSetProfileResponse>
    /** this line is used by starport scaffolding # proto/tx/rpc */
    SendRecommend(request: MsgSendRecommend): Promise<MsgSendRecommendResponse>
}

export class MsgClientImpl implements Msg {
    private readonly rpc: Rpc
    constructor(rpc: Rpc) {
        this.rpc = rpc
    }
    UploadReport(request: MsgUploadReport): Promise<MsgUploadReportResponse> {
        const data = MsgUploadReport.encode(request).finish()
        const promise = this.rpc.request("garyeong.garyeong.Msg", "UploadReport", data)
        return promise.then((data) => MsgUploadReportResponse.decode(new Reader(data)))
    }

    CreateComment(request: MsgCreateComment): Promise<MsgCreateCommentResponse> {
        const data = MsgCreateComment.encode(request).finish()
        const promise = this.rpc.request("garyeong.garyeong.Msg", "CreateComment", data)
        return promise.then((data) => MsgCreateCommentResponse.decode(new Reader(data)))
    }

    SetProfile(request: MsgSetProfile): Promise<MsgSetProfileResponse> {
        const data = MsgSetProfile.encode(request).finish()
        const promise = this.rpc.request("garyeong.garyeong.Msg", "SetProfile", data)
        return promise.then((data) => MsgSetProfileResponse.decode(new Reader(data)))
    }

    SendRecommend(request: MsgSendRecommend): Promise<MsgSendRecommendResponse> {
        const data = MsgSendRecommend.encode(request).finish()
        const promise = this.rpc.request("garyeong.garyeong.Msg", "SendRecommend", data)
        return promise.then((data) => MsgSendRecommendResponse.decode(new Reader(data)))
    }
}

interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
    if (typeof globalThis !== "undefined") return globalThis
    if (typeof self !== "undefined") return self
    if (typeof window !== "undefined") return window
    if (typeof global !== "undefined") return global
    throw "Unable to locate global object"
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
    ? T
    : T extends Array<infer U>
    ? Array<DeepPartial<U>>
    : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepPartial<U>>
    : T extends {}
    ? { [K in keyof T]?: DeepPartial<T[K]> }
    : Partial<T>

function longToNumber(long: Long): number {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER")
    }
    return long.toNumber()
}
