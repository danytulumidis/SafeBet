export default function Card() {
	return (
		<div className='w-full'>
			<div className='shadow-lg px-4 py-6 w-full bg-gray-800 relative'>
				<p className='text-sm w-max text-white font-semibold border-b border-gray-200'>
					Money Recieved
				</p>
				<div className='flex items-end space-x-2 my-6'>
					<p className='text-5xl text-white font-bold'>0.123</p>
					<span className='text-pink-600 text-xl font-bold flex items-center'>
						MATIC
					</span>
				</div>
				<div className='text-white'>
					<div className='flex items-center pb-2 mb-2 text-sm sm:space-x-12  justify-between border-b border-gray-200'>
						<p>Time:</p>
						<div className='flex items-end text-xs'>34</div>
					</div>
				</div>
			</div>
		</div>
	);
}