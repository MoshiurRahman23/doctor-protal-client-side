import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import Appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='' style={{ background: `url(${Appointment})` }}>
            <div className="hero mt-32">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} alt='doctor img' className="-mt-36 hidden lg:block md:block lg:w-1/2 rounded-lg shadow-2xl" />
                    <div>
                        <h3 className='text-primary text-xl font-semibold'>Appointment</h3>
                        <h1 className="text-3xl text-white font-bold">Make an Appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
                        <PrimaryButton>appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;