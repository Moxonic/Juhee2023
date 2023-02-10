import React from 'react'
/* import { HiOutlineMail } from "react-icons/hi";
import {BsInstagram} from 'react-icons/bs' */
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'





const Contact = () => {
    return (
        <section id="contact " className=' relative bg-slate-200'>
            <div className="p-4 flex items-center place-content-center gap-12 h-fit">
                
                <div>
                    <a href="mailto:wienjh1995@gmail.com" >
                        <AiOutlineMail className="m-auto h-8 w-8" />
                    </a>
                </div>
                <h1>Contact</h1>
                <div>
                    <a href="https://www.instagram.com/juheemanonkang/" target="_blank" rel="noreferrer">
                        <AiOutlineInstagram className=" m-auto h-8 w-8"/>
                    </a>
                </div>
            </div> 
        </section>
    );
};

export default Contact