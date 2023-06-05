import React from 'react'
import styled from "@emotion/styled";
import {FaTwitter , FaDiscord, FaTelegramPlane, FaInstagram} from "react-icons/fa";
import {SiOpensea} from "react-icons/si";

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
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <DescriptionView>
                    <LogoView>
                        <SiOpensea />
                    </LogoView>
                    <TitleDiv>
                        DangDangz
                    </TitleDiv>
                    The world’s first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital items.
                </DescriptionView>
                <QuickMenu>
                    <QuickMenuItem>
                        <TitleDiv>
                            Marketplace
                        </TitleDiv>
                        All NFTs <br />
                        Art <br />
                        Gaming <br />
                    </QuickMenuItem>
                    <QuickMenuItem>
                        <TitleDiv>
                        My Account
                        </TitleDiv>
                        Profile <br />
                        Favorites <br />
                        Watchlist <br />
                        My Collection <br />
                    </QuickMenuItem>
                    <QuickMenuItem>
                        <TitleDiv>
                        Resources
                        </TitleDiv>
                        Learn <br />
                        Help Center <br />
                        Platform Status <br />
                        Partners <br />
                        Taxes <br />
                    </QuickMenuItem>
                    <QuickMenuItem>
                        <TitleDiv>
                            Company
                        </TitleDiv>
                        About <br />
                        Careers <br />
                        Ventures <br />
                        Grants <br />
                    </QuickMenuItem>
                </QuickMenu>
            </div>
            
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
    width: 300px;
    margin: 20px 40px 0px 20px;
`;

const TitleDiv = styled.div`
    font-weight: 600;
    margin-bottom: 20px;
`;

const LogoView = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin: 10px;
    font-size: xx-large;
`;

const QuickMenu = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px 40px 0px 40px;
`;

const QuickMenuItem = styled.div`
    width: 200px;
    margin: 10px 40px 0px 40px;
    line-height: 30px;
    font-size: 14px;
`;

export default Footer