import React from 'react'
import styled from "@emotion/styled";
import { Box, Grid } from '@mui/material';
import Image from 'next/image';

function FormTitle() {
  return (
    <Grid container item xs={11}>
      <Grid item xs={0.8}>
        <TitleGrid></TitleGrid>
      </Grid>
      <Grid item xs={1}>
        <TitleGrid>COLLECTION</TitleGrid>
      </Grid>
      <Grid item xs={1.5}>
        <TitleGrid></TitleGrid>
      </Grid>
      <Grid item xs={2}>
        <TitleGrid >VOLUME</TitleGrid>
      </Grid>
      <Grid item xs={6}>
      </Grid>
    </Grid>
  );
}
function FormRow({...props}) {
  return (
    <StyledGrid container item xs={11}>
      <Grid item xs={0.8}>
        <Item style={{ color: "#707A83"}}>{props.num}</Item>
      </Grid>
      <Grid item xs={1}>
        <ImageBox ><Image src={props.img} alt='logo' width={70} height={70}  /></ImageBox>
      </Grid>
      <Grid item xs={1.5}>
        <Item>GitCoinProject</Item>
      </Grid>
      <Grid item xs={2} >
        <Item >5,740  ETH</Item>
      </Grid>
      <Grid item xs={6}>
      <Item style={{textAlign: 'start'}} >fdfdsfdsfdsnjdshfkjsdnfkdsndfdsfdsfsdfh sdkfdskjfhkj sdfksd hfkaaaaaaaaa aaaaaaaaaaaaaaaa aaaaaaaaaaa aaa</Item>
      </Grid>
    </StyledGrid>
  );
}

const FavoriteItems = () => {

  return (
    <Box sx={{ flexGrow: 1, marginBottom: "100px" }}>
      <FavoriteTitle>
        Shiba's Favorite Items
      </FavoriteTitle>
      <Grid container spacing={0} >
        <Grid container item spacing={3} style={{ justifyContent: 'center',alignItems: 'center'}}>
          <FormTitle />
        </Grid>
        <Grid container item spacing={3} style={{justifyContent: 'center', alignItems: 'center'}}>
          <FormRow num="1" img={'/dating-place.png'} />
          <FormRow num="2" img={'/stopwatch.png'} />
          <FormRow num="3" img={'/vision.png'} />
        </Grid>
      </Grid>
    </Box>
  );
}




const TitleGrid = styled.div`
  height: 25px;
  line-height: 25px;
  text-align: center;
  font-weight: 600;
  color: #707A83;
  text-align: center;
`;
const StyledGrid = styled(Grid)`
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  font-weight: 600;
`;

const Item = styled.div`
  padding: 24px 3px 3px 3px;
  text-align: center;
  border-radius: 30px;
  height: 102px;
  word-wrap: break-word;
`

const ImageBox = styled.div`
  width: 80px;
  height: 80px;
  padding: 3px;
  align-items: center;
  border-radius: 30px;
  margin: 0px 0px 0px 20px;
  background-color: #F4F4F4;
`

const FavoriteTitle = styled.div`
  margin: 100px 0px 30px 0px;
  font-weight: 600;
  font-size: 40px;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
`;


export default FavoriteItems
