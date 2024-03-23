import React from 'react';

const Review = ({ review }) => {
    const { name, location, peopleReview, img } = review;
    return (
        <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
                <p>{peopleReview}</p>
                <div className='flex items-center mt-2'>
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={img} alt='People img' />
                        </div>
                    </div>
                    <div className=''>
                        <h5 className="text-xl">{name}</h5>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;