import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { ethers } from 'ethers';
import abi from './abi';
import { NFTStorage } from 'nft.storage';

function Wallet() {
  const client = new NFTStorage({
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGU1RUQ2ZjQyZDYwQUExOGM1NDgxNzI0YkZGZUM0NmM5ZTM1OThGZjMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4NDQ2NzIxNzE0NCwibmFtZSI6InBhbmd5b2Vsb24ifQ.pV5R1O4NaG4UyPPTbyVIRP3HsDvUEaOuZW7cdsvDzPs',
  });

  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();
  const [contract, setContract] = useState<ethers.Contract>();

  const router = useRouter();

  // owner 지갑 인스턴스화
  const mnemonic = 'enact cube inner heart helmet clay other resemble salon renew fee brick';
  const tempOwner = ethers.Wallet.fromMnemonic(mnemonic);
  const infura = new ethers.providers.JsonRpcProvider('https://goerli.infura.io/v3/5ce84af087214801a2a02837ede88ab1');
  const owner = tempOwner.connect(infura);

  // 랜덤함수
  const rand = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  // 메마 지갑 연결
  const connectToMetaMask = async () => {
    // 메타마스크 설치 확인
    if (typeof window.ethereum !== 'undefined') {
      // 메타마스크가 있을 시 지갑연결 요청
      const provider = await new ethers.providers.Web3Provider(window.ethereum);
      setProvider(provider);
      const walletAddress = await provider.send('eth_requestAccounts', []);
      console.log('connected to ', walletAddress);

      // 컨트랙트 인스턴스화
      const contract = new ethers.Contract('0xB74b07A09826318F7a3F1c12e13A9806B0e28AF3', abi, provider);
      setContract(contract);

      // MetaMask 연결 성공 후 Footer로 이동
      router.push('/Router');
    } else {
      alert('please install MetaMask');
    }
  };

  // 민팅하기
  const Mint = async () => {
    // view함수 호출 (tokenId)
    const tokenId = await contract?.tokenId();

    // 컨트랙트와 연결된 지갑 결합(?), mint함수 호출
    const signer: any = provider?.getSigner();
    const contractWithSigner = contract?.connect(signer);
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
      <button
        onClick={async () => {
          await connectToMetaMask();
        }}
      >
        Connect to MetaMask
      </button>
      <button
        onClick={async () => {
          await Mint();
        }}
      >
        mint your DangDangE!
      </button>
    </>
  );
}

export default Wallet;
