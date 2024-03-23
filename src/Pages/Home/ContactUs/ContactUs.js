import React from 'react';
import BG from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <div className='grid mt-16 gap-3 bg-current text-center' style={{ background: `url(${BG})` }} >
            <div className='text-center mt-16'>
                <p className='text-xl text-primary font-semibold'>Contact Us</p>
                <h5 className='text-2xl text-white'>Stay Connected With Us</h5>
            </div>
            <div className='grid justify-items-center mb-16'>
                <div className='grid gap-5 mt-5 mb-8 lg:w-1/2 md:w-full sm:w-full'>
                    <input type="text" placeholder="Your Address" className="input input-bordered w-full" />
                    <input type="text" placeholder="Your Email" className="input input-bordered w-full" />
                    <textarea className="textarea textarea-bordered" placeholder="Your Message"></textarea>
                </div>
                <PrimaryButton> Submit </PrimaryButton>
            </div>
        </div>
    );
};

export default ContactUs;