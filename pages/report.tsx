import React, { useRef, useState, useEffect } from "react"
import styled from "styled-components"
import axios from "axios"
import { useSelector } from "react-redux"
import { chainInfo } from "../assets/chain"
import { txClient } from "../assets/generated"

export default function Report() {
    const addr = useSelector((state: any) => state.wallet.addr)
    const [tx, setTx] = useState<any>(null)
    const ref = useRef<any>()

    const [target, setTarget] = useState<string>("")
    const [link, setLink] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const [tags, setTags] = useState<string>("")

    useEffect(() => {
        ref.current.style.height = "0px"
        const scrollHeight = ref.current.scrollHeight
        ref.current.style.height = scrollHeight > 150 ? "150px" : scrollHeight + "px"
    }, [desc])

    useEffect(() => {
        ;(async () => {
            if (addr != "0xasdf") {
                const signer = window.keplr.getOfflineSigner!(chainInfo.chainId)
                setTx(await txClient(signer, { addr: chainInfo.rpc }))
            }
        })()
    }, [addr])

    return (
        <Base>
            <div className="box">
                <p>Target</p>
                <input
                    value={target}
                    onChange={(e) => {
                        setTarget(e.target.value)
                    }}
                />
                <p>Link</p>
                <input
                    value={link}
                    onChange={(e) => {
                        setLink(e.target.value)
                    }}
                />
                <p>Desc</p>
                <textarea
                    ref={ref}
                    value={desc}
                    onChange={(e) => {
                        setDesc(e.target.value)
                    }}
                />
                <p>Tags</p>
                <input
                    value={tags}
                    onChange={(e) => {
                        setTags(e.target.value)
                    }}
                />
                <button
                    onClick={async () => {
                        if (addr == "0xasdf") alert("???????????? ??????????????????.")
                        else {
                            try {
                                var res = (await axios.get(`${chainInfo.rest}/garyeong/garyeong/get_profile_by_address/${addr}`)).data

                                if (target && link && desc && tags) {
                                    res = await tx.signAndBroadcast([
                                        tx.msgUploadReport({
                                            creator: addr,
                                            target: target,
                                            link: link,
                                            description: desc,
                                            tags: tags.replaceAll(" ", "").split(","),
                                        }),
                                    ])

                                    setTarget("")
                                    setLink("")
                                    setDesc("")
                                    setTags("")

                                    alert("????????? ?????????????????????.")
                                } else {
                                    alert("?????? ?????? ???????????????.")
                                }
                            } catch (e) {
                                if (e.message.includes("404")) {
                                    alert("???????????? ????????????.\n???????????? ?????????????????????.")

                                    res = await tx.signAndBroadcast([tx.msgSetProfile({ creator: addr })])
                                    alert("????????? ?????? ??????.\n????????? ?????? ??????????????????.")
                                }
                            }
                        }
                    }}
                >
                    Report!
                </button>
            </div>
        </Base>
    )
}

const Base: any = styled.div`
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;

    .box {
        display: flex;
        flex-direction: column;
        width: 400px;

        border: 1px solid black;
        border-radius: 10px;
        padding: 1rem 2rem;
    }

    button {
        margin: 2rem 10rem;
    }

    @media screen and (max-width: 800px) {
        margin-top: 30px;
        height: 500px;
        justify-content: center;
        align-items: normal;
        .box {
            width: 70%;
        }

        button {
            margin: 2rem 0;
        }
    }
`
