import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTiktok } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

function footer() {
    return (
        <div className="footer bottom-0 bg-light-brown" >

            <div className="w-full max-w-screen-xl mx-auto p-5 pt-20 pb-10 text-center items-center align-middle grid justify-center">


                        <Link className='justify-center flex mb-5' href="/"><Image src="/flavor-bakery-logo-circle.png" width={180} height={100} alt='' /></Link>
                        <h2 className='text-3xl font-semibold'>Flavor Bakery Nepal</h2>
                        <p className='my-5 text-m c-light-yellow w-1/2 m-auto'>The Flavor Bakery is a pastry shop as well as cafe established in 2021 to bring the bona fide taste of bakery and coffee items to Ghorahi, Dang.</p>
                        <h2 className='text-md font-medium pb-5 uppercase'>Follow Us</h2>

                        <div className="social-icon flex row gap-5 dark:text-white  justify-center">
                            <a className="p-4 bg-yellow rounded-full c-light-yellow" href="https://www.facebook.com/flavorbakerynepal/" target='blank'><FaFacebookF /></a>
                            <a className="p-4 bg-yellow rounded-full c-light-yellow" href="https://www.instagram.com/flavorbakerynepal/" target='blank'><FaInstagram /></a>
                            <a className="p-4 bg-yellow rounded-full c-light-yellow" href="https://www.tiktok.com/@flavorbakerynepal" target='blank'><FaTiktok /></a>
                            <a className="p-4 bg-yellow rounded-full c-light-yellow" href="mailto:flavorbakerynepal@gmail.com" target='blank'><IoMdMailOpen /></a>
                        </div>

                     

                  


            </div>
            <div className="payment bg-medium-brown w-full p-6 text-center items-center align-middle grid justify-center gap-5">
                            <h4>We Accept</h4>  
                        <Image src="/flavor-Payments.png" width={650} height={100} alt='' />
                        </div>

            <div className="copywrite p-5 text-sm text-center bg-dark-brown c-light-yellow" >
                Copyright © 2024, Flavor Bakery Nepal. Designed by <a target="_blank" href="https://subarnabhandari.com/">Subarna.</a>
            </div>

        </div>

    )
}

export default footer