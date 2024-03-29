import styled from '@emotion/styled';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import abi from './abi';
import { NFTStorage } from 'nft.storage';
import { userAccountState } from '../../pages/_app';

const Banner = ({ ...props }) => {
    const client = new NFTStorage({
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGU1RUQ2ZjQyZDYwQUExOGM1NDgxNzI0YkZGZUM0NmM5ZTM1OThGZjMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4NDQ2NzIxNzE0NCwibmFtZSI6InBhbmd5b2Vsb24ifQ.pV5R1O4NaG4UyPPTbyVIRP3HsDvUEaOuZW7cdsvDzPs',
    });

    const [signerAddress, setSignerAddress] = useState();

    // owner 지갑 인스턴스화
    const mnemonic = 'enact cube inner heart helmet clay other resemble salon renew fee brick';
    const tempOwner = ethers.Wallet.fromMnemonic(mnemonic);
    const infura = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/5ce84af087214801a2a02837ede88ab1');
    const owner = tempOwner.connect(infura);

    // 랜덤함수
    const rand = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };

    // 민팅하기
    const Mint = async () => {
        let contract;
        let provider;
        if (typeof window.ethereum !== 'undefined') {
            // 메타마스크가 있을 시 지갑연결 요청
            provider = await new ethers.providers.Web3Provider(window.ethereum);
            const walletAddress = await provider.send('eth_requestAccounts', []);
            setSignerAddress(walletAddress[0]);
            console.log('connected to ', walletAddress);

            // 컨트랙트 인스턴스화
            contract = await new ethers.Contract('0xB74b07A09826318F7a3F1c12e13A9806B0e28AF3', abi, provider);
        }

        // view함수 호출 (tokenId)
        const tokenId = await contract?.tokenId();

        // 컨트랙트와 연결된 지갑 결합(?), mint함수 호출
        const signer: any = await provider?.getSigner();
        console.log(signer);
        const contractWithSigner = await contract?.connect(signer);
        console.log(contractWithSigner);
        contractWithSigner?.mint();

        // 랜덤값 생성 후 ipfs에 올리기, 매핑할 uri 생성
        const res = await fetch('https://ipfs.io/ipfs/bafkreiek7daymoyvhmr2qdync5s65oe4gthbeuzbshsszee6dhoz4xr2i4');
        const siba = await res.blob();
        const metadata = await client.store({
            name: `shiba-inu #${tokenId}`,
            description: 'Your shiba-inu',
            image: new File([siba], 'blabla.png', { type: 'image/png' }),
            attributes: [
                { trait_type: 'Type', value: 'shiba-inu' },
                { trait_type: 'Stamina', value: rand(50, 70) },
                { trait_type: 'Intelligence', value: rand(30, 50) },
                { trait_type: 'Expression', value: rand(50, 80) },
                { trait_type: 'Focus', value: rand(30, 40) },
                { trait_type: 'Intimacy', value: rand(10, 100) },
            ],
        });
        const uri = `https://ipfs.io/ipfs/${metadata.ipnft}/metadata.json`;

        //uri와 tokenId를 매핑 (테스트환경에서는 owner로 요청하지 않아도 됨)
        const contractWithOwner = contract?.connect(owner);
        contractWithOwner?.setURI(tokenId, uri);
    };

    return (
        <>
            <BannerWrapper style={{ backgroundImage: `url(${props.backgroundImage})` }}>
                {/* <Image src={props.backgroundImage} alt="banner" width={500} height={500} />  */}
            </BannerWrapper>
            <div
                style={{
                    position: 'relative',
                    top: '-70px',
                    marginLeft: '80px',
                    width: '140px',
                    height: '45px',
                    backgroundColor: '#3ECF44',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    cursor: 'pointer',
                    //   borderWidth: 'none',
                    //   boxShadow: '0px 0px 2px 2px rgb(255,255,255)',
                }}
                onClick={async () => await Mint()}
            >
                Minting Now
            </div>
        </>
    );
};

export default Banner;

const BannerWrapper = styled.div`
    background-size: cover;
    height: 46vw;
    margin-top: 2vh;
`;
