import styled from "@emotion/styled";
import { Autocomplete, TextField } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { 
    MdOutlineAccountBalanceWallet, 
    MdOutlineSearch }
from 'react-icons/md'
import {useRouter} from "next/router";

declare global {
    interface Window {
        ethereum?: {
            request: (options: { method: string }) => Promise<string[]>;
        };
    }
}

const Header = () => {
    const [userAccount, setUserAccount] = useState<string | undefined>();

    let walletConnect = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                if (accounts.length > 0) {
                    setUserAccount(accounts[0]);
                } else {
                    setUserAccount("");
                }
            } catch (error) {
                console.error("Error connecting wallet:", error);
                setUserAccount("");
            }
        } else {
            console.error("Ethereum provider not found");
            setUserAccount("");
        }
    };
    
    const router = useRouter();

    const onClickLogo = () => {
        router.push('/')
    }
    // useEffect(() => {
    //     router.prefetch('/');
    //   }, [router]);

    return (
        <HeaderView>
            {/* svg 파일 첫 글자 대문자 안됨 */}
            <LogoView onClick={onClickLogo}>
                <LogoBox>
                    <Image
                        src={"/img/dangdangz-logo.png"}
                        alt="logo"
                        width={40}
                        height={40}
                        style={{
                            transform: "rotate(180deg)",
                            position: "relative",
                            top: "4px",
                        }}
                    />
                </LogoBox>
                <LogoTitle>DangDangz</LogoTitle>
            </LogoView>
            
            <SearchView>
                {/* 자동완성로직 */}
                <Autocomplete
                    // props 로 입력 필드 커스텀
                    renderInput={(
                        params // params => 객체, 매개변수 => Customizing
                    ) => (
                        <TextField
                            {...params}
                            // props
                            label={"Search item, Collections, and accounts"}
                        />
                    )}
                    // 드롭박스 눌렀을 때 빈 배열 => 자동완성
                    options={[]}
                />
            </SearchView>

            <MenuView>
                {/* <MenuItem>
                    <IconView>
                        <MdOutlineSearch />
                    </IconView>
                </MenuItem> */}
                <MenuItem onClick={walletConnect}>
                    Connect wallet 
                    <IconView style={{ marginLeft: "1vw" }}>
                        <MdOutlineAccountBalanceWallet />
                    </IconView>  
                </MenuItem>
            </MenuView>
        </HeaderView>
    );
};

const HeaderView = styled.div`
    padding: 2vw 4vw;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const LogoView = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-right: 4vw;
`;

const LogoBox = styled.div`
    display: flex;
    justify-content: center;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    box-shadow: 0px 5px 5px #aeabab;
`;

const LogoTitle = styled.div`
    font-size: 24px;
    margin-left: 8px;
    font-family: "Passion One";
    font-style: normal;
`;

const SearchView = styled.div`
    flex: 1;
    border: 3px solid #E5E8EB;
    border-radius: 12px;
    box-shadow: 0px 5px 0px #E5E8EB;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const MenuView = styled.div`
    display: flex;
    flex-direction: row;
`;

const MenuItem = styled.div`
    display: flex;
    padding: 10px;
    margin: 0px 4px;
    color: #8A939B;
    align-items: center;
    border: 3px solid #E5E8EB;
    border-radius: 12px;
    box-shadow: 0px 5px 0px #e5e8eb;
    cursor: pointer;
`;

const IconView = styled.div`
    display: flex;
    border: 3px solid #e5e8eb;
    border-radius: 12px;
    padding: 3px;
    background-color: #e5e8eb;
    font-size: x-large;
`;

export default Header;
