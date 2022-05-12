import Head from "next/head";
import Hero from "../components/Hero";

export default function Home() {
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
                <link rel='manifest' href='/site.webmanifest' />
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
            </main>

            <footer></footer>
        </div>
    );
}
