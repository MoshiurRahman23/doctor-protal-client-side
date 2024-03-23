import React from 'react';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-secondary font-bold text-center">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div className="card-actions justify-center">
                    <button disabled={slots.length === 0}
                        className="btn btn-primary text-white"
                        onClick={() => setTreatment(option)}
                    >Booking Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;

// document.getElementById('booking-modal').showModal()
