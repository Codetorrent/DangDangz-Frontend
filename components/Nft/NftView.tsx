import React from 'react'
import { useRouter } from 'next/router';
import styled from '@emotion/styled'
import { Button, Grid } from '@mui/material';
import Image from 'next/image';
import Slider from '@mui/material/Slider';


const NftView = () => {

const router = useRouter()

  return (
    <>

    <NftWrapper>
    <Grid container justifyContent='center' alignItems='center' height="400px" spacing={5}>
      {/* Image */}
      <Grid item xs= {3} >
        <Item ><Image src={'/shiba-inu.png'} alt="nft" width={200} height={310} /></Item>
        {/* <Image src={`/images/nft/${router.query.nftId}.png`} alt="nft" width={400} height={400} /> */}
      </Grid>
    {/* MetaData */}
    <Grid item xs= {6} >
        <Item>
        <Dataview>
            <NftTitle> <div style={{width: '120px'}}>#{router.query.nftId}</div> Shiba Inu</NftTitle>

            {/* Trait & Slider */}
            <TraitBox>
            <Trait>Stamina</Trait>
            <StyledSlider level={70} />
            <Range>50-70</Range>
            </TraitBox>
            <TraitBox>
            <Trait>Intelligence</Trait>
            <StyledSlider level={50} />
            <Range>30-50</Range>
            </TraitBox>
            <TraitBox>
            <Trait>Expression</Trait>
            <StyledSlider level={80} />
            <Range>50-80</Range>
            </TraitBox>
            <TraitBox>
            <Trait>Focus</Trait>
            <StyledSlider level={30} />
            <Range>30-40</Range>
            </TraitBox>

            {/* Button */}
            <ButtonView>
            <Price>0.14 ETH</Price>
            <BuyButton>Buy Now</BuyButton>
            </ButtonView>
        </Dataview>
        </Item>
    </Grid>
    </Grid>
    </NftWrapper>

    </>

  
  )
}

function StyledSlider({...props}) {
  return (
    <Slider
      disabled
      defaultValue={props.level}
      sx={{
        width: 300,
        '& .MuiSlider-thumb.Mui-disabled': {
            color: "#FFE603"
        },
        '& .MuiSlider-track': {
            color: "#FFE603"
        },
      }}
    />
  );
}

const NftWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 518px;
  /* margin-top: 20px; */
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

const Item = styled.div`
  display: flex;
  border-radius: 100px;
  height: 400px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
`;

const Dataview = styled.div`
  display: flex;
  flex-direction: column;
`;

const NftTitle = styled.div`
  display: flex;
  font-size: 34px;
  margin-bottom: 20px;
`;

const TraitBox = styled.div`
  display: flex;
  margin: 5px 0px;
  flex-direction: row;
  align-items: center;
`;

const Trait = styled.div`
  width: 150px;
`;

const Range = styled.div`
  margin-left: 20px;
  color: #707A83;
  font-size: 8px;
`;

const ButtonView = styled.div`
  display: flex;
  width: 60%;
  margin-top: 30px;
  background-color: #EDEDED;
  align-self: center;
  width: 413px;
  height: 47px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  justify-content: space-between;
`;

const Price = styled.div`
  width: 50%;
  line-height: 47px;
  text-align: center;
  color: #04B154;
  font-size: 14px;
`;

const BuyButton = styled(Button)`
  width: 50%;
  color: white;
  background-color: #04B154;
  border-radius: 30px;
  align-self: center;
  font-size: 18px;
  font-weight: 600;
  font-family: poppins;
  &:hover{  
    background-color : #258327;
    color : white
  }
`;



export default NftView