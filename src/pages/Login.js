import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
const Login = () => {
    const [loginData, setLoginData] = useState([]);
    const [successMsg, setSuccessMsg] = useState('');
    const [show, setShow] = useState(false);
    const [user, setUser] = useState();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const onSubmit = (e) => {
        setLoginData([...loginData, user]);
        setSuccessMsg('User registration is successful.');
        reset();
    };
    return (
        <div className="h-screen flex">
            <div className="w-1/2 bg-gradient-to-tr from-blue-800 to-purple-700 justify-around items-center i hidden sm:flex">
                <div>
                    <h1 className="text-white font-bold text-4xl font-sans">Confluence</h1>
                    <p className="text-white mt-1">The simplest app to use</p>
                    <button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2  ">Read More</button>
                </div>
            </div>
            <div className="flex w-1/2 justify-center items-center bg-white w-full md:w-3/4  lg:w-1/2 flex flex-col items-center bg-slate-50 rounded-md pt-12 ">
                <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>
                    {successMsg && <p className="flex items-center  bg-blue-100 border-blue-500 text-blue-700 text-sm font-bold px-4 py-3 rounded relative mb-4">{successMsg}</p>}
                    <div className="mb-4">
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input className="pl-2 outline-none border-none " type="text" name="" id="" placeholder="Email Address"
                                onChange={(e) => handleChange(e)}
                                {...register('email', {
                                    required: 'Email is required.',
                                    pattern: {
                                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                        message: 'Email is not valid.'
                                    }
                                })} />
                        </div>
                        {errors.email && <div className="text-red-500 text-sm mt-1 mb-4 pl-4">{errors.email.message}</div>}
                    </div>
                    <div>
                        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                            <input className="pl-2 outline-none border-none" type={show ? 'text' : 'password'} name="" id="" placeholder="Password"
                                onChange={(e) => handleChange(e)}
                                {...register('password', {
                                    required: true,
                                    validate: {
                                        checkLength: (value) => value.length >= 6,
                                        matchPattern: (value) =>
                                            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                                                value
                                            )
                                    }
                                })}/>
                            <label onClick={() => { setShow(!show); }}
                                className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label"
                            >{show ? 'hide' : 'show'}</label>
                        </div>
                        {errors.password?.type === 'required' && (
                            <p className="text-red-500 text-sm mt-1 mb-4 pl-4">Password is required.</p>
                        )}
                        {errors.password?.type === 'checkLength' && (
                            <p className="text-red-500 text-sm mt-1 mb-4 pl-4">
                                Password should be at-least 6 characters.
                            </p>
                        )}
                        {errors.password?.type === 'matchPattern' && (
                            <p className="text-red-500 text-sm mt-1 mb-4 pl-4">
                                Password should contain at least one uppercase letter,<br/> lowercase
                                letter, digit, and special symbol.
                            </p>
                        )}
                    </div>
                    <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                </form>
            </div>
        </div>
    );
};
export default Login;
