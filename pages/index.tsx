import React from "react";
import styled from "styled-components";

export default function Index() {
    return (
        <Base>
            <Box>
                <p>가령가령-하다</p>
                <p>: 깨끗하고 곱다.</p>
            </Box>
            <p style={{ wordBreak: "keep-all" }}>불안한 세상 속에 사람들을 도와줄 수 있다면 가령 힘들더라도, 우리는 가령가령한 세상을 좇아 나아가리</p>
            <div style={{ height: "5vh" }}></div>
            <Box>
                <p style={{ wordBreak: "keep-all" }}>가령가령이란?</p>
            </Box>
            <p style={{ wordBreak: "keep-all" }}>해당 프로젝트는 블록체인 네트워크에 불법 사이트나 범죄자, 스팸을 제보하여 등록하는 시스템입니다.</p>
            <p style={{ wordBreak: "keep-all" }}>활동하시면, 3시간마다 활동 수가 1씩 증가됩니다.</p>
            <p style={{ wordBreak: "keep-all" }}>활동은 총 [리포트 작성/리포트 추천/광고 신청] 등이 있습니다.</p>
            <div style={{ height: "10vh" }}></div>
            <p style={{ wordBreak: "keep-all" }}>블록체인은 Golang을 사용하여 개발했으며, Docker로 배포가 되었습니다.</p>
            <p style={{ wordBreak: "keep-all" }}>프론트엔드는 Next.js(React)를 사용하여 개발했으며, 이 또한 Docker로 배포가 되었습니다.</p>
        </Base>
    );
}

const Base = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 15vw;
    width: 70vw;

    p {
        font-size: 1.4rem;
        line-height: 2;
    }
`;

const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;

    p {
        margin: 0 0;
        font-size: 2rem;
        font-weight: 700;
    }
`;
