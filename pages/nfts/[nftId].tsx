import React from 'react'
import { useRouter } from 'next/router';
import { TopHeader, Footer } from '../../components';
import { NftView } from '../../components';

const Nft = () => {


  return (
    <>
      <TopHeader />

      <NftView />

      <Footer />
    </>

  
  )
}



export default Nft