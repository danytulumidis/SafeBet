import Footer from "./Footer";
import Navbar from "./Navbar";

export default function About() {
	return (
		<div className='min-h-screen flex flex-col justify-between'>
			<Navbar />
			<div className=' px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
				<div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
					<h2 className='max-w-lg mb-6 font-bebas text-4xl text-transparent bg-clip-text bg-gradient-to-b from-secondary-color to-pink-700 font-bold leading-none tracking-wider  sm:text-6xl md:mx-auto'>
						<span className='relative inline-block'>
							<svg
								viewBox='0 0 52 24'
								fill='white'
								className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block'>
								<defs>
									<pattern
										id='1d4040f3-9f3e-4ac7-b117-7d4009658ced'
										x='0'
										y='0'
										width='.135'
										height='.30'>
										<circle cx='1' cy='1' r='.7' />
									</pattern>
								</defs>
								<rect
									fill='url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)'
									width='52'
									height='24'
								/>
							</svg>
							<span className='relative bg-clip-text bg-gradient-to-b from-secondary-color to-pink-700'>
								What
							</span>
						</span>{" "}
						is SafeBet?
					</h2>
					<p className='text-base text-white md:text-lg'>
						Sed ut perspiciatis unde omnis iste natus error sit
						voluptatem accusantium doloremque rem aperiam, eaque
						ipsa quae.
					</p>
				</div>
				<div className='grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2'>
					<div className='duration-300 transform bg-white border-l-4 border-secondary-color hover:-translate-y-2 h-40'>
						<div className='h-full p-5 border border-l-0 rounded-r shadow-sm'>
							<h6 className='mb-2 font-semibold leading-5'>
								The doctor said
							</h6>
							<p className='text-sm text-gray-900'>
								Sportacus andrew weatherall goose Refined
								gentlemen super mario des lynam alpha trion zap
								rowsdower.
							</p>
						</div>
					</div>
					<div className='duration-300 transform bg-white border-l-4 border-secondary-color hover:-translate-y-2 h-40'>
						<div className='h-full p-5 border border-l-0 rounded-r shadow-sm'>
							<h6 className='mb-2 font-semibold leading-5'>
								Skate ipsum dolor
							</h6>
							<p className='text-sm text-gray-900'>
								Bulbasaur Lorem ipsum dolor sit amet,
								consectetur adipiscing elit.
							</p>
						</div>
					</div>
					<div className='duration-300 transform bg-white border-l-4 border-secondary-color hover:-translate-y-2 h-40'>
						<div className='h-full p-5 border border-l-0 rounded-r shadow-sm'>
							<h6 className='mb-2 font-semibold leading-5'>
								Baseball ipsum dolor
							</h6>
							<p className='text-sm text-gray-900'>
								Bro ipsum dolor sit amet gaper backside single
								track, manny Bike epic clipless. Schraeder drop
								gondy.
							</p>
						</div>
					</div>
					<div className='duration-300 transform bg-white border-l-4 border-secondary-color hover:-translate-y-2 h-40'>
						<div className='h-full p-5 border border-l-0 rounded-r shadow-sm'>
							<h6 className='mb-2 font-semibold leading-5'>
								They urge you
							</h6>
							<p className='text-sm text-gray-900'>
								A flower in my garden, a mystery in my panties.
								Heart attack never stopped old Big Bear.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
