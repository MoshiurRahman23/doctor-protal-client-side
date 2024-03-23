import React, { useContext, useState } from 'react';
import googleIcon from '../../assets/icons/Group 573.png';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useToken from '../../hools/useTolen';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const { signIn, googleLogIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    if (token) {
        navigate(from, { replace: true });
    }

    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);

            })
            .catch(errors => {
                console.log(errors)
                setLoginError(errors.message);
            });
    }
    const handleGoogleLogIn = (data) => {
        googleLogIn(data.auth, data.provider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(err => { console.log(err) });
    }

    return (
        <div className='h-[800px] flex  justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-4xl text-center'>Login</h1>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="text" {...register("email",
                            { required: 'Email Address is Required' })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500' role='alert'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password" {...register("password",
                            {
                                required: 'Password is Required',
                                minLength: { value: 6, message: 'Password must be 6 char or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500' role='alert'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forget Password ?</span></label>
                    </div>
                    <input className='btn btn-accent w-full' value='Log In' type="submit" />
                    <div>
                        {loginError && <p className='text-red-500'>{loginError}</p>}
                    </div>
                </form>
                <p>New to doctors Portal <Link className='text-primary' to='/signup'>Create New Account</Link> </p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleLogIn} className='btn btn-outline w-full'>
                    <img src={googleIcon} className='h-5 w-7' alt="" />
                    CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;