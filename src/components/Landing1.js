import React from 'react';

const Landing1 = () => {
  return (
    <div className="p-60 flex flex-wrap gap-8">
      {/* Text Column */}
      <div className="flex-1">
        <h1 className="text-5xl mb-8">
          What is <span className="font-bold text-blue ">PESO?</span>
        </h1>
        <h1 className="text-gray-700 text-3xl mt-2 font-bold mb-8">
            PUBLIC EMPLOYMENT SERVICE OFFICE
        </h1>
        <p className="mt-4 text-2xl leading-[2.5]">
  The Public Employment Service Office (PESO) is a non-fee charging multi-employment service facility or entity established or accredited pursuant to Republic Act No. 8759, otherwise known as the PESO Act of 1999.
  The PESO's are community-based and maintained largely by local government units (LGU's) and a number of non-governmental organizations (NGO's) or community-based organizations (CBO's) and state universities and colleges (SUC's).
</p>
      </div>

      {/* Image Column */}
      <div className="flex-1">
        <img
          src="../assets/login-main.jpg"
          alt="Caloocan City Mayor"
          className="rounded-md w-50 h-50 object-cover"
        />
      </div>
    </div>
  );
};

export default Landing1;