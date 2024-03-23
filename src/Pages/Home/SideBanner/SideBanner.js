import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';

const SideBanner = () => {
    return (
        <div className="hero">
            <div className="mt-16 hero-content flex-col lg:flex-row">
                <img src={treatment} alt='treatment' className="max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:w-1/2 md:w-full sm:w-full lg:px-8 md:px-0 sm:px-0'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="lg:py-8 md:py-0 sm:py-0">It is a long established fact
                        that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsumis that
                        it has a more-or-less normal distribution of letters,as opposed
                        to using 'Content here, content here', making it look like readable
                        English. Many desktop publishing packages and web page.
                    </p>
                    <PrimaryButton>get start</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default SideBanner;