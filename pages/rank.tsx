import React, { useState, useEffect } from "react";
import { chainInfo } from "../assets/chain";
import axios from "axios";
import Card from "../components/card";
import styled from "styled-components";

export default function Rank() {
    const [data, setData] = useState(null);
    useEffect(() => {
        (async () => {
            var reports = (await axios.get(`${chainInfo.rest}/garyeong/garyeong/get_all_reports`)).data.reports;
            reports.sort((a, b) => b.recommendCount.localeCompare(a.recommendCount));
            setData(reports);
        })();
    }, []);
    if (!data) {
        return "loading";
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
                            id={idx}
                        ></Card>
                    );
                })}
            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media screen and (max-width: 800px) {
        justify-content: center;
    }
`;
