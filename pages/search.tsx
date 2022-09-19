import React, { useState, useEffect } from "react";
import { chainInfo } from "../assets/chain";
import axios from "axios";
import Card from "../components/card";
import styled from "styled-components";

export default function Search() {
    const [data, setData] = useState(null);
    useEffect(() => {
        typeof window != undefined &&
            (async () => {
                const q = location.search.slice(1);
                if (q.includes("https")) setData((await axios.get(`${chainInfo.rest}/garyeong/garyeong/get_report_by_site/${q.slice(8)}`)).data.report);
                else if (q.includes(".")) setData((await axios.get(`${chainInfo.rest}/garyeong/garyeong/get_report_by_site/${q}`)).data.report);
                else if (q.includes(",")) setData((await axios.get(`${chainInfo.rest}/garyeong/garyeong/get_reports_by_tags/${q}`)).data.report);
                else {
                    var tmp = (await axios.get(`${chainInfo.rest}/garyeong/garyeong/get_reports_by_tags/${q}`)).data.report;
                    tmp.concat((await axios.get(`${chainInfo.rest}/garyeong/garyeong/get_report_by_target/${q}`)).data.report);
                    setData(tmp[0] != null ? tmp : null);
                }
            })();
    }, []);
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
                        ></Card>
                    );
                })}
            {!data && (
                <div style={{ display: "flex", width: "100vw", height: "80vh", justifyContent: "center", alignItems: "center", fontSize: "2rem" }}>
                    검색하시는 값이 리스트에 존재하지 않습니다.
                </div>
            )}
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media screen and (max-width: 800px) {
        justify-content: center;
    }
`;
