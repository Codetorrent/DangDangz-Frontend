import styled from "@emotion/styled";
import React from "react";

const Banner = ({...props}) => {
    return (
        <BannerWrapper style={{ backgroundImage: `url(${props.backgroundImage})` }} />
    );
};

export default Banner;

const BannerWrapper = styled.div`
    background-size: cover;
    height: 46vw;
    margin-top: 2vh;
`;
