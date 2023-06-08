import styled from "@emotion/styled";
import Image from "next/image";
import React from "react";

const Banner = ({...props}) => {
    return (
        <BannerWrapper style={{ backgroundImage: `url(${props.backgroundImage})` }} >
            {/* <Image src={props.backgroundImage} alt="banner" width={500} height={500} />  */}
        </BannerWrapper>
    );
};

export default Banner;

const BannerWrapper = styled.div`
    background-size: cover;
    height: 46vw;
    margin-top: 2vh;
`;
