import React from "react";
import Betting from "../../components/Betting";
import { useRef, useState, useEffect } from "react";
import { Contract, providers, utils } from "ethers";
import Web3Modal from "web3modal";
import { CRYPTO_BET_CONTRACT_ADDRESS, bet_abi } from "../../constants";

const Bet = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [contractBalance, setContractBalance] = useState(0);
    const [latestETHPrice, setLatestETHPrice] = useState(0);
    const [downBetterCount, setDownBetterCount] = useState(0);
    const [upBetterCount, setUpBetterCount] = useState(0);

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

    // Functions
    const placeBetUp = async (amount) => {
        try {
            const provider = await getProviderOrSigner(true);

            const contract = new Contract(
                CRYPTO_BET_CONTRACT_ADDRESS,
                bet_abi,
                provider
            );

            const tx = await contract.placeBetUp(amount);

            setIsLoading(true);
            await tx.wait();
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const placeBetDown = async (amount) => {
        try {
            const provider = await getProviderOrSigner(true);

            const contract = new Contract(
                CRYPTO_BET_CONTRACT_ADDRESS,
                bet_abi,
                provider
            );

            const tx = await contract.placeBetDown(amount);

            setIsLoading(true);
            await tx.wait();
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const getContractBalance = async (amount) => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(
                CRYPTO_BET_CONTRACT_ADDRESS,
                bet_abi,
                provider
            );

            const balance = await contract.getBalance();

            setContractBalance(balance);
        } catch (error) {
            console.log(error);
        }
    };

    const getLatestETHPrice = async () => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(
                CRYPTO_BET_CONTRACT_ADDRESS,
                bet_abi,
                provider
            );

            const price = await contract.getLatestPriceETH();
            price = utils.formatUnits(price, 4) * 10000;
            setLatestETHPrice(price);
        } catch (error) {
            console.log(error);
        }
    };

    const getAllDownBetters = async () => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(
                CRYPTO_BET_CONTRACT_ADDRESS,
                bet_abi,
                provider
            );

            const count = await contract.getLengthOfDownBetters();

            setDownBetterCount(count);
        } catch (error) {
            console.log(error);
        }
    };

    const getAllUpBetters = async () => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(
                CRYPTO_BET_CONTRACT_ADDRESS,
                bet_abi,
                provider
            );

            const count = await contract.getLengthOfUpBetters();

            setUpBetterCount(count);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        web3ModalRef.current = new Web3Modal({
            network: "mumbai",
            providerOptions: {},
            disableInjectedProvider: false,
        });

        getLatestETHPrice();
    }, []);

    return (
        <main className='bg-gradient-to-br from-tertiary-color via-main to-tertiary-color'>
            <Betting />
        </main>
    );
};

export default Bet;
