import { useConnect, metamaskWallet } from "@thirdweb-dev/react";

const metamaskConfig = metamaskWallet();

function Wallet() {
    const connect = useConnect();

    return (
        <button
            onClick={async () => {
                const wallet = await connect(metamaskConfig);
                console.log("connected to ", wallet);
            }}
        >
            Connect to MetaMask
        </button>
    );
}

export default Wallet;
