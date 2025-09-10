"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

import image1 from "@/assets/page6/Page6Image1.webp"
import image2 from "@/assets/page6/Page6Image2.webp"
import image3 from "@/assets/page6/Page6Image3.webp"
import image4 from "@/assets/page6/Page6Image4.jpg"
import image5 from "@/assets/page6/Page6Image5.png"
import image6 from "@/assets/page6/Page6Image6.png"
import image7 from "@/assets/page6/Page6Image7.png"
import image8 from "@/assets/page6/Page6Image8.png"
import payment from "@/assets/page6/Page6Payment.png"

const faq = [
  { index: 601, content: "50,000+ Editable Canva Template" },
  { index: 602, content: "The Complete Digital Marketing Course" },
  { index: 603, content: "10,000+ Kids Worksheet Bundle" },
  { index: 604, content: "5000+ Cartoon Video Bundle" },
  { index: 605, content: "YouTube Secret 2.0 Course" },
  { index: 606, content: "Instagram Growth Mastery Course" },
  { index: 607, content: "6000+ Instagram Post & Stories" },
  { index: 608, content: "17000+ Editable Viral Reels" },
]

const elem = [
  { index: 61, title: 1, imgage: image1 },
  { index: 62, title: 2, imgage: image2 },
  { index: 63, title: 3, imgage: image3 },
  { index: 64, title: 4, imgage: image4 },
  { index: 65, title: 5, imgage: image5 },
  { index: 66, title: 6, imgage: image6 },
  { index: 67, title: 7, imgage: image7 },
  { index: 68, title: 8, imgage: image8 },
]

function Page6() {
  return (
    <div className='mt-6 md:p-10'>

      {/* Heading */}
      <motion.h1
        className='text-2xl text-center font-bold p-2'
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        WE&apos;VE DONE ALL HARD WORK FOR YOU
      </motion.h1>

      <motion.p
        className='mt-5 text-2xl font-bold text-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Just Buy, Download, Upload on Your Social Media and Boost Your Social Media by 
        <span className='text-red-500'> 10 Times. Grab it Now!!</span>
      </motion.p>

      {/* CTA Button */}
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

      {/* Info */}
      <p className='mt-4 text-center font-bold'>
        Even those people who have good reels content & social media growth, faced a lot of problems while creating reels for their Social Media pages in beginning and spent years and lacs of rupees creating good reels. So instead of wasting time learning on your own & money on hiring expensive editors...
      </p>

      <motion.p
        className='mt-4 text-2xl text-center font-bold border-t-1 border-b-1 py-2'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        ⏱️ Limited time offer! Hit The Button & Grab It Now !!! ⏱️
      </motion.p>

      {/* Bonuses */}
      <div className='flex justify-center px-2'>
     <div className="w-full  max-w-2xl mx-auto mt-8 mb-8 relative z-10">
  <div 
    className="
      relative rounded-3xl px-8 py-2 md:p-10 text-center 
      overflow-hidden 
      bg-gradient-to-br from-purple-900 to-indigo-900 
      border-2 border-purple-600 
      shadow-2xl shadow-purple-800/60
      transform hover:scale-103 transition-transform duration-300 ease-in-out
    "
    style={{ 
      backgroundImage: 'radial-gradient(circle at top left, rgba(147,51,234,0.3) 0%, transparent 50%), radial-gradient(circle at bottom right, rgba(236,72,153,0.3) 0%, transparent 50%), linear-gradient(135deg, #4c1d95 0%, #1e1b4b 100%)' 
    }}
  >
    {/* Background glowing particles/stars (conceptual, could be achieved with pseudo-elements or actual SVGs) */}
    <div className="absolute inset-0 z-0 opacity-20">
      {/* Imagine subtle, animated stardust or star twinkles here */}
      <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white rounded-full blur-sm animate-pulse-fast"></div>
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-white rounded-full blur-xs animate-pulse-slow delay-200"></div>
      <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-white rounded-full blur-md animate-pulse-fast delay-400"></div>
      <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white rounded-full blur-sm animate-pulse-slow delay-600"></div>
    </div>

    <div className="relative z-10">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 
        bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 
        bg-clip-text text-transparent 
        drop-shadow-lg 
        animate-pulse-light
      ">
        ✨ Star Bonus ✨
      </h2>
      
      <p className="text-white text-lg md:text-xl mb-3 leading-relaxed max-w-lg mx-auto">
        Get an <span className="font-semibold text-purple-200">exclusive, ready-to-use n8n template</span> that automates posting to all your social media handles. <span className="font-bold text-pink-300">100% autopilot.</span>
      </p>

      <a 
        href="#" /* Replace with your actual link */
        className="
          inline-flex items-center justify-center 
          px-8 py-2 mt-6 
          text-xl font-bold text-white 
          bg-gradient-to-r from-rose-500 to-red-600 
          rounded-full shadow-lg 
          transform hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out
          ring-2 ring-red-300 ring-offset-2 ring-offset-purple-900
          animate-bounce-slow
        "
      >
        🚀 Yours FREE with the Reels Bundle! <span className="ml-3 text-2xl">👇</span>
      </a>
    </div>
  </div>
</div>
      </div>
      <div className='grid grid-cols-2 gap-4 md:gap-10 md:grid-cols-3 p-2 mt-9'>
        {elem.map((el, i) => (
          <motion.div
            key={el.index}
            className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg p-4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className='text-xl text-center bg-red-500 text-white rounded-lg py-1 mb-2'>Bonus {el.title}</h2>
            <Image
              src={el.imgage}
              alt='Bonus Image'
              width={500}
              height={300}
              className='rounded-2xl'
            />
          </motion.div>
        ))}
      </div>

      {/* CTA Button again */}
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

      {/* Values Section */}
      <motion.h2
        className='mt-10 text-2xl text-center font-bold'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        ✨ VALUES INSIDE THE BUNDLE ✨
      </motion.h2>

      {/* FAQ / Features */}
      <div className='p-3'>
        {faq.map((elem, i) => (
          <motion.div
            key={elem.index}
            className='mt-3 p-3 rounded-2xl bg-red-500 text-white shadow-md'
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className='flex gap-2 text-xl font-bold '>
              <i className="ri-arrow-right-circle-line text-yellow-300"></i>
              <p>{elem.content}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Payment */}
      <motion.div
        className="p-4 mt-5 md:mt-10 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 rounded-xl shadow-md md:flex md:justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <Image
          src={payment}
          alt='Payment Methods'
          width={500}
          height={300}
          className='rounded-2xl md:w-170'
        />
      </motion.div>

      <motion.p
        className='mt-5 text-center font-bold text-2xl'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        ⏰ Our Sales Offer Ends Today ⏰
      </motion.p>

    </div>
  )
}

export default Page6