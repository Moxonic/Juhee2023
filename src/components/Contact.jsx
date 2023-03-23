import React, { startTransition } from 'react'
/* import { HiOutlineMail } from "react-icons/hi";
import {BsInstagram} from 'react-icons/bs' */
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import Staatsoper from "../assets/Staatsoper.jpg";

const Contact = () => {
    return (
        <section id="contact " className=' h-fit flex flex-col justify-center relative bg-gradient-to-b from-slate-50 via-slate-200 to-slate-50'>
            <div className="p-3 flex flex-col max-w-5xl py-32 lg:px-64  place-content-center mx-5 bg-slate-50">
                 <h1 className='text-center text-slate-700 mx-auto m-8 max-w-md'>
                If you're interested in collaborating or booking, 
                feel free to write me an email or follow me on Instagram. <br></br>
                I would love to hear from you. </h1>
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
            <div className="headerContainer overflow-clip relative h-36 flex">
				{/* Background image */}
				<img className='absolute bottom-0 overflow-auto w-screen h-auto self-center ' src={Staatsoper} alt="Background" />
				<div className="absolute bottom-0 bg-slate-50 opacity-80 h-full w-full z-10"></div>
			</div>
            
        
        </section>
    );
};

export default Contact