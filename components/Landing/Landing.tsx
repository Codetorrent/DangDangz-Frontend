import React from 'react'
import styled from "@emotion/styled";
import PuppiesView from './PuppiesView';
import CollectionRank from './CollectionRank';


const Landing = () => {
  return (
    <LandingWrapper>
            <Title>Choose your puppy</Title>
        <PuppiesView />
        <CollectionRank />
    </LandingWrapper>
  )
}

const LandingWrapper = styled.div`
    justify-content: center;
    margin-top: 50px;
`;


const Title = styled.div`
    text-align: center;
    font-family: poppins;
    font-size: 40px;
    font-weight: 600;
    
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    `;


    

const CollectionListView = styled.div`
    display: flex;
`;


export default Landing