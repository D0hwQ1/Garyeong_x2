import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";

import { txClient } from "../assets/generated";
import { chainInfo } from "../assets/chain";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [isToggled, setIsToggled] = useState<any>(false);
    const [userToggled, setUserToggled] = useState(false);
    const [login, setLogin] = useState(false);

    const [search, setSearch] = useState<string>();
    const [title, setTitle] = useState<string>();
    const [desc, setDesc] = useState<string>();
    const [img, setImg] = useState<File>();
    const [email, setEmail] = useState<string>();

    const [addr, setAddr] = useState<string>();
    const [activity, setActivity] = useState<number>(0);
    const [tx, setTx] = useState<any>();
    const [cnt, setCnt] = useState<any>();

    useEffect(() => {
        (async () => {
            setCnt((await axios.get(`${chainInfo.rest}/garyeong/garyeong/get_reports_count`)).data.count);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            try {
                var res = (await axios.get(`${chainInfo.rest}/garyeong/garyeong/get_profile_by_address/${addr}`)).data.profile.activity;
                setActivity(res);
            } catch (e) {
                setActivity(0);
            }
        })();
    }, [addr]);

    return (
        <>
            <Base isToggled={isToggled} userToggled={userToggled}>
                <div
                    className="toggle"
                    onClick={() => {
                        setUserToggled(false);
                        setIsToggled(!isToggled);
                    }}
                >
                    <FontAwesomeIcon icon={faBars} />
                </div>

                <div className="logo">
                    <Link href={"/"}>
                        <a>
                            <Image src="/logo.png" width="45px" height="45px" />
                        </a>
                    </Link>
                </div>

                <div
                    className="user"
                    onClick={() => {
                        setIsToggled(false);
                        setUserToggled(!userToggled);
                    }}
                >
                    <FontAwesomeIcon icon={faUser} />
                </div>

                <div className="header__search">
                    <Link href={`/search?${search}`}>
                        <FontAwesomeIcon style={{ background: "transparent", width: "15px" }} icon={faSearch} />
                    </Link>
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="찾고자 하는 사이트 및 대상, 태그 등을 입력해주세요"
                    />
                </div>

                <ul className="header__menulist">
                    <li>
                        <Link href="/rank">
                            <a>Ranking</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/report">
                            <a>Report</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/ads">
                            <a>Ads</a>
                        </Link>
                    </li>
                    <li
                        className="request"
                        onClick={() => {
                            setIsToggled(false);
                            setOpen(true);
                        }}
                    >
                        <a>Upload_Ad</a>
                    </li>
                </ul>

                <li>등록된 게시글:&nbsp;{cnt}</li>
                <ul className="header__right">
                    <li
                        style={{ cursor: addr ? "default" : "pointer" }}
                        onClick={async () => {
                            if (!window.keplr) {
                                throw new Error("Keplr is not available");
                            }

                            await window.keplr.experimentalSuggestChain(chainInfo);
                            await window.keplr.enable(chainInfo.chainId);

                            const signer = window.keplr.getOfflineSigner!(chainInfo.chainId);
                            setAddr((await signer.getAccounts())[0].address);
                            setTx(
                                await txClient(signer, {
                                    addr: chainInfo.rpc,
                                }),
                            );
                            setLogin(true);
                        }}
                    >
                        {login ? "활동 수:" + activity : "Login"}
                    </li>
                </ul>
            </Base>
            {open && (
                <Box>
                    <div className="box">
                        <p>Title</p>
                        <input
                            value={title}
                            onChange={(e) => {
                                setTitle(e.target.value);
                            }}
                        />
                        <p>Desc</p>
                        <textarea
                            value={desc}
                            onChange={(e) => {
                                setDesc(e.target.value);
                            }}
                        />
                        <p>Image</p>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                setImg(e.target.files[0]);
                            }}
                        />
                        <p>E-mail</p>
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        ></input>
                        <button
                            onClick={async () => {
                                if (title && desc && img && email) {
                                    const Img = new FormData();
                                    Img.append("file", img);
                                    await axios.post("/api/upload", {
                                        title,
                                        desc,
                                        email,
                                    });
                                    await axios.post(`/api/upload_img?directory=${email}`, Img);
                                    setOpen(false);
                                    alert("전송이 완료되었습니다.");
                                } else {
                                    alert("값을 모두 입력해주세요.");
                                }
                            }}
                        >
                            Report!
                        </button>
                    </div>
                </Box>
            )}
        </>
    );
}

const Base = styled.div`
    max-width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: black;
    background-color: color;
    border-bottom: 0.5px solid black;

    button {
        margin: 2rem 10rem;
    }

    .logo {
        margin: 0.5rem 1rem;
    }

    .header__search {
        display: flex;
        padding: 0.5rem 0.5rem;
        width: 600px;
        border: 1px solid grey;
        border-radius: 10px;

        input {
            font-size: 15px;
            margin-left: 1rem;
            width: 550px;
            border: 0px;
            outline: none;
            background-color: "transparent";
        }

        input:focus {
            outline: none;
        }

        @media screen and (max-width: 800px) {
            input {
                width: 1000px;
            }
        }
    }

    .header__menulist {
        list-style: none;
        display: flex;
    }

    .header__left {
        display: flex;
    }

    .header__right {
        width: 4rem;
        list-style: none;
        display: flex;
        margin: 0 4rem;
    }

    .request {
        padding: 0 1rem;
    }
    a {
        cursor: pointer;
        padding: 0 1rem;
        text-decoration-line: none;
        color: #555555;
        &:hover {
            color: black;
        }
    }

    .toggle {
        display: none;
        font-size: 1.5rem;
        padding: 1rem 1rem;
    }

    .user {
        display: none;
        font-size: 1.5rem;
        padding: 1rem 1rem;
    }

    @media screen and (max-width: 800px) {
        flex-wrap: wrap;

        button {
            margin: 2rem 0;
        }

        .header__search {
            display: flex;
            padding: 0.5rem 0.5rem;
            border: none;
            border-bottom: 1px solid #555555;
            border-radius: 0px;
            width: 100%;
        }

        .header__right {
            display: ${(props: any) => (props.userToggled ? "flex" : "none")};
            flex-direction: column;
            margin: 0 0;
            width: 100%;
            background-color: white;
        }

        .header__menulist {
            display: ${(props: any) => (props.isToggled ? "flex" : "none")};
            flex-direction: column;
            margin: 0 0;
            width: 100%;
            background-color: white;
        }

        .header__menulist li,
        .header__right li {
            margin: 1rem 0;
            padding: 0;
        }

        .toggle {
            display: block;
        }

        .user {
            display: block;
        }
    }
`;

const Box = styled.div`
    width: 100vw;
    height: 900px;
    max-height: 200vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;

    .box {
        display: flex;
        flex-direction: column;
        width: 400px;
        background-color: white;
        margin: 10rem;

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
            height: 90%;
        }

        button {
            margin: 2rem 0;
        }
    }
`;