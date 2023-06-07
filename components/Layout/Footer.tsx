import React from 'react'
import styled from "@emotion/styled";
import Image from "next/image";
import {FaTwitter , FaDiscord, FaTelegramPlane, FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterWrapper>
        <FooterView>
            <CommunityView>
                <CommunityTitle>Join the community</CommunityTitle>
                <CommunityIcons>
                    <IconView>
                        <FaTwitter />
                    </IconView>
                    <IconView>
                        <FaDiscord />
                    </IconView>
                    <IconView>
                        <FaInstagram />
                    </IconView>
                    <IconView>
                        <FaTelegramPlane />
                    </IconView>
                </CommunityIcons>
            </CommunityView>
            <hr style={{  border : '1px solid #04B154', width: '100%',  opacity: 0.4}} /> 
            <BottomView>
                <DescriptionView>
                    <LogoView>
                        <Image src={"/img/dangdangz-logo.png"} alt="dangdangz logo" width={40} height={40} style={{transform: 'rotate(180deg)'}} />
                    </LogoView>
                    <FooterScript>
                        DangDangz
                    </FooterScript>
                    The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                </DescriptionView>
                <QuickMenu>
                    <QuickMenuItem>
                        <FooterScript>
                            Marketplace
                        </FooterScript>
                        All NFTs <br />
                        Art <br />
                        Gaming <br />
                    </QuickMenuItem>
                    <QuickMenuItem>
                        <FooterScript>
                        My Account
                        </FooterScript>
                        Profile <br />
                        Favorites <br />
                        Watchlist <br />
                        My Collection <br />
                    </QuickMenuItem>
                    <QuickMenuItem>
                        <FooterScript>
                        Resources
                        </FooterScript>
                        Learn <br />
                        Help Center <br />
                        Platform Status <br />
                        Partners <br />
                        Taxes <br />
                    </QuickMenuItem>
                    <QuickMenuItem>
                        <FooterScript>
                            Company
                        </FooterScript>
                        About <br />
                        Careers <br />
                        Ventures <br />
                        Grants <br />
                    </QuickMenuItem>
                </QuickMenu>
            </BottomView>
            
        </FooterView>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 450px;
    background: #258327;
    color: #fff;
    @media screen and (max-width: 768px) {
        height: auto;
    }
`;

const FooterView = styled.div`
    margin: 30px 10px;
    width: 98%;
`;

const CommunityView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CommunityTitle = styled.div`
    font-size: 20px;
    font-weight: 600;
`;

const CommunityIcons = styled.div`
    display: flex;
    flex-direction: row;
`;

const BottomView = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 768px) {
        display: block;
    }
`;

const IconView = styled.div`
    cursor: pointer;
    width: 54px;
    height: 54px;
    margin: 10px;
    text-align: center;
    padding-top: 12px;
    border-radius: 12px;
    background-color: #04B154;
    font-size: x-large;
`;

const DescriptionView = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 20%;
    margin: 20px 40px 0px 20px;
    @media screen and (max-width: 768px) {
        flex-basis: 200%;
    }
`;

const FooterScript = styled.div`
    font-weight: 600;
    margin-bottom: 20px;
`;

const LogoView = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 41px;
    height: 41px;
    margin: 10px;
    border-radius: 50%;
    background-color: #fff;
`;

const QuickMenu = styled.div`
    display: flex;
    flex-direction: row;
    flex-basis: 80%;
    margin: 30px 0px 0px 0px;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
    }
`;

const QuickMenuItem = styled.div`
    flex-basis: 20%;
    margin: 1vh 2vw;
    line-height: 30px;
    font-size: 14px;
    @media screen and (max-width: 768px) {
        flex-basis: 40%;
    }
`;

export default Footer