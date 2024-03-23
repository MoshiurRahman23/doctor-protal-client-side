import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer" className="btn btn-primary  drawer-button">Contact Us</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to=''>Chief Executive Officer 01744451118</Link></li>
                    <li><Link to=''>Marketing Manager</Link></li>
                    <li><Link to=''>Research Teams</Link></li>
                    <li><Link to=''>Promoting  Team</Link></li>

                </ul>
            </div>
        </div>
    );
};

export default ContactUs;