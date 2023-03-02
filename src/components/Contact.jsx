import React, { startTransition } from 'react'
/* import { HiOutlineMail } from "react-icons/hi";
import {BsInstagram} from 'react-icons/bs' */
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'

const Contact = () => {
    return (
        <section id="contact " className='snap-start h-screen flex justify-center relative bg-gradient-to-b from-slate-50 via-slate-200 to-slate-50'>
            <div className="p-3 flex flex-col max-w-5xl lg:px-24  place-content-center mx-5 bg-slate-50">
                 <h1 className='text-center text-slate-700 mx-auto max-w-md'>
                If you're interested in collaborating or booking, 
                feel free to write me an email or follow me on Instagram. <br></br>
                I would love to hear from you. </h1>
                <div>
                <div className="contactlogos m-8 flex justify-center gap-12">
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