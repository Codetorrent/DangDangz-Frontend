import React, { useState } from "react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { userAccountState } from "./../../pages/_app";
import { RecoilRoot } from "recoil";

declare global {
    interface Window {
        ethereum?: {
            request: (options: { method: string }) => Promise<string[]>;
        };
    }
}

function Wallet() {
    const [userAccount, setUserAccount] = useRecoilState(userAccountState);

    const router = useRouter();

    const walletConnect = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                if (accounts.length > 0) {
                    setUserAccount(accounts[0]);
                    // MetaMask 연결 성공 후 Footer로 이동
                    router.push("/Router");
                } else {
                    setUserAccount(userAccount);
                }
            } catch (error) {
                console.error("Error connecting wallet:", error);
                setUserAccount("");
            }
        } else {
            console.error("Ethereum provider not found");
            setUserAccount("");
        }
    };

    return (
        <RecoilRoot>
            <div>
                <button onClick={walletConnect}>Join to DangDangz</button>
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
