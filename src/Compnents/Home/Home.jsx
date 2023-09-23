import React from 'react';
import Banner from '../Banner/Banner';
import AiSocialAssistant from '../AiSocialAssistant/AiSocialAssistant';
import HashTag from '../HashTag/HashTag';
import Slider from '../Slider/Slider';
import JoinAGrowing from '../JoinAGrowing/JoinAGrowing';
import Blogers from '../Bloogers/Blogers';
import FrequentlyAsked from '../FrequenltyAsked/FrequentlyAsked';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className='mt-16'>
            <Banner></Banner>
            <section className='max-w-[1280px] mx-auto'>
                <AiSocialAssistant></AiSocialAssistant>
            </section>
            <section className='max-w-[1280px] mx-auto'>
                <HashTag></HashTag>
            </section>
            <section className='max-w-[1280px] mx-auto'>
                <Slider></Slider>
            </section>
            <section className=' bg-[#303030]'>
                <JoinAGrowing></JoinAGrowing>
            </section>

            <section className='max-w-[1280px] mx-auto'>
                <Blogers></Blogers>
            </section>
            <section className='max-w-[1280px] mx-auto'>
                <FrequentlyAsked></FrequentlyAsked>
            </section>
            <section className='max-w-[1280px] mx-auto'>
                <Footer></Footer>
            </section>
            
        </div>
    );
};

export default Home;