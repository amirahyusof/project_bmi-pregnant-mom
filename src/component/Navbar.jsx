import React from "react";

function Navbar(){
    return(
        <div className="w-full fixed  top-0 lg:w-[850px] lg:mx-auto">
            <div className="mx-auto flex items-center justify-center mt-2 border border-slate-200 w-[400px] rounded-xl bg-[#E0AED0]">
            <ul className="flex flex-row">
                <li className="p-2 text-xl">
                    <a href="#calculator">Calculator</a>
                </li>
                <li className="p-2 text-xl">
                    <a href="#category">Categories</a>
                </li>
                <li className="p-2 text-xl">
                    <a href="#info">Info</a>
                </li>
                <li className="p-2 text-xl">
                    <a href="#help">Help</a>
                </li>
            </ul>
            </div>

        </div>
    )
}

export default Navbar;