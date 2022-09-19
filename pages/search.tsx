import React, { useState, useEffect } from "react"
import axios from "axios"
import Card from "../components/card"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { txClient } from "../assets/generated"
import { chainInfo } from "../assets/chain"

export default function Search() {
    const addr = useSelector((state: any) => state.wallet.addr)
    const [tx, setTx] = useState<any>(null)
    const [data, setData] = useState(null)

    useEffect(() => {
        ;(async () => {
            if (!data) {
                const q = location.search.slice(1)
                if (q.includes(".")) setData((await axios.get(`${chainInfo.rest}/garyeong/garyeong/get_report_by_site/${q}`)).data.report)
                else if (q.includes(",")) setData((await axios.get(`${chainInfo.rest}/garyeong/garyeong/get_reports_by_tags/${q}`)).data.report)
                else {
                    var res = (await axios.get(`${chainInfo.rest}/garyeong/garyeong/get_report_by_target/${q}`)).data.report
                    if (res) setData(res)
                    else setData((await axios.get(`${chainInfo.rest}/garyeong/garyeong/get_reports_by_tags/${q}`)).data.report)
                }
            }
        })()
    }, [])

    useEffect(() => {
        ;(async () => {
            if (addr != "0xasdf") {
                const signer = window.keplr.getOfflineSigner!(chainInfo.chainId)
                setTx(await txClient(signer, { addr: chainInfo.rpc }))
            }
        })()
    }, [addr])

    return (
        <Container>
            {data &&
                data.map((item, idx) => {
                    return (
                        <Card
                            key={idx}
                            title={item.target}
                            link={item.link}
                            content={item.description}
                            date={item.createdAt}
                            tags={item.tags}
                            cnt={item.recommendCount}
                            id={item.id}
                            addr={addr}
                            tx={tx}
                        ></Card>
                    )
                })}
            {!data && (
                <div style={{ display: "flex", width: "100vw", height: "80vh", justifyContent: "center", alignItems: "center", fontSize: "2rem" }}>
                    Loading...
                </div>
            )}
            {data == "" && (
                <div style={{ display: "flex", width: "100vw", height: "80vh", justifyContent: "center", alignItems: "center", fontSize: "2rem" }}>
                    검색하시는 값이 리스트에 존재하지 않습니다.
                </div>
            )}
        </Container>
    )
}

const Container: any = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media screen and (max-width: 800px) {
        justify-content: center;
    }
`
