import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <h3 className="text-3xl font-semibold ms-10 mb-5">My Appointment</h3>
            <div className="overflow-x-auto">
                {bookings && Array.isArray(bookings) && (
                    <table className="table">
                        <thead className='bg-slate-100'>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Treatment</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((booking, i) =>
                                    <tr key={booking._id}>
                                        <th>{i + 1}</th>
                                        <td>{booking.name}</td>
                                        <td>{booking.treatment}</td>
                                        <td>{booking.appointmentDate}</td>
                                        <td>{booking.slot}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                )}

            </div>
        </div>
    );
};

export default MyAppointment;