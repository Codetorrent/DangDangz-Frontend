import React, { useState } from "react";
import { useRouter } from "next/router";

declare global {
    interface Window {
        ethereum?: {
            request: (options: { method: string }) => Promise<string[]>;
        };
    }
}

function Wallet() {
    const [userAccount, setUserAccount] = useState<string | undefined>();
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
                    setUserAccount("");
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
        <div>
            <button onClick={walletConnect}>기모딩</button>
        </div>
    );
}

export default Wallet;
