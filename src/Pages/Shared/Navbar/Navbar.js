import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const menUItems = <React.Fragment>
        <div className="form-control">
            <label className="cursor-pointer label">
                <input type="checkbox" className="toggle toggle-primary" checked />
            </label>
        </div>
        <li><Link className='font-semibold' to='/'>Home</Link></li>
        <li><Link className='font-semibold' to='/appointment'>Appointment</Link></li>
        <li><Link className='font-semibold' to='/about'>About</Link></li>
        <li><Link className='font-semibold' to='/contact'>Contact Us</Link></li>
        {user?.uid ?
            <>
                <li><Link className='font-semibold' to='/dashboard'>DashBoard</Link></li>
                <li><button onClick={handleLogOut} className='font-semibold'>Sign Out</button></li>
            </>
            : <li><Link className='font-semibold' to='/login'>Log In</Link></li>
        }
    </React.Fragment>

    return (
        <div className="navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={1} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menUItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menUItems}
                </ul>
            </div>
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <label htmlFor="dashboard-drawer" className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;