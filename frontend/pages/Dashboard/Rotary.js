import Head from "next/head";
import React from "react";
import Lottery from "../../components/Lottery";
import { useRef, useState, useEffect } from "react";
import { Contract, providers, utils } from "ethers";
import Web3Modal from "web3modal";
import { ROTARY_CONTRACT_ADDRESS, rotary_abi } from "../../constants";

const Rotary = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [participantCount, setParticipantCount] = useState(0);
    const [entryFee, setEntryFee] = useState(0);
    const [recentWinner, setRecentWinner] = useState("");
    const [raffleState, setRaffleState] = useState(0);

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
    const getEntryFee = async () => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(
                ROTARY_CONTRACT_ADDRESS,
                rotary_abi,
                provider
            );

            const entryFee = await contract.getEntranceFee();
            entryFee = utils.formatEther(entryFee);
            setEntryFee(entryFee);
        } catch (error) {
            console.log(error);
        }
    };

    const getRecentWinner = async () => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(
                ROTARY_CONTRACT_ADDRESS,
                rotary_abi,
                provider
            );

            const winners = await contract.getRecentWinner();
            setRecentWinner(winners);
        } catch (error) {
            console.log(error);
        }
    };

    const enterRaffle = async (amount) => {
        try {
            const provider = await getProviderOrSigner(true);

            const contract = new Contract(
                ROTARY_CONTRACT_ADDRESS,
                rotary_abi,
                provider
            );

            const tx = await contract.enterRaffle(amount);

            setIsLoading(true);
            await tx.wait();
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    const getParticipantCount = async () => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(
                ROTARY_CONTRACT_ADDRESS,
                rotary_abi,
                provider
            );

            const count = await contract.getNumberOfPlayers();
            setParticipantCount(count);
        } catch (error) {
            console.log(error);
        }
    };

    const getRaffleState = async () => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(
                ROTARY_CONTRACT_ADDRESS,
                rotary_abi,
                provider
            );

            const state = await contract.getRaffleState();
            setRaffleState(state);
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

        getEntryFee();
    }, []);

    return (
        <>
            <Head>
                <title>Rotary Game | Safe Bet</title>
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#ffffff' />
            </Head>
            <main className='bg-gradient-to-br from-tertiary-color via-main to-tertiary-color'>
                <Lottery entryFee={entryFee} />
            </main>
        </>
    );
};

export default Rotary;
