import React from 'react'
/* import { HiOutlineMail } from "react-icons/hi";
import {BsInstagram} from 'react-icons/bs' */
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'





const Contact = () => {
    return (
        <section id="contact " className='snap-start flex top-34 relative h-screen bg-slate-200'>
            <div className="p-4 flex w-full justify-center self-center  place-content-center gap-12 h-12">
                
                <div>
                    <a href="mailto:wienjh1995@gmail.com" >
                        <AiOutlineMail className="m-auto h-8 w-8 text-slate-500 hover:text-fuchsia-400" />
                    </a>
                </div>
                <h1>Contact</h1>
                <div>
                    <a href="https://www.instagram.com/juheemanonkang/" target="_blank" rel="noreferrer">
                        <AiOutlineInstagram className=" m-auto h-8 w-8 text-slate-500 hover:text-fuchsia-400"/>
                    </a>
                </div>
            </div> 
        </section>
    );
};

export default Contact