import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { ethers } from 'ethers';
import abi from './abi';
import { NFTStorage } from 'nft.storage';

function Wallet() {
    const client = new NFTStorage({
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGU1RUQ2ZjQyZDYwQUExOGM1NDgxNzI0YkZGZUM0NmM5ZTM1OThGZjMiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY4NDQ2NzIxNzE0NCwibmFtZSI6InBhbmd5b2Vsb24ifQ.pV5R1O4NaG4UyPPTbyVIRP3HsDvUEaOuZW7cdsvDzPs',
    });

    const router = useRouter();

    // 메마 지갑 연결
    const connectToMetaMask = async () => {
        // 메타마스크 설치 확인
        if (typeof window.ethereum !== 'undefined') {
            // 메타마스크가 있을 시 지갑연결 요청
            const provider = await new ethers.providers.Web3Provider(window.ethereum);
            const walletAddress = await provider.send('eth_requestAccounts', []);
            console.log('connected to ', walletAddress);

            // 컨트랙트 인스턴스화
            const contract = new ethers.Contract('0xB74b07A09826318F7a3F1c12e13A9806B0e28AF3', abi, provider);

            // MetaMask 연결 성공 후 Footer로 이동
            router.push('/Router');
        } else {
            alert('please install MetaMask');
        }
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
        </>
    );
}

export default Wallet;
