import styled from "@emotion/styled";
import { Button } from "@mui/material";
import React from "react";

const Banner = () => {
    return (
        <BannerWrapper>
            <BannerView>
                <Title>DANGDANGZ </Title>
                <SubTitle>
                Web3 M2E Dapp
                </SubTitle>
                {/* <ButtonView>
                    <BannerButton variant="contained" size="large">
                        Explore
                    </BannerButton>
                    <BannerButton variant="outlined" size="large">
                        Create
                    </BannerButton>
                </ButtonView> */}
                <LocationPinBox />
                <BannerInuBox />
                <PlantBox />
            </BannerView>
        </BannerWrapper>
    );
};

export default Banner;

const BannerWrapper = styled.div`
    display: flex;
    align-items: center;
    background-image: url(/banner-background.png);
    background-size: cover;
    height: 650px;
`;

const BannerView = styled.div`
    max-width: 600px;
    margin-left: 200px;
`;

const Title = styled.div`
    font-family: 'Passion One';
    color: #D43A38;
    font-size: 80px;
    font-weight: 700;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const SubTitle = styled.div`
    font-family: inter;
    color: #D43A38;
    margin-top: 10px;
    font-size: 40px;
    font-weight: 700;
    max-width: 350px;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ButtonView = styled.div`
    margin-top: 24px;
`;

const BannerButton = styled(Button)`
    margin-right: 16px;
    padding: 12px 48px;
`;

const LocationPinBox = styled.div`
    position: absolute;
    width: 172px;
    height: 172px;
    left: 460px;
    top: 420px;
    background-image: url(/location-pin.png);
`;

const BannerInuBox = styled.div`
    position: absolute;
    width: 280px;
    height: 450px;
    left: 850px;
    top: 240px;
    z-index: 1;
    background-image: url(/shiba-inu.png);
`;

const PlantBox = styled.div`
    position: absolute;
    width: 384px;
    height: 384px;
    left: 955px;
    top: 310px;
    background-image: url(/plant-pot.png);
`;
