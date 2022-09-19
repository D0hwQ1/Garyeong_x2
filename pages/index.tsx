import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useSelector } from "react-redux"

export default function Index() {
    const addr = useSelector((state: any) => state.wallet.addr)

    return (
        <Base>
            <Box>
                <p>가령가령-하다</p>
                <p>: 깨끗하고 곱다.</p>
            </Box>
            <p style={{ wordBreak: "keep-all" }}>불안한 세상 속에 사람들을 도와줄 수 있다면 가령 힘들더라도, 우리는 가령가령한 세상을 좇아 나아가리</p>
            <Box>
                <p style={{ wordBreak: "keep-all" }}>가령가령이란?</p>
            </Box>
            <p style={{ wordBreak: "keep-all" }}>해당 프로젝트는 블록체인 네트워크에 불법 사이트나 범죄자, 스팸을 제보하여 등록하는 시스템입니다.</p>
            <p style={{ wordBreak: "keep-all" }}>활동하시면, 3시간마다 활동 수가 1씩 증가됩니다.</p>
            <p style={{ wordBreak: "keep-all" }}>활동은 총 [리포트 작성/리포트 추천/광고 신청] 등이 있습니다.</p>
            <Button
                onClick={async () => {
                    if (addr == "0xasdf") alert("로그인을 해주세요.")
                    var res = (await axios.post("/api/faucet", { address: addr, coins: ["1000000usave"] })).data
                    if (!res.error) alert("코인을 지급받았습니다.")
                    else alert("코인을 지급받지 못했습니다.")
                }}
            >
                가령가령 코인 받기
            </Button>
            <div style={{ height: "10vh" }}></div>
            <p style={{ wordBreak: "keep-all" }}>블록체인은 Golang을 사용하여 개발했으며, Docker로 배포가 되었습니다.</p>
            <p style={{ wordBreak: "keep-all" }}>프론트엔드는 Next.js(React)를 사용하여 개발했으며, 이 또한 Docker로 배포가 되었습니다.</p>
        </Base>
    )
}

const Base: any = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15vw;
    width: 70vw;

    p,
    div {
        font-size: 1.4rem;
        line-height: 2;
    }
`

const Box: any = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;

    p {
        margin: 0 0;
        font-size: 2rem;
        font-weight: 700;
    }
`

const Button: any = styled.button`
    display: inline-block;
    width: 200px;
    height: 40px;
    border: 1px solid black;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
    font-size: 1.4rem;
    font-weight: 700;
    cursor: pointer;

    &:active {
        transform: scale(0.9);
    }
`
