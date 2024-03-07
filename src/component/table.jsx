import React from "react";

function Table(){
    return(
        <div className="bg-[#756AB6] py-20 lg:w-[850px] lg:mx-auto" id="category">
            <h1 className="text-2xl text-center mb-4">BMI Categories and Health Implications During Pregnancy</h1>
            <table className="table-fixed mx-auto">
                <tr>
                    <th className="border border-slate-100 w-[100px] md:w-[120px] ">BMI Category</th>
                    <th className="border border-slate-100 w-[100px] md:w-[130px] ">BMI Range</th>
                    <th className="border border-slate-100 w-[350px] md:w-[450px] ">Health Implications</th>
                </tr>

                <tr>
                    <td className="border border-slate-100 px-2">Underweight</td>
                    <td className="border border-slate-100 text-center">under 18.5 <br /> or under</td>
                    <td className="border border-slate-100">
                        <li className="px-4">Possible advice to gain more weight during pregnancy.</li>
                        <li className="px-4">Referral to the hospital antenatal clinic for extra scans to check on baby's growth.</li>
                        <li className="px-4">Referral to a dietitian to support healthy weight gain.</li>
                        <li className="px-4">Discussion with midwife or specialist to determine target weight gain based on pre-pregnancy weight.</li>
                        <li className="px-4">Consideration of medical reasons for low BMI, such as an overactive thyroid, and appropriate actions.</li>
                    </td>
                </tr>

                <tr>
                    <td className="border border-slate-100 px-2">Healthy Weight</td>
                    <td className="border border-slate-100 text-center">18.5-24.9</td>
                    <td className="border border-slate-100">
                        <li className="px-4">Generally considered a healthy range</li>
                    </td>
                </tr>

                <tr className="border border-slate-100">
                    <td className="border border-slate-100 px-2">Overweight</td>
                    <td className="border border-slate-100 text-center">25-29.9</td>
                    <td className="border border-slate-100">
                        <li className="px-4">Increased risk of complications</li>
                        <li className="px-4">Risks include high blood pressure, pre-eclampsia, thrombosis, and gestational diabetes.</li>
                        <li className="px-4">Extra care throughout pregnancy to minimize risks.</li>
                    </td>
                </tr>
                    
                <tr className="border border-slate-100">
                    <td className="border border-slate-100 px-2">Obese</td>
                    <td className="border border-slate-100 text-center">30-39.9</td>
                    <td className="border border-slate-100">
                        <li className="px-4">Higher risk of conditions like high blood pressure, pre-eclampsia, thrombosis, and gestational diabetes</li>
                        <li className="px-4">Referral to a dietitian for assessment and advice on healthy eating and exercise.</li>
                        <li className="px-4">Extra ultrasound scans, blood pressure tests, gestational diabetes tests, and risk assessments for thrombosis.</li>
                        <li className="px-4" >Possible injections of low molecular weight heparin to reduce the risk of blood clots.</li>
                    </td>
                </tr>

                <tr className="border border-slate-100">
                    <td className="border border-slate-100 px-2">Severely Obese</td>
                    <td className="border border-slate-100 text-center">≥ 40</td>
                    <td className="border border-slate-100">
                        <li className="px-4">Higher risk of complications during labor or birth, including a longer labor, premature birth, emergency caesarean birth, and more challenging caesarean operations.</li>
                        <li className="px-4">Discussion with obstetrician and/or midwife about the safest way and place to give birth.</li>
                        <li className="px-4">Referral to an anesthetist to discuss pain relief during labor.</li>
                    </td>
                </tr>
                
            </table>

        </div>
    )
}

export default Table;