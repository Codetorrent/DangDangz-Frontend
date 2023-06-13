import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { userAccountState } from './../../pages/_app';
import { RecoilRoot } from 'recoil';
import { ethers } from 'ethers';
import abi from './abi';

function Wallet() {
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
        <RecoilRoot>
            <div>
                <button
                    onClick={async () => {
                        await connectToMetaMask();
                    }}
                >
                    Join to DangDangz
                </button>
            </div>
        </RecoilRoot>
    );
}

export default Wallet;

// export const WALLET_CONNECT = "WALLET_CONNECT";
// export const CONNECT_REFRESH = "CONNECT_REFRESH";

// const walletConnect = (payload: string) => {
//     return {
//         type: WALLET_CONNECT,
//         payload,
//     };
// };

// const connectRefresh = (payload: string) => {
//     return {
//         type: CONNECT_REFRESH,
//         payload,
//     };
// };

// export const getAddress = () => async (dispatch) => {
//     if (window.ethereum) {
//         try {
//             const addressArray = await window.ethereum.request({
//                 method: "eth_accounts",
//             });

//             if (addressArray.length > 0) {
//                 dispatch(connectRefresh({ account: addressArray[0] }));
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }
// };
