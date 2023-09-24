import React from 'react';

const Footer = () => {
    return (
        <div className='mx-5 lg:mx-0'>
            <div className='lg:hidden block mb-10'>
                <div className='flex gap-2'>
                    <div>
                        <img src="https://i.postimg.cc/Prmknrnx/1.jpg" alt="" />
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold'>Click</h1>
                    </div>
                </div>
                <p>All-in-one Social Marketing Platform.</p>
            </div>
            <section className='lg:flex lg:justify-between grid md:grid-cols-4 grid-cols-2 gap-5'>
                <div className='hidden lg:block'>
                    <div className='flex gap-2'>
                        <div>
                            <img src="https://i.postimg.cc/Prmknrnx/1.jpg" alt="" />
                        </div>
                        <div>
                            <h1 className='text-4xl font-bold'>Click</h1>
                        </div>
                    </div>
                    <p>All-in-one Social Marketing Platform.</p>
                </div>
                <div>
                    <h1 className='text-[#CACAD1] mb-4'>PRODUCT AREAS</h1>
                    <p>Instagram Hashtag Tool</p>
                    <p>Social Post Scheduler</p>
                    <p>AI Social Media Tools</p>
                    <p>Instagram Analytics Tool</p>
                    <div className='mt-10'>
                        <h1 className='text-[#CACAD1] mb-4'>POPULAR FEATURES</h1>
                        <p>Hashtag Search </p>
                        <p>Hashtag Finder </p>
                        <p>Hashtag Manager </p>
                        <p>Banner Hashtag Checke </p>
                        <p>Instagram Analytics Reports</p>
                        <p>Instagram Post Scheduler</p>
                        <p>Instagram Hashtag Tracker</p>
                        <p>Instagram Feed Planner</p>
                        <p>AI Social Media Assistant</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-[#CACAD1] mb-4'>PLATEFORM</h1>
                    <p>Pricing</p>
                    <p>Roadmap</p>
                    <p>Open Wiki</p>
                    <p>Changelog</p>
                    <p>Request Feature</p>
                    <p>Terms & Conditions</p>
                </div>
                <div>
                    <h1 className='text-[#CACAD1] mb-4'>RESOURCES</h1>
                    <p>Blog</p>
                    <p>Academy</p>
                    <p>Help Center</p>
                    <p>Affiliate Programe </p>
                    <p>Open Benchmarks </p>
                    <p>Free Caption Generator</p>
                </div>
                <div>
                    <h1 className='text-[#CACAD1] mb-4'>LEGAL & CONTACT</h1>
                    <p>Support </p>
                    <p>Partnerships </p>
                    <p>Marketing </p>
                    <p>Billings </p>
                    <p>Privacey Policy</p>
                    <p></p>
                </div>
            </section>
            <div>
                <hr className='mt-16 mb-9' />
                <h1 className='text-center mb-10'>© 2023 Shakil Ahmed | All rights reserved.</h1>
            </div>
        </div>
    );
};

export default Footer;