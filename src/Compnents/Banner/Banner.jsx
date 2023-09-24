import React from 'react';

const Banner = () => {
    return (
        <div className='pt-5 text-white relative'>
            <div className='bg-gradient-to-r from-[#240764] via-[#323999] to-[#2A62AB] h-[80vh] md:h-[85vh] w-full'>
                <div className=' lg:w-[837px] text-center mx-auto pt-10 md:pt-[74px]'>
                    <h1 className='text-[44px] md:text-[51px] lg:text-[64px] font-bold tracking-tight	leading-tight'>Social media marketing:
                        <br /> 10x faster with AI at your  fingertips.</h1>
                    <p className=' text-[28px] mt-8 md:mt-0 md:px-28 lg:px-0 md:tracking-[0] tracking-widest leading-[40px] md:leading-tight'>Handle copywriting, scheduling, hashtags, and analytics seamlessly with Flick, the AI-powered social marketing platform.</p>
                    <div className='cursor-pointer'>
                        <button className='text-[18px] md:w-[410px] bg-[#266CDF] md:px-28 p-2 rounded-lg mt-6  hover:bg-[#003ebc] '>Get Started for Free</button>
                    </div>
                    <div className='text-[14px] mt-4 flex justify-center gap-10'>
                        <p>Center Anytime</p>
                        <p>Easy Setup</p>
                        <p>Support</p>
                    </div>
                </div>
            </div>
            <section className='grid justify-center top-[740px] md:top-1/2 lg:top-auto  items-center absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full'>
                <img className='md:w-[1466px] ' src="https://i.postimg.cc/TwHchtCt/banner.webp" alt="" />
            </section>
            <main className='max-w-[1280px] mx-auto '>
                <section className='lg:flex jusftify-between items-center gap-[150px] mt-[150px] mx-8 lg:mx-0  lg:mt-[350px] text-black max-w-[1280px] mx-auto'>
                    <h1 className='font-bold text-3xl mx-5 md:mx-0'> The modern social marketing platform for  busy <br /> business owners, marketers, and creators.</h1>
                    <div className=''>
                        <div className='flex justify-center'>
                            <button className='text-[18px] w-[90%] lg:w-[410px ] hover:bg-[#266CDF] hover:text-white font-semibold  p-2 rounded-lg mt-6 border shadow-xl '>Try Flick for Free</button>
                        </div>
                        <div className='text-[14px] mt-4 flex justify-center gap-10'>
                            <p>Center Anytime</p>
                            <p>Easy Setup</p>
                            <p>Support</p>
                        </div>
                    </div>
                </section>
            </main>
            <div className='text-black  mt-16'>
                <hr className='border		' />
                <h1 className='text-center '>  Explore the Platform</h1>
            </div>
        </div>
    );
};

export default Banner;