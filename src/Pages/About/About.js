import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex justify-center">
                {/* Page content here */}
                <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">About Our Destination</label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link to='/' >Our Destination</Link></li>
                    <li><Link to='/' >Our Teams</Link></li>
                    <li><Link to='/' >Our Teams</Link></li>
                    <li><Link to='/' >Our Teams</Link></li>
                    <li><Link to='/' >Our Teams</Link></li>
                    <li><Link to='/' >Our Teams</Link></li>
                    <li><Link to='/' >Our Teams</Link></li>
                    <li><Link to='/' >Our Teams</Link></li>
                    <li><Link to='/' >Our Teams</Link></li>
                    <li><Link to='/' >Our Teams</Link></li>
                    <li><Link to='/' >Our Teams</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default About;