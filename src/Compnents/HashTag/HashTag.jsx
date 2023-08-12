import React from 'react';

const HashTag = () => {
    return (
        <section>
            <div className='flex justify-between items-center gap-10 my-10'>
                <div className='bg-[#F0F5FF] p-6 rounded-2xl w-[50%] md:h-[680px]'>
                    <div>
                        <h1 className='text-3xl font-bold'>Hashtag Tools</h1>
                    </div>
                    <p className='text-xl mt-3'>No more shooting in the dark. Start reaching more people when you post, and tailor your hashtags to improve your performance.</p>
                    <button className='text-[18px] w-[410px ] bg-[#266CDF] px-16 p-2 rounded-lg mt-6 text-white'>Learn about Hashtag Tools</button>
                    <img src="https://i.postimg.cc/JhcM9cJn/body-2.jpg" alt="" />
                </div>
                <div className='bg-[#F4F0FF] p-6 rounded-2xl w-[50%] md:h-[680px]'>
                    <div>
                        <h1 className='text-3xl font-bold'>Post Scheduler</h1>
                    </div>
                    <p className='text-xl mt-3'>Your time and headspace are precious. Make planning, creating and publishing your content less stressful, with a reliable and easy-to-use Scheduler.

</p>
                    <button className='text-[18px] w-[410px ] bg-[#8A3FF2] px-16 p-2 rounded-lg mt-6 text-white'>Learn about Scheduler</button>
                    <img src="https://i.postimg.cc/PfSH1Q1b/body1.jpg" alt="" />
                </div>
            </div>
            <div>
                <div className='flex justify-between items-center gap-10 my-10'>
                    <div className='bg-[#FFF8F0] p-6 rounded-2xl w-[50%] md:h-[680px]'>
                        <div>
                            <h1 className='text-3xl font-bold'>Analytics & Reporting</h1>
                        </div>
                        <p className='text-xl mt-3'>It's easy to lose track of what's working on Social. Get the clarity and confidence you need to make the right decisions.</p>
                        <button className='text-[18px] w-[410px ] bg-[#ED9100] px-16 p-2 rounded-lg mt-6 text-white'>Learn about Analytics Tool</button>
                        <img src="https://i.postimg.cc/wvdNcp8r/section-2-2.jpg" alt="" />
                    </div>
                    <div className='bg-[#FAFAFA] p-6 rounded-2xl w-[50%] md:h-[680px]'>
                        <div>
                            <h1 className='text-3xl font-bold'>Resources</h1>
                        </div>
                        <p className='text-xl mt-3'>Whether you’re just getting started, or you’re mananging multiple clients, we’ve got training, templates, and tips to help you level up.</p>
                        <button className='text-[18px] w-[410px ] bg-black px-16 p-2 rounded-lg mt-6 text-white'>Visit Flick's Blog</button>
                        <img src="https://i.postimg.cc/cJdZQ9km/section-2.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HashTag;