import Image from "next/image";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <section id='hero' className='h-screen'>
            <Navbar />
            <section className='text-gray-300 body-font'>
                <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                    <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
                        <h1 className='title-font sm:text-4xl xl:text-6xl text-3xl mb-4 font-medium text-white'>
                            <span className='text-transparent bg-clip-text bg-gradient-to-b from-secondary-color to-pink-700'>
                                Decentralized
                            </span>{" "}
                            <span className='text-transparent bg-clip-text bg-gradient-to-b from-pink-700 to-sf-violet'>
                                Betting
                            </span>
                        </h1>
                        <p className='mb-8 leading-relaxed'>
                            If you want to bet in the world of Web3, SafeBet is
                            the best choice. An dApp that will help you bet on
                            things that excites you the most!
                        </p>
                        <div className='flex justify-center'>
                            <button className='inline-flex text-white bg-secondary-color shadow-md shadow-glow border-0 py-2 px-6 focus:outline-none rounded text-lg'>
                                Bet Now
                            </button>
                            <button className='ml-4 inline-flex text-white border-2 border-secondary-color py-2 px-6 focus:outline-none hover:text-secondary-color rounded text-lg'>
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                        <Image
                            className='object-cover object-center rounded'
                            width={500}
                            height={500}
                            alt='hero'
                            src='/hero_image.png'
                        />
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Hero;
