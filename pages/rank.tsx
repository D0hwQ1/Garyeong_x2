import React, { useState, useEffect } from "react"
import axios from "axios"
import Card from "../components/card"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { chainInfo } from "../assets/chain"
import { txClient } from "../assets/generated"

export default function Rank() {
    const addr = useSelector((state: any) => state.wallet.addr)
    const [tx, setTx] = useState<any>(null)

    const [data, setData] = useState(null)

    useEffect(() => {
        ;(async () => {
            var reports = (await axios.get(`${chainInfo.rest}/garyeong/garyeong/get_all_reports`)).data.reports
            reports.sort((a, b) => b.recommendCount.localeCompare(a.recommendCount))
            setData(reports)
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

    if (!data) {
        return (
            <div style={{ display: "flex", width: "100vw", height: "80vh", justifyContent: "center", alignItems: "center", fontSize: "2rem" }}>Loading...</div>
        )
    } else {
        return (
            <Container>
                {data.map((item, idx) => {
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
            </Container>
        )
    }
}

const Container: any = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media screen and (max-width: 800px) {
        justify-content: center;
    }
`
