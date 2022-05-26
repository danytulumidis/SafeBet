import React from "react";
import Betting from "../../components/Betting";

const Bet = () => {
    // TODO: State variables for Betting

    const web3ModalRef = useRef();

    // Connecting to the Contract
    const getProviderOrSigner = async (needSigner = false) => {
        // Connect to Metamask
        const provider = await web3ModalRef.current.connect();
        const web3Provider = new providers.Web3Provider(provider);

        // If user is not connected to the Mumbai network, let them know and throw an error
        const { chainId } = await web3Provider.getNetwork();
        if (chainId !== 80001) {
            window.alert("Change the network to Mumbai");
            throw new Error("Change network to Mumbai");
        }

        if (needSigner) {
            const signer = web3Provider.getSigner();
            return signer;
        }
        return web3Provider;
    };

    // TODO Functions for Betting from Smart Contract

    return (
        <main className='bg-gradient-to-br from-tertiary-color via-main to-tertiary-color'>
            <Betting />
        </main>
    );
};

export default Bet;
