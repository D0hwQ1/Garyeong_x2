import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { txClient } from "../assets/generated";
import { chainInfo } from "../assets/chain";

export default function Card({ title, link, content, date, tags, cnt, id }: any) {
    const [addr, setAddr] = useState<string>();
    const [tx, setTx] = useState<any>();
    useEffect(() => {
        (async () => {
            const signer = window.keplr.getOfflineSigner!(chainInfo.chainId);
            setAddr((await signer.getAccounts())[0].address);
            setTx(
                await txClient(signer, {
                    addr: chainInfo.rpc,
                }),
            );
        })();
    }, []);

    return (
        <Container>
            <Title>{title}</Title>
            <Detail>
                <p>
                    사이트:&nbsp;<a href={link.includes("http") && link}>{link}</a>
                </p>
                <p>태그:&nbsp;{tags.join(", ")}</p>
                <p>이유:&nbsp;{content.length > 100 ? content.slice(0, 100) + "..." : content}</p>
                <p>
                    수정 시각:&nbsp;
                    {new Date(Math.floor(date) + Math.abs(new Date().getTimezoneOffset() / 60) * 1000 * 60 * 60).toISOString().slice(0, -5).replace("T", " ")}
                </p>
                <p>
                    추천 수: {cnt}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <div
                        style={{ display: "inline-block", cursor: "pointer" }}
                        onClick={async () => {
                            try {
                                var res = (await axios.get(`${chainInfo.rest}/garyeong/garyeong/get_profile_by_address/${addr}`)).data;

                                res = await tx.signAndBroadcast([
                                    tx.msgSendRecommend({
                                        creator: addr,
                                        reportId: id,
                                    }),
                                ]);

                                console.log(res);

                                if (res.rawLog.includes("failed to execute message")) alert("이미 추천하셨습니다.");
                                else {
                                    alert("추천이 완료되었습니다.");
                                    cnt++;
                                }
                            } catch (e) {
                                if (e.message.includes("404")) {
                                    alert("프로필이 없습니다.\n프로필을 생성하겠습니다.");

                                    res = await tx.signAndBroadcast([tx.msgSetProfile({ creator: addr })]);
                                    alert("프로필 생성 완료.\n추천을 다시 시도해주세요.");
                                }
                            }
                        }}
                    >
                        추천하기!
                    </div>
                </p>
                <p>댓글 수: {cnt}</p>
            </Detail>
        </Container>
    );
}

const Container = styled.div`
    display: block;
    width: 300px;
    margin: 50px 80px;
    padding: 20px;
    border: 1px solid black;
    border-radius: 10px;

    @media screen and (max-width: 800px) {
        margin: 50px 40px;
        padding: 0px;
    }
`;

const Title = styled.div`
    text-align: center;
    line-height: 100px;
    font-size: 50px;
    height: 100px;
`;
const Detail = styled.div`
    font-size: 20px;
    a {
        color: black;
    }
    p {
        word-break: keep-all;
        word-wrap: break-word;
    }
`;