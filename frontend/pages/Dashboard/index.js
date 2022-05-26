import Head from "next/head";
import Betting from "../../components/Betting";
import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";
import Navbar from "../../components/Navbar";
import { useRouter } from "next/router";

export default function Bet() {
    const router = useRouter();

    const getLibrary = (provider, connector) => {
        return new Web3Provider(provider);
    };

    return (
        <div>
            <Head>
                <title>Dashboard | Safe Bet</title>
                <meta
                    name='description'
                    content='SafeBet is the best Betting dApp. Completely decentralized and powered by TRUTH, not Trust!'
                />

                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#ffffff' />
            </Head>

            <main className='bg-gradient-to-br from-tertiary-color via-main to-tertiary-color'>
                <Betting />
            </main>
        </div>
    );
}
/* 
export async function getServerSideProps(context) {

	const game = context.query.game;

	console.log(game)

	if (game === "bet") {
		return {
			props : {
				children: <BettingD />
			}
		}
	} else if (game === 'rotary') {
		return {
			props: {
				children: <Rotary />
			}
		}
	} else { 
		return {
			props: {
				children: <Betting />
			}
		}
	}
  }
   */
