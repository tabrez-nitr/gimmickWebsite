"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

import image1 from '../assets/page3/image1.webp'
import image2 from '../assets/page3/image2.jpg'
import image3 from '../assets/page3/image3.webp'
import image4 from '../assets/page3/image4.jpg'
import image5 from '../assets/page3/image5.avif'
import image6 from '../assets/page3/image6.webp'
import image7 from '../assets/page3/image7.png'
import image8 from '../assets/page3/image8.avif'
import image9 from '../assets/page3/image9.png'
import image10 from '../assets/page3/image10.png'
import image11 from '../assets/page3/image11.png'
import image12 from '../assets/page3/image12.png'
import image13 from '../assets/page3/image13.png'
import image14 from '../assets/page3/image14.webp'
import image15 from '../assets/page3/image15.webp'
import image16 from '../assets/page3/image16.webp'

const elem = [
   { index: 31, image: image1 },
   { index: 32, image: image2 },
   { index: 33, image: image3 },
   { index: 34, image: image4 },
   { index: 35, image: image5 },
   { index: 36, image: image6 },
   { index: 37, image: image7 },
   { index: 38, image: image8 },
   { index: 39, image: image9 },
   { index: 40, image: image10 },
   { index: 41, image: image11 },
   { index: 42, image: image12 },
   { index: 43, image: image13 },
   { index: 44, image: image14 },
   { index: 45, image: image15 },
   { index: 46, image: image16 },
]

function PageThree() {
  return (
    <div className='mt-5 md:p-7'>

      {/* Heading */}
      <motion.h1 
        className="text-4xl md:text-5xl text-center font-extrabold 
        bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text text-transparent 
        drop-shadow-[0_2px_8px_rgba(255,105,180,0.5)] tracking-wide py-5"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        🚀 Grow Your Instagram Followers Fast 
      </motion.h1>

      {/* Grid of Images */}
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-10 p-3'>
        {elem.map((el, i)=>(
          <motion.div 
            key={el.index} 
            className='border-1 rounded-2xl'
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <Image
              src={el.image}
              alt='My Picture'
              width={500}
              height={300}
              className='rounded-2xl'
            />
          </motion.div>
        ))}
      </div>

      {/* Button */}
      <motion.div 
        className='md:flex md:justify-center md:mt-10'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
             <motion.div
               className='md:flex md:justify-center'
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               viewport={{ once: true }}
             >
                 <a href="https://superprofile.bio/vp/reels-master-bundle-100k-intellexa" target='_blank'>
              <button 
      className="mt-5 mx-5 p-5 border rounded-2xl text-xl font-bold 
      bg-gradient-to-r from-red-500 via-[#FF7D29] to-orange-600 
      text-white shadow-lg hover:scale-105 transition-transform duration-300 heartbeat"
    >
      Buy Now Just ₹147/- <s className="ml-2">₹3,599/-</s> Limited Time Offer Price
    </button>
    </a>
             </motion.div>
      </motion.div>

    </div>
  )
}

export default PageThree