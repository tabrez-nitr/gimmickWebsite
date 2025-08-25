"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

import Image1 from '@/assets/page5/Page5Image1.jpg'
import Image2 from '@/assets/page5/Page5Image2.jpg'
import Image3 from '@/assets/page5/Page5Image3.webp'
import Image4 from '@/assets/page5/Page5Image4.jpg'
import Image5 from '@/assets/page5/Page5Image5.jpg'
import Image6 from '@/assets/page5/Page5Image6.jpg'

import icon1 from "@/assets/page5/icon1.png"
import icon2 from "@/assets/page5/icon2.png"
import icon3 from "@/assets/page5/icon3.png"
import icon4 from "@/assets/page5/icon4.png"

const icons = [
  { index: 510, image: icon1 },
  { index: 511, image: icon2 },
  { index: 512, image: icon3 },
  { index: 513, image: icon4 },
]

const reviews = [
  { index: 501, image: Image1 },
  { index: 502, image: Image2 },
  { index: 503, image: Image3 },
  { index: 504, image: Image4 },
  { index: 505, image: Image5 },
  { index: 506, image: Image6 },
]

function Page5() {
  return (
    <div className='mt-10 md:p-12'>
      
      {/* Heading */}
      <motion.h1
        className='p-4 text-center text-xl font-bold'
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        CHECK THIS TYPE REELS CAN GROW YOUR THEME PAGE QUICKLY <i className="ri-arrow-down-fill"></i>
      </motion.h1>

      {/* Reviews Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-7 p-2'>
        {reviews.map((elem, i) => (
          <motion.div
            key={elem.index}
            className="border border-gray-200 rounded-2xl bg-white/70 p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={elem.image}
              alt='My Picture'
              width={500}
              height={300}
              className='rounded-2xl'
            />
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className='p-4'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className='text-xl text-center font-bold bg-red-500 text-white px-5 py-2 rounded-2xl'>
          Become A Viral Content Creator Today !
        </div>
      </motion.div>

      {/* Trusted Section */}
      <motion.div
        className='p-2 mt-4'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className='text-center font-bold text-2xl border-r-1 border-l-1 rounded'>
          100% Genuine & Trusted
        </h2>
      </motion.div>

      {/* Icons Grid */}
      <div className='grid grid-cols-2 gap-3 p-2'>
        {icons.map((elem, i) => (
          <motion.div
            key={elem.index}
            className="rounded-2xl p-6 bg-white/20 backdrop-blur-md border border-white/30 shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <Image
              src={elem.image}
              alt='My Picture'
              width={500}
              height={300}
              className='rounded-2xl'
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Page5