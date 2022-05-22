const Betting = (props) => {
    const { entryFee } = props;
    return (
        <section id='betting' className='min-h-screen text-white'>
            <div className='flex justify-center flex-col items-center min-h-screen'>
                <h1 className='text-7xl'>TODO - ADD FUNCTIONALITY</h1>
                <p>{entryFee}</p>
            </div>
        </section>
    );
};

export default Betting;
