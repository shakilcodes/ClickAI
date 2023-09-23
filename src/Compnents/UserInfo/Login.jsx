import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='bg-[#E6F2FF] h-[91vh]'>
            <div className=' w-[450px] mx-auto pt-10 mt-20'>
                <div className='text-center bg-white py-10 rounded-xl'>
                    <h1 className=' text-4xl font-semibold'>Log in to Click</h1>
                    <h4 className='text-xl mt-3'>Nice to see you again</h4>
                    <div className='text-center'>
                        <input className='text-[18px] text-white w-[370px] bg-[#EEEEEE]  p-2 rounded-lg mt-6  ' type="text" placeholder='Email Adresss' /> <br />
                        <input className='text-[18px] text-white w-[370px] bg-[#EEEEEE]  p-2 rounded-lg mt-6  ' type="email" name="" id="" placeholder='Password' />
                    </div>
                    <button className='text-[18px] text-white w-[370px] bg-[#266CDF]  p-2 rounded-lg mt-6  hover:bg-[#003ebc] '>Log in</button>
                    <button className='text-[18px] w-[370px] bg-[#E1E1E1] text-black p-2 rounded-lg mt-6 font-semibold '>Send me a login link</button>
                    <h1 className='mt-5'>or</h1>
                    <button className='text-[18px] text-white w-[370px] bg-[#314E89] px-2 p-2 rounded-lg mt-6 '>Continue with Facebook</button>
                    <button className='text-[18px] text-blcak border shadow-xl font-semibold w-[370px] bg-white  p-2 rounded-lg mt-6 '>Sign in with Google</button>
                    <button className='text-[18px] text-white w-[370px] bg-black  p-2 rounded-lg mt-6 '>Continue with Apple</button>
                    <hr className='my-8'/>
                    <div>
                        <h1>Forgot Your Password? <span className='text-blue-500'><Link>Reset Passowrd</Link></span></h1>
                        <p>New to Flick? <span className='text-blue-500'><Link>Sign Up</Link></span></p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;