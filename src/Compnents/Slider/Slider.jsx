import React from 'react';
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"


const Slider = () => {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            slides: {
                perView: 1.4,
                spacing: 20,
            }
        },

        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 800)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = true
                        clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return (
        <div className='mb-20'>
            <div className='text-center mt-20'>

                <h1 className='text-3xl font-bold mb-16'>Running your socials isn't easy. It's time to take back <br /> control of your time and headspace.</h1>
            </div>
            <div ref={sliderRef} className="keen-slider">

                <div className="keen-slider__slide number-slide1  shadow-md flex items-center gap-10 justify-center bg-[#EDFDFC] h-[300px] rounded-2xl">
                    <img className='w-[200px] h-[250px] rounded-2xl' src="https://i.postimg.cc/jqX2r4zB/person3.jpg" alt="" />
                    <div className='w-[580px]'>
                        <h1>Without Flick, I wouldn’t be able to run and grow my business or personal brand the way I am. Whether it's planning my posts ahead of time, or finding niche hashtags quickly, Flick helps me achieve my goals faster than ever before - it's a must have platform for any business or brand that values their time and wants to leverage social effectively.</h1>
                        <h4 className='mt-5 font-bold text-xl'>Benjamin Leavitt</h4>
                        <p>Instagram Coach & YouTuber</p>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1  shadow-md flex items-center gap-10 justify-center bg-[#FFF2F3] h-[300px] rounded-2xl">
                    <img className='w-[200px] h-[250px] rounded-2xl' src="https://i.postimg.cc/13z9Px9q/person1.jpg" alt="" />
                    <div className='w-[580px]'>
                        <h1>Flick's been a game-changer for me. It’s helped me take the guesswork out of hashtag research and helped my clients posts get more visibility. I love the excellent reporting, and the ability to see the potential reach of a hashtag versus how popular a hashtag is. This is absolute gold!</h1>
                        <h4 className='mt-5 font-bold text-xl'>Kim Willis
                        </h4>
                        <p>SMM & Owner of Save Your Time
                        </p>
                    </div>
                </div>
                <div className="keen-slider__slide number-slide1  shadow-md flex items-center gap-10 justify-center bg-[#F4F0FF] h-[300px] rounded-2xl">
                    <img className='w-[200px] h-[250px] rounded-2xl' src="https://i.postimg.cc/50DZhGs8/person2.jpg" alt="" />
                    <div className='w-[580px]'>
                        <h1>With the help of Flick, my content ranks consistently on the hashtags I use. And, it helps me achieve these results in less than 60 minutes per month - I also love that Flick is now more than a hashtag tool. I can monitor the effectiveness of my content, and schedule my posts weeks in advance.</h1>
                        <h4 className='mt-5 font-bold text-xl'>Simon Mitchell
                        </h4>
                        <p>Social Media Manager
                        </p>
                    </div>
                </div>




            </div>
            <section className='mt-20 flex justify-center gap-20'>
                <div className='text-center'>
                    <h1 className='text-2xl font-bold mb-4'>Helping you get organized, <br />
                        consistent, and productive on Social.</h1>
                    <p className='w-[450px] mx-auto'>Using social for business isn’t easy. Save time, and improve results, no matter which platform is leading the way.</p>
                </div>
                <div className='text-center'>
                    <h1 className='text-2xl font-bold mb-4'>Built with love, care and <br />
                        customer experience at its core.</h1>
                    <p className='w-[450px] mx-auto'>Designed to help you succeed in every possible way—from our hands-on customer service, to thoughtful user experience.</p>
                </div>
            </section>
            <div>

                <div className='grid justify-center mt-5'>
                    <div className='text-[14px] mt-4  gap-10'>
                        <button className='text-[18px] w-[410px ] border shadow-md hover:text-white hover:bg-[#266CDF] font-bold px-28 p-2 rounded-lg mt-4 '>Fry Flick for Free</button>
                        <div className='flex justify-center mt-5 gap-5'>
                            <p>7-Day Trial
                            </p>
                            <p>Easy setup
                            </p>
                            <p>24/7 Support
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;