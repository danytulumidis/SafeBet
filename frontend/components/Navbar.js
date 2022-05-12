import Image from "next/image";

const Navbar = () => {
    return (
        <header className='text-gray-400 bg-transparent body-font'>
            <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
                <a className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
                    <Image
                        className='object-cover object-center rounded'
                        width={40}
                        height={30}
                        alt='hero'
                        src='/logo.svg'
                    ></Image>
                    <span className='ml-3 text-xl'>SafeBet</span>
                </a>
                <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center cursor-pointer'>
                    <a className='mr-5 hover:text-secondary-color'>
                        What is SafeBet?
                    </a>
                    <a className='mr-5 hover:text-secondary-color'>Bet</a>
                    <a className='mr-5 hover:text-secondary-color'>The Team</a>
                    {/* <a className='mr-5 hover:text-secondary-color'>
                        Fourth Link
                    </a> */}
                </nav>
                <button className='inline-flex text-white items-center bg-gradient-to-l from-tertiary-color to-secondary-color border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'>
                    Bet Now
                    <svg
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        className='w-4 h-4 ml-1'
                        viewBox='0 0 24 24'
                    >
                        <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                </button>
            </div>
        </header>
    );
};

export default Navbar;
