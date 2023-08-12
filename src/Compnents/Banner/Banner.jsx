import React from 'react';

const Banner = () => {
    return (
        <div className='pt-5 text-white relative'>
            <div className='bg-gradient-to-r from-[#240764] via-[#323999] to-[#2A62AB] h-[85vh] w-full'>
                <div className=' w-[837px] text-center mx-auto pt-[74px]'>
                    <h1 className='text-[64px] font-bold tracking-tight	leading-tight		'>Social media marketing:
                        <br /> 10x faster with AI at your fingertips.</h1>
                    <p className='text-[28px]'>Handle copywriting, scheduling, hashtags, and analytics seamlessly with Flick, the AI-powered social marketing platform.</p>
                    <div>
                        <button className='text-[18px] w-[410px ] bg-[#266CDF] px-28 p-2 rounded-lg mt-6'>Get Started for Free</button>
                    </div>
                    <div className='text-[14px] mt-4 flex justify-center gap-10'>
                        <p>Center Anytime</p>
                        <p>Easy Setup</p>
                        <p>Support</p>
                    </div>
                </div>
            </div>
            <section className='grid justify-center absolute left-[230px] -mt-[200px]'>
                <img className='w-[1466px]' src="https://i.postimg.cc/TwHchtCt/banner.webp" alt="" />
            </section>
            <section className='flex jusftify-between items-center gap-[150px] mt-[350px] text-black max-w-[1280px] mx-auto'>
                <h1 className='font-bold text-3xl'> The modern social marketing platform for  busy <br /> business owners, marketers, and creators.</h1>
                <div className=''>
                <button className='text-[18px] w-[410px ] bg-[#266CDF] px-28 p-2 rounded-lg mt-6'>Get Started for Free</button>
                <div className='text-[14px] mt-4 flex justify-center gap-10'>
                        <p>Center Anytime</p>
                        <p>Easy Setup</p>
                        <p>Support</p>
                    </div>
                </div>
            </section>
            <div className='text-black  mt-16'>
                <hr className='border		'/>
              <h1 className='text-center '>  Explore the Platform</h1>
            </div>
        </div>
    );
};

export default Banner;