import styled from "@emotion/styled";
import { Autocomplete, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import { MdOutlineAccountBalanceWallet, MdOutlineShoppingCart } from 'react-icons/md'


const TopHeader = () => {
    return (
        <TopHeaderView>
            {/* svg 파일 첫 글자 대문자 안됨 */}
            <LogoView>
                <Image src={"/dangdangz-logo.png"} alt="logo" width={40} height={40} style={{transform: 'rotate(180deg)', position: 'relative', top: '4px'}} />
            </LogoView>
            <LogoTitle>DangDangz</LogoTitle>
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
                <MenuItem>
                    Connect wallet 
                    <IconView style={{ marginLeft: "28px" }}><MdOutlineAccountBalanceWallet /></IconView>  
                </MenuItem>
                <MenuItem>
                    <IconView><MdOutlineShoppingCart /></IconView>  
                </MenuItem>
            </MenuView>

        </TopHeaderView>
    );
};

export default TopHeader;

const LogoView = styled.div`
    display: flex;
    justify-content: center;
    width: 45px;
    height: 45px;
    padding: 0px 5px 0px;
    border-radius: 50%;
    box-shadow: 0px 5px 5px #aeabab;
`;

const TopHeaderView = styled.div`
    padding: 16px 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const LogoTitle = styled.div`
    font-size: 24px;
    font-weight: 700;
    margin-left: 8px;
    font-family: 'Passion One';
    font-style: normal;
    font-weight: 400;
`;

const SearchView = styled.div`
    flex: 1;
    margin-left: 64px;
    border: 3px solid #E5E8EB;
    border-radius: 12px;
    box-shadow: 0px 5px 0px #E5E8EB;
`;

const MenuView = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
`;

const MenuItem = styled.div`
    display: flex;
    padding: 10px;
    margin: 0px 4px;
    font-weight: 400;
    color: #8A939B;
    align-items: center;
    height: 62px;
    border: 3px solid #E5E8EB;
    border-radius: 12px;
    box-shadow: 0px 5px 0px #E5E8EB;
    cursor: pointer;
`;

const IconView = styled.div`
    display: flex;
    border: 3px solid #E5E8EB;
    border-radius: 12px;
    padding: 3px;
    background-color: #E5E8EB;
    font-size: x-large;
`;
