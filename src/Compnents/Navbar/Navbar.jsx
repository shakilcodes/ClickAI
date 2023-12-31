import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navbarClasses = `flex justify-between items-center max-w-[1440px] mx-auto pt-3 ${scrolling ? 'bg-opacity-25 bg-black fixed top-0 left-0 right-0' : 'bg-base-100'
        }`;

    return (
        <div className='fixed top-0 right-0 left-0 z-[1] bg-white bg-opacity-75 md:h-16'>
            <div className="flex justify-between items-center max-w-[1440px] mx-auto pt-3">
                <div className="">

                    <Link to='/' className="btn btn-ghost normal-case text-2l font-bold text-[35px]"> <img src="https://i.postimg.cc/Prmknrnx/1.jpg" alt="" /> Click</Link>
                </div>
                <div className=" hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 text-[16px] text-gray-400 font-semibold z-[1] ">
                        <li><a >AI Assistant <span className='border bg-gray-200 text-[#49377B]'>New</span></a></li>
                        <li tabIndex={0} className=''>
                            <details>
                                <summary>Platform</summary>
                                <ul className="p-2 bg-white text-[20px]">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li className=''>
                            <details>
                                <summary>Resources</summary>
                                <ul className="p-2 bg-white text-[20px]">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><a>Pricing</a></li>
                    </ul>
                </div>
                <div className="font-semibold lg:mr-16 flex items-center">
                    <button className='border p-2 px-5 rounded-md shadow-md mr-2 hidden lg:block'><Link to='/login' className="">Sign In</Link></button>
                    <button className=' p-2 shadow-2xl  rounded-md text-white md:w-[145px] bg-[#266cdf]'><a className="p-2 shadow-lg">Try For Free</a></button>

                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 absolute -left-20">
                            <li className=''><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
