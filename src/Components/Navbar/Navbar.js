'use client'

import { adminNavOptions } from "@/Utils";
import { Fragment } from "react";

const isAdminView = true;
const isAuthUser = false;
const user ={
    role: 'admin'
}

function NavItems(){
    return(
        <div className="items-center justify-between w-full md:flex md:w-auto id='nav-items ">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white">
{
    isAdminView ? adminNavOptions.map(item=> (<li className="cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0" key={item.id}>
{
    item.label
}
    
    
    </li>)) :null
}

            </ul>
        </div>
    )
}

export default function Navbar (){
    return(
        <>
        <nav className="fixed w-full z-50 top-0 left-0 border-b border-gray-800 bg-cyan-400 backdrop-blur-md">
            <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div className="flex items-center cursor-pointer">
                    <span className="slef-center text-2xl font-semibold whitespace-nowrap">
      <span className="text-black">Shop</span><span className="text-green-600">Next</span>
                    </span>

                </div>

                <div className="flex md:order-2 gap-2">
        {
            isAdminView && isAuthUser ?(
            <Fragment>
            <button className="text-black">
                Account
            </button>
            <button className="text-black">Cart</button>
        </Fragment>
        ) : null}
        {
            user ?.role=== 'admin'?
            isAdminView ? <button className="text-black">Client View</button> : <button className="text-black">Admin View</button>
            : null
        }
        {
            isAuthUser ? <button className="text-black">Logout</button> : <button className="text-black">Login</button>
        }

        

                </div>
                <NavItems/>
            </div>

        </nav>
        
        </>
    )
}