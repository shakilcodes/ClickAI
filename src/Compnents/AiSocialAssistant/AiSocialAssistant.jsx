import React from 'react';

const AiSocialAssistant = () => {
    return (
        <div className='mt-10 md:mt-20 lg:flex justify-between items-center bg-gradient-to-r from-[#ECE1FC] via-[#E6E7FB] to-[#F1F4F9] p-7 rounded-2xl lg:mx-0 mx-5'>
            <div>
                <h1 className='text-4xl font-bold'>Ai Social Assitant (beta)</h1>
                <p className='my-3'>Get the helping hand you deserve. Create Social content fast. <br /> Never run out of ideas. Delegate time-consuming tasks.</p>
                <button className='text-[18px]  lg:w-[410px ] bg-gradient-to-r from-[#240764] via-[#323999] to-[#2A62AB] lg:px-28 p-2 rounded-lg lg:mt-6 text-white'>Learn about Ai Assistant</button>
            </div>
            <div className='hidden lg:block'>
                <img src="https://i.postimg.cc/nznGT0F1/section-one.webp" alt="" />
            </div>
            <div className='block lg:hidden flex justify-center'>
                <img className='w-[250px] md:w-[520px]' src="https://i.postimg.cc/ZngMKw5m/642ac752e48f6a0b41333d70-aiscoialmediamanagermobile.webp" alt="" />
            </div>
        </div>
    );
};

export default AiSocialAssistant;