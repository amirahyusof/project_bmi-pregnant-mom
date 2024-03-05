import React from "react";

function Input(){
    return(
        <div className="w-full mx-auto bg-[#AC87C5] text-center py-12 px-4 my-16">
            <h1 className="text-4xl font-bold mb-2">Pregnancy BMI Calculator</h1>
            <p className="px-4">Welcome to our Pregnancy BMI Calculator app! Easily track your BMI and ideal weight during pregnancy. 
               Get expert tips for a healthy journey. Remember, consult your healthcare provider for personalized advice
            </p>
            <div>
                <h2 className="mt-12 font-bold text-2xl">BMI Calculator</h2>
                <div className="px-60 py-2 flex flex-col gap-4">
                    <h3 className="mt-6 font-medium">Your height</h3>
                    <input className="p-3 lg:w-full rounded-md border-solid border-2 text-black" type="number" name="Centimeters" placeholder="Centimeter" />
                    <input className="p-3 lg:w-full rounded-md border-solid border-2 text-black" type="number" name="Feets" placeholder="Feet" />
                </div>
                <div className=" px-60 py-2 flex flex-col gap-4">
                    <h3 className="mt-6 font-medium">Your Pre-pregnancy weight</h3>
                    <input className="p-3 lg:w-full rounded-md border-solid border-2 text-black" type="number" name="Kilograms" placeholder="Kilogram" />
                    <input className="p-3 lg:w-full rounded-md border-solid border-2 text-black" type="number" name="Pounds" placeholder="Pound" />
                </div>
                <div className="px-60 py-2 flex flex-col gap-4">
                    <h3 className="mt-6 font-medium">Your weight right now</h3>
                    <input className="p-3 lg:w-full rounded-md border-solid border-2 text-black" type="number" name="Kilograms" placeholder="Kilogram" />
                    <input className="p-3 lg:w-full rounded-md border-solid border-2 text-black" type="number" name="Pounds" placeholder="Pound" />
                </div>

                <button className="w-[150px] bg-[#756AB6] rounded-md text-xl mx-auto py-3 mt-4 border-2 shadow-md hover:bg-[#FFE5E5] hover:text-black">Calculate</button>
            </div>
        </div>
    )
}


export default Input;