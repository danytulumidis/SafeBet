import Head from "next/head";
import About from "../components/About";
import Betting from "../components/Betting";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Team from "../components/Team";
import { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { Contract, providers, utils } from "ethers";
import { RAFFLE_CONTRACT, ABI } from "../constants";

export default function Home() {
    const [walletConnected, setWalletConnected] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // RAFFLE
    // Data getting from the Contract
    const [participantCount, setParticipantCount] = useState(0);
    const [entryFee, setEntryFee] = useState(0);
    const [recentWinner, setRecentWinner] = useState("");
    const [raffleState, setRaffleState] = useState(0);

    // CRYPTO BET
    // Track if user has already entered the game
    const [startedBetting, setStartedBetting] = useState(false);

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

    const connectWallet = async () => {
        try {
            await getProviderOrSigner();
            setWalletConnected(true);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (!walletConnected) {
            web3ModalRef.current = new Web3Modal({
                network: "mumbai",
                providerOptions: {},
                disableInjectedProvider: false,
            });
            connectWallet();
            getEntryFee();
        }
    }, [walletConnected]);

    // Functions
    const getEntryFee = async () => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(RAFFLE_CONTRACT, ABI, provider);

            const entryFee = await contract.getEntranceFee();
            entryFee = utils.formatEther(entryFee);
            setEntryFee(entryFee);
        } catch (error) {
            console.log(error);
        }
    };

    const getRecentWinners = async () => {
        try {
            const provider = await getProviderOrSigner();

            const contract = new Contract(RAFFLE_CONTRACT, ABI, provider);

            const winners = await contract.getRecentWinner();
            setRecentWinner(winners);
        } catch (error) {
            console.log(error);
        }
    };

    const enterRaffle = async (amount) => {
        try {
            const provider = await getProviderOrSigner(true);

            const contract = new Contract(RAFFLE_CONTRACT, ABI, provider);

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

            const contract = new Contract(RAFFLE_CONTRACT, ABI, provider);

            const count = await contract.getNumberOfPlayers();
            setParticipantCount(count);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Head>
                <title>Safe Bet</title>
                <meta
                    name='description'
                    content='SafeBet is the best Betting dApp. Completely decentralized and powered by TRUTH, not Trust!'
                />
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/favicon/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/favicon/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/favicon/favicon-16x16.png'
                />
                <link rel='manifest' href='/favicon/site.webmanifest' />
                <link
                    rel='mask-icon'
                    href='/favicon/safari-pinned-tab.svg'
                    color='#5bbad5'
                />
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#ffffff' />
            </Head>

            <main className='bg-gradient-to-br from-tertiary-color via-main to-tertiary-color'>
                <Hero />
                <About />
                <Betting entryFee={entryFee} />
                <Team />
            </main>

            <Footer />
        </div>
    );
}
