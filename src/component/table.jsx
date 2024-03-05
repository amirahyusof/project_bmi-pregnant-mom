import React from "react";

function Table(){
    return(
        <div className="bg-[#756AB6]">
            <h1>BMI Categories and Health Implications During Pregnancy</h1>
            <table className="border-white">
                <tr>
                    <th>BMI Category</th>
                    <th>BMI Range</th>
                    <th>Health Implications</th>
                </tr>

                <tr>
                    <td>Underweight</td>
                    <td>under 18.5 or under</td>
                    <td>
                        <li>Possible advice to gain more weight during pregnancy.</li>
                        <li>Referral to the hospital antenatal clinic for extra scans to check on baby's growth.</li>
                        <li>Referral to a dietitian to support healthy weight gain.</li>
                        <li>Discussion with midwife or specialist to determine target weight gain based on pre-pregnancy weight.</li>
                        <li>Consideration of medical reasons for low BMI, such as an overactive thyroid, and appropriate actions.</li>
                    </td>
                </tr>

                <tr>
                    <td>Healthy Weight</td>
                    <td>18.5-24.9</td>
                    <td>
                        <li>Generally considered a healthy range</li>
                    </td>
                </tr>

                <tr>
                    <td>Overweight</td>
                    <td>25-29.9</td>
                    <td>
                        <li>Increased risk of complications</li>
                        <li>Risks include high blood pressure, pre-eclampsia, thrombosis, and gestational diabetes.</li>
                        <li>Extra care throughout pregnancy to minimize risks.</li>
                    </td>
                </tr>
                    
                <tr>
                    <td>Obese</td>
                    <td>30-39.9</td>
                    <td>
                        <li>Higher risk of conditions like high blood pressure, pre-eclampsia, thrombosis, and gestational diabetes</li>
                        <li>Referral to a dietitian for assessment and advice on healthy eating and exercise.</li>
                        <li>Extra ultrasound scans, blood pressure tests, gestational diabetes tests, and risk assessments for thrombosis.</li>
                        <li>Possible injections of low molecular weight heparin to reduce the risk of blood clots.</li>
                    </td>
                </tr>

                <tr>
                    <td>Severely Obese</td>
                    <td>≥ 40</td>
                    <td>
                        <li>Higher risk of complications during labor or birth, including a longer labor, premature birth, emergency caesarean birth, and more challenging caesarean operations.</li>
                        <li>Discussion with obstetrician and/or midwife about the safest way and place to give birth.</li>
                        <li>Referral to an anesthetist to discuss pain relief during labor.</li>
                    </td>
                </tr>
                
            </table>

        </div>
    )
}

export default Table;