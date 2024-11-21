import React from 'react';

const About = () => {
  return (
    <div>
      <h1 className="text-blue text-6xl font-bold text-center">
        CITY GOVERNMENT OF CALOOCAN PUBLIC EMPLOYMENT SERVICE OFFICE (PESO)
      </h1>
      <div className="px-60 flex items-center justify-center gap-8">
        {/* Text Section */}

        <div className="w-1/2 p-4 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center h-full">

          </div>

          <div className="mt-8 text-center">
            <p className="font-semibold text-3xl">Mission</p>
            <p className="mt-2 text-xl">
              To facilitate equal employment opportunities to the province's constituents through Job Matching and Coaching, employability enhancement and referrals for livelihood or training, and promotion of industrial peace through tripartism.
            </p>

            <p className="font-semibold mt-8 text-3xl">Vision</p>
            <p className="mt-2 text-xl">
              Creating the Province of Bulacan as a Province that provides reliable and sustainable employment facilitation services that contribute to poverty alleviation and economic development in commitment and accordance with the People's Agenda 10.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-1/2 p-4 mt-5">
          <img
            src="../assets/logo.jpg"
            alt="PESO Image"
            className="w-10/12 h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
