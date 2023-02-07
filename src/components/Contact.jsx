import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import {BsInstagram} from 'react-icons/bs'




const Contact = () => {
    return (
        <section id="contact " className='h-screen relative bg-slate-200'>
            <div className=" flex items-center place-content-evenly h-screen">
                <div >
                        <a href="mailto:wienjh1995@gmail.com" >
                            <HiOutlineMail class="h-24 w-24" />
                        </a>
                </div>
                <div>
                        <a href="https://www.instagram.com/juheemanonkang/" target="_blank" rel="noreferrer">
                            <BsInstagram class="h-24 w-24 p-3 contactSymbol"/>
                        </a>
                </div>
            </div> 
        </section>
    );
};

export default Contact