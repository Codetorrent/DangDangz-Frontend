import styled from "@emotion/styled";
import { Autocomplete, TextField } from "@mui/material";
import Image from "next/image";
import React from "react";
import WalletIcon from "@mui/icons-material/Wallet";

const TopHeader = () => {
    return (
        <TopHeaderView>
            {/* svg 파일 첫 글자 대문자 안됨 */}
            <Image src="/opensea.svg" width={40} height={40} />
            <Title>DangDangz</Title>
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
                <MenuItem>Explore</MenuItem>
                <MenuItem>Create</MenuItem>
            </MenuView>

            <IconView>
                <WalletIcon />
            </IconView>
        </TopHeaderView>
    );
};

export default TopHeader;

const TopHeaderView = styled.div`
    padding: 16px 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 700;
    margin-left: 8px;
`;

const SearchView = styled.div`
    flex: 1;
    margin-left: 64px;
`;

const MenuView = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 64px;
`;

const MenuItem = styled.div`
    padding: 0 16px;
    font-weight: 700;
`;

const IconView = styled.div`
    margin-left: 32px;
`;
