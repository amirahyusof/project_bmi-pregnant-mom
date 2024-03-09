import React from "react";

function Display(){
    const [calc, setCalc] = React.useState(false)

    const handleCalc= () => {
        setCalc(!calc)
    }


    return(
        <div className="w-full mx-auto bg-[#AC87C5] text-center py-12 px-4 my-16 lg:w-[850px] lg:mx-auto" id="calculator">
            <h1 className="text-4xl font-bold mb-2 mt-4">Pregnancy BMI Calculator</h1>
            <p className="px-4">Welcome to our Pregnancy BMI Calculator app! Easily track your BMI and ideal weight during pregnancy. 
               Get expert tips for a healthy journey. Remember, consult your healthcare provider for personalized advice
            </p>
            <div>
                <h2 className="mt-12 font-bold text-2xl">BMI Calculator</h2>
                <div className="px-40 md:px-60 py-2 flex flex-col gap-4">
                    <h3 className="mt-6 font-medium">Your height</h3>
                    <input className="p-3 lg:w-full rounded-md border-solid border-2 text-black" type="number" name="Centimeters" placeholder="Centimeter" />
                    <input className="p-3 lg:w-full rounded-md border-solid border-2 text-black" type="number" name="Feets" placeholder="Feet" />
                </div>
                <div className=" px-40 md:px-60 py-2 flex flex-col gap-4">
                    <h3 className="mt-6 font-medium">Your Pre-pregnancy weight</h3>
                    <input className="p-3 lg:w-full rounded-md border-solid border-2 text-black" type="number" name="Kilograms" placeholder="Kilogram" />
                    <input className="p-3 lg:w-full rounded-md border-solid border-2 text-black" type="number" name="Pounds" placeholder="Pound" />
                </div>
                <div className="px-40 md:px-60 py-2 flex flex-col gap-4">
                    <h3 className="mt-6 font-medium">Your weight right now</h3>
                    <input className="p-3 lg:w-full rounded-md border-solid border-2 text-black" type="number" name="Kilograms" placeholder="Kilogram" />
                    <input className="p-3 lg:w-full rounded-md border-solid border-2 text-black" type="number" name="Pounds" placeholder="Pound" />
                </div>

                <button className="w-[200px] bg-[#756AB6] rounded-md text-xl mx-auto py-3 mt-4 border-2 shadow-md hover:bg-[#FFE5E5] hover:text-black" onClick={handleCalc}>
                    {calc ? "Reset Calculation" : "Calculate"}
                </button>

                 { calc? <Output/> : null}

            </div>

        </div>
    )
}

function Output(){
    return(
        <div className="w-full mx-auto bg-[#FFE5E5] text-center py-10 px-4 my-4 lg:w-[850px] lg:mx-auto text-blue-950">
            <div className="box-content border border-slate-950 w-[400px] md:w-[550px] mx-auto py-10">
                <h2 className="font-medium text-xl mb-4">Your BMI is 18.0</h2>
                <p className="w-[300px] md:w-[400px] mx-auto text-justify">
                This means that your pre-pregnancy weight was in the ‘underweight’ range. 
                Don't worry too much though as most people who have a low BMI in pregnancy are fine and have healthy pregnancies and babies.
                But you may be referred for extra scans to check on your baby's growth and development. 
                Your midwife or specialist will talk to you about what your target weight gain in pregnancy should be.
                </p>
            </div>
        </div>
    )
}


export default Display;