import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import googleIcon from '../../assets/icons/Group 573.png';
import useToken from '../../hools/useTolen';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser, googleLogIn } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');
    const [token] = useToken(createdUserEmail);
    const navigate = useNavigate();

    if (token) {
        navigate('/');
    }

    const handleSignUp = (data) => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSignUpError('');
                toast('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email);
                    })
                    .catch(errors => console.error(errors))
            })
            .catch(errors => {
                console.log(errors)
                setSignUpError(errors.message)
            });
    }
    const handleWithGoogleLogIn = (data) => {
        googleLogIn(data.auth, data.provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.log(error));
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreatedUserEmail(email);
            })
    }


    return (
        <div className='h-[800px] flex  justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-4xl text-center'>Sign Up</h1>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type='text' {...register("name",
                            {
                                required: 'Name is Required'
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type='email' {...register("email",
                            {
                                required: 'Email is Required'
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type='password' {...register("password",
                            {
                                required: 'Password is Required',
                                minLength: { value: 6, message: 'Password minimum 6 to 10 char length' },
                                pattern: { value: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{6,10}$/, message: 'Password must be upper case ,lower case ,number and spacial character' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                        <label className="label"><span className="label-text">Forget Password ?</span></label>
                    </div>
                    <input className='btn btn-accent w-full' value='Sign Up' type="submit" />
                    {signUpError && <p className='text-red-500' >{signUpError}</p>}
                </form>
                <p>New to doctors Portal <Link className='text-primary' to='/login'>Please Log In</Link> </p>
                <div className="divider">OR</div>
                <button onClick={handleWithGoogleLogIn} className='btn btn-outline w-full'>
                    <img src={googleIcon} className='h-5 w-7' alt="" />
                    CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;