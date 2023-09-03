import lotus from '../assets/white-lotus.svg'

function Hero() {
    return (
        <div 
            className="h-screen relative flex flex-col items-center bg-hero-bg-img bg-cover"
        >
            <div
                className="relative w-full flex items-center justify-between pt-10 mx-auto px-10"
            >
                <div
                    className='flex items-center justify-center'
                >
                    <img 
                        src={lotus} 
                        alt="brand logo" 
                        className='h-12 w-12'
                    />
                    <span className='ml-3 text-2xl text-white'>The White Lotus</span>
                </div>
            </div>
        </div>
    )
}

export default Hero