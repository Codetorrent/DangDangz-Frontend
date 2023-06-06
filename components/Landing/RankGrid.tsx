import React from 'react'
import styled from "@emotion/styled";
import { Box, Grid } from '@mui/material';
import Image from 'next/image';

function FormTitle() {
  return (
    <Grid container item xs={5.5}>
      <Grid item xs={0.8}>
        <GridTitle></GridTitle>
      </Grid>
      <Grid item xs={2}>
        <GridTitle>COLLECTION</GridTitle>
      </Grid>
      <Grid item xs={4}>
        <GridTitle></GridTitle>
      </Grid>
      <Grid item xs={4}>
        <GridTitle style={{textAlign: 'right'}}>VOLUME</GridTitle>
      </Grid>
      <Grid item xs={1}>
      </Grid>
    </Grid>
  );
}
function FormRow({...props}) {
  return (
    <StyledGrid container item xs={5.5}>
      <Grid item xs={0.8}>
        <Item style={{ color: "#707A83"}}>{props.num}</Item>
      </Grid>
      <Grid item xs={2}>
        <ImageBox ><Image src={props.img} alt='logo' width={50} height={50} style={{marginTop: '10px'}} /></ImageBox>
      </Grid>
      <Grid item xs={4}>
        <Item>GitCoinProject</Item>
      </Grid>
      <Grid item xs={4} >
        <Item style={{textAlign: 'right'}}>5,740  ETH</Item>
      </Grid>
      <Grid xs={1}>
      </Grid>
    </StyledGrid>
  );
}

const RankGrid = ({...props}) => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} >
        <Grid container item spacing={3} style={{justifyContent: 'center', alignItems: 'center'}}>
          <FormTitle />
          <Grid item xs={0.2}>
          </Grid>
          <FormTitle />
        </Grid>
        <Grid container item spacing={3} style={{justifyContent: 'center', alignItems: 'center'}}>
          <FormRow num="1" img={props.img} />
          <Grid item xs={0.2}>
          </Grid>
          <FormRow num="4" img={props.img} />
          <FormRow num="2" img={props.img} />
          <Grid item xs={0.2}>
          </Grid>
          <FormRow num="5" img={props.img} />
          <FormRow num="3" img={props.img} />
          <Grid item xs={0.2}>
          </Grid>
          <FormRow num="6" img={props.img} />
        </Grid>
      </Grid>
    </Box>
  );
}




const GridTitle = styled.div`
  height: 25px;
  line-height: 25px;
  text-align: center;
  font-weight: 600;
  color: #707A83;
`;
const StyledGrid = styled(Grid)`
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
  border-radius: 30px;
  font-weight: 600;
`;

const Item = styled.div`
    padding: 3px;
    text-align: center;
    align-items: center;
    border-radius: 30px;
    height: 102px;
    line-height: 102px;
`

const ImageBox = styled.div`
    width: 80px;
    height: 80px;
    padding: 3px;
    text-align: center;
    align-items: center;
    border-radius: 30px;
    line-height: 102px;
    margin: 20px 0px 0px 15px;
    background-color: #F4F4F4;
`



export default RankGrid