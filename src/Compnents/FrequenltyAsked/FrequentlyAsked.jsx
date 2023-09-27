import React from 'react';

const FrequentlyAsked = () => {
    return (
        <section className='my-32 mx-5 lg:mx-0'>
            <div>
                <h1 className='text-4xl font-bold'>Frequently Asked Questions</h1>
                <p>Got a question about Flick's all-in-one social marketing platform that's not outlined <br /> below? Visit our Help Articles.</p>
            </div>
            <hr className='my-8 border-b border-b-[2px] border-b-[#3174E0]' />
            <div className=' lg:flex gap-10 bg'>

                <div>

                    <div className="collapse collapse-plus ">
                        <input type="radio" name="my-accordion-3" checked="checked" />
                        <div className="collapse-title text-xl font-medium">
                            What is Flick?
                        </div>
                        <div className="collapse-content">
                            <p>Flick is an all-in-one social media marketing platform. Scheduling, hashtag, analytics, and writing tools to help you grow and manage your socials.</p>
                        </div>
                    </div> <hr />
                    <div className="collapse collapse-plus ">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            What devices can I use Flick on?
                        </div>
                        <div className="collapse-content">
                            <p>You can access Flick on your web browser, or by downloading our iOS or Android App. No matter where you go, your hashtags, analytics, and content calendar will follow.

                                Download Flick's iOS App or Android App.</p>
                        </div>
                    </div><hr />
                    <div className="collapse collapse-plus ">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Is Flick approved for Instagram?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, Flick only only uses the official Instagram API for publishing, analytics and hashtags. Your account will always be 100% safe.

                                Meta/Facebook even wrote a Success Story about Flick! Read it here.</p>
                        </div>
                    </div><hr />
                    <div className="collapse collapse-plus ">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Will I be able to search for Hashtags in my language?
                        </div>
                        <div className="collapse-content">
                            <p>Flick's Hashtag Search works in 20+ languages and makes finding hashtags easy. If the hashtags are discoverable on Instagram, they're also available on Flick.</p>
                        </div>
                    </div><hr />
                    <div className="collapse collapse-plus ">
                        <input type="radio" name="my-accordion-3" />
                        <div className="collapse-title text-xl font-medium">
                            Can you schedule Instagram posts?
                        </div>
                        <div className="collapse-content">
                            <p>Yes! With Flick, you can visually plan your future instagram posts, as well as Facebook, TikTok and LinkedIn with a visual drag and drop calendar, preview your future feed, and access the best hashtags available from one easy-to-use platform.</p>
                        </div>
                    </div><hr />
                </div>
                <div className=''>
                    <div className='bg-[#FAFAFA] p-6 rounded-xl h-[250px] text-center mt-10 lg:mt-0'>
                        <h1 className='text-3xl font-bold'>Ready to get started?</h1>
                        <p className='my-3'>Join 100k+ creators, brands and social media managers using Flick to save them time and improve results.</p>
                        <button className='text-[18px] w-[300px ] bg-[#266CDF] md:px-20 p-2 rounded-lg mt-6 text-white font-bold'>Start 7 Days Trial</button>
                    </div>
                </div>

                <hr />
            </div>
        </section>
    );
};

export default FrequentlyAsked;