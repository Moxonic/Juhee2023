import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import {BsInstagram} from 'react-icons/bs'




const Contact = () => {
    return (
        <section id="contact " className=' relative bg-slate-200'>
            <div className="p-4 flex items-center place-content-evenly h-fit">
                
                <div>
                    <a href="mailto:wienjh1995@gmail.com" >
                        <HiOutlineMail className="m-auto h-8 w-8" />
                    </a>
                  
                </div>
                <div>
                    <a href="https://www.instagram.com/juheemanonkang/" target="_blank" rel="noreferrer">
                        <BsInstagram className=" m-auto h-6 w-8"/>
                    </a>
                 
                </div>
            </div> 
        </section>
    );
};

export default Contact