import Image from "next/image";

const About = () => {
    return (
        <section id='about' className='text-white body-font'>
            <div className='container mx-auto flex px-5 pt-24 items-center justify-center flex-col'>
                <Image
                    className='lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded'
                    width={500}
                    height={500}
                    alt='hero'
                    src='/about_image.svg'
                ></Image>
                <div className='text-center lg:w-2/3 w-full'>
                    <h1 className='title-font sm:text-5xl text-3xl mb-4 font-medium text-white'>
                        How SafeBet works?
                    </h1>
                    <div className='border-2 mx-52 border-secondary-color my-4'></div>
                    <p className='leading-relaxed mb-8'>
                        SafeBet is a decentralized betting dApp powered by
                        TRUTH. It is a decentralized application that allows you
                        to bet on things that excites you the most.
                        <br />
                        Make a bet on the current Crypto market and get rewarded
                        for winning.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
