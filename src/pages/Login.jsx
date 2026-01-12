import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router';
import Loader from '../components/Loader';
import useLoader from '../hooks/UseLoader';
import useUserInfo from '../hooks/UseUserInfo';
import toast from 'react-hot-toast';
import useAxios from '../hooks/UseAxios';

const Login = () => {
    const { login, loginWithGoogle } = use(AuthContext);

    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm()

    const { role } = useUserInfo();

    const { loader, startLoading, stopLoading } = useLoader()

    const navigate = useNavigate()

    const axiosInstance = useAxios();

    const handleLogin = data => {
        startLoading()
        console.log(data)
        login(data?.email, data?.password)
            .then(result => {
                navigate(role === 'hr' ? '/dashboard/asset-list' : '/dashboard/request-asset', { replace: true })
                console.log(result?.user)
                localStorage.setItem('lastLoggedInEmail', data.email)
                stopLoading()
                toast.success('Logged in successfully')
            })
            .catch(error => {
                console.log(error)
                stopLoading()
                toast.error(
                    <span>Email doesn't exist. Try <button className='underline cursor-pointer' onClick={handleGoogleLogin}>Google Login</button></span>
                )
            })
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result?.user)

                localStorage.setItem('lastLoggedInEmail', result?.user?.email)

                if (!role) {

                    const user = { email: result?.user?.email, name: result?.user?.displayName, profileImage: result?.user?.photoURL, role: 'employee', createdAt: new Date(), updatedAt: new Date() };

                    axiosInstance.post('/users', user)
                        .then(result => {
                            console.log(result?.data)
                            navigate('/dashboard/request-asset', { replace: true })
                            toast.success("Logged in successfully")
                        })
                        .catch(error => {
                            console.log(error)
                            toast.success("Logged in successfully")
                        })
                }
                else {
                    navigate(role === 'hr' ? '/dashboard/asset-list' : '/dashboard/request-asset', {
                        replace: true
                    })
                    toast.success("Logged in successfully")
                }
            })
            .catch(error => {
                console.log(error)
                toast.error("Failed to log in")
            })
    }

    const savedEmail = localStorage.getItem('lastLoggedInEmail') || 'demo@assetverse.com';

    const currentEmail = watch('email');

    const handleAutoFill = () => {

        setValue('email', savedEmail, { shouldValidate: true });
        setValue('password', '', { shouldValidate: true });
        toast.success('Successfully auto-filled'); // optional feedback
    };

    if (loader) return <Loader></Loader>

    return (
        <div>
            <div className="hero px-4">
                <div className="hero-content gap-6 flex-col p-0">
                    <div className=''>
                        <h1 className='text-3xl font-semibold text-gray-800 tracking-tight text-center mb-6'>Log in to your account</h1>

                        <span className='flex items-center justify-center px-6'>
                            <button
                                type="button"
                                className={`btn bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg w-full shadow-none font-semibold border-[#e5e5e5] ${savedEmail == currentEmail && 'opacity-70 cursor-not-allowed'}`}
                                onClick={handleAutoFill}
                                disabled={savedEmail === currentEmail}
                            >
                                {savedEmail == currentEmail ? 'Email auto-filled' : 'Auto-fill email'}
                            </button>
                        </span>

                    </div>
                    <div className="card bg-base-100 w-full max-w-full shrink-0 border border-gray-300">
                        <div className="card-body">
                            <form className="fieldset" onSubmit={handleSubmit(handleLogin)}>
                                <label className="label">Email</label>
                                <input type="email" className="input mb-3 rounded-lg" placeholder="Email" {...register('email', { required: true })} />
                                <label className="label">Password</label>
                                <input type="password" className="input rounded-lg" placeholder="Password" {...register('password', { required: true })} />
                                {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                                {Object.values(errors).some(err => err.type === 'required') && <p className='text-red-500 mt-2'>All
                                    fields are required.</p>}
                                <button className="btn bg-blue-500 mt-4 text-white hover:bg-blue-400 rounded-lg">Login</button>

                                <div className="flex items-center gap-3 my-4.5">
                                    <hr className="flex-1" />
                                    <span className="text-sm text-gray-400">OR</span>
                                    <hr className="flex-1" />
                                </div>

                                <button type="button" className="btn bg-white text-black border-[#e5e5e5] hover:bg-gray-100 transition shadow-none rounded-lg flex items-center google-login-btn" onClick={handleGoogleLogin}>
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    <span>Continue with Google</span>
                                </button>

                                <span className='text-center font-medium mt-2 text-[14px]'>Don't have an account?
                                    <span className='mt-2 block'>Register as a <NavLink to='/registration/hr-manager' className='hover:text-blue-500'>HR</NavLink> or an <NavLink to='/registration/employee' className='hover:text-blue-500'>employee</NavLink></span>
                                </span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;