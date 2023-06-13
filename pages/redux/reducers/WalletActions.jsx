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
