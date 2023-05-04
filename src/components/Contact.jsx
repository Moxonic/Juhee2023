import React, { startTransition } from 'react'
/* import { HiOutlineMail } from "react-icons/hi";
import {BsInstagram} from 'react-icons/bs' */
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import Staatsoper from "../assets/Staatsoper.jpg";

const Contact = () => {
    return (
        <section id="contact " className=' h-auto relative p-5  lg:p-24 lg:flex  bg-gradient-to-b from-slate-50 via-slate-200 to-slate-50'>
            
                <div className=" flex flex-col m-auto self-center w-fit p-4 rounded-md drop-shadow-xl  place-content-center  bg-slate-50">
                    <h1 className='text-center text-slate-700 mx-auto m-8 max-w-md'>
                    Contact me for collaborations or bookings <br></br>, 
                    via email and follow me on Instagram. <br></br>
                     </h1>
                    <div>
                    <div className="contactlogos mb-8 flex justify-center gap-12">
                    <div>
                        <a href="mailto:wienjh1995@gmail.com" >
                            <AiOutlineMail className="m-auto h-8 w-8 text-slate-500 hover:text-fuchsia-400" />
                        </a>
                    </div>
                        <a href="https://www.instagram.com/juheemanonkang/" target="_blank" rel="noreferrer">
                            <AiOutlineInstagram className=" m-auto h-8 w-8 text-slate-500 hover:text-fuchsia-400"/>
                        </a>
                    </div>   
                    </div>
                </div> 

          
            
        
        </section>
    );
};

export default Contact