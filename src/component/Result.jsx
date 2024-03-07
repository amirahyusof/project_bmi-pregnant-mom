import React from "react";

function Result(){
    return(
        <div className="w-full mx-auto bg-[#AC87C5] text-center py-12 px-4 my-16 lg:w-[850px] lg:mx-auto">
            <h2 className="mt-8 font-bold text-2xl mb-12">BMI Calculator</h2>
            <div className="box-content border w-[500px] mx-auto py-10">
                <h2 className="font-medium text-xl mb-4">Your BMI is 18.0</h2>
                <p className="w-[400px] mx-auto text-justify">
                This means that your pre-pregnancy weight was in the ‘underweight’ range. 
                Don't worry too much though as most people who have a low BMI in pregnancy are fine and have healthy pregnancies and babies.
                But you may be referred for extra scans to check on your baby's growth and development. 
                Your midwife or specialist will talk to you about what your target weight gain in pregnancy should be.
                </p>
            </div>
            <button className="w-[180px] bg-[#756AB6] rounded-md text-xl mx-auto py-3 mt-4 border-2 shadow-md hover:bg-[#FFE5E5] hover:text-black">Reset calculation</button>
        </div>
    )
}

export default Result;