"use client"
import React from 'react'
import Image from 'next/image'
import Delivery from "../assets/Page2Delivery.png"
import HighQuality from "../assets/Page2HighQuality.png"
import Hindi from "../assets/Page2HindiReels.png"
import Infinite from "../assets/Page2Infinte.png"
import MP4 from "../assets/Page2MP4.png"
import Small from "../assets/Page2Small.png"
import trending from "../assets/Page2Trending.png"
import img100 from "../assets/Page2100.png"
import influencers from "../assets/Page2Infulencers .png"
import instagram from "../assets/Page2Insatgram.png"

import freelancer from "../assets/Page2Freelance.png"
import contentCreators from "../assets/Page2Customer.png"
import socialmedia from "../assets/Page2Social.png"
import motivationalPage from "../assets/Page2Motivational.png"
import { motion } from "framer-motion";

const about = [
  {
    index: 201,
    title: "Instagram Page Admin",
    caption: "Admin who wants to grow Instagram accounts and reach new accounts every day. By AI Islamic Reels Bundle",
    image: instagram,
  },
  {
    index: 202,
    title: "Influencers",
    caption: "Instagram influencers who want to influence and motivate their followers daily basis.",
    image: influencers,
  },
  {
    index: 203,
    title: "Freelancers",
    caption: "Freelancers who want to reach new followers and showcase those to their clients to get the project.",
    image: freelancer,
  },
  {
    index: 204,
    title: "Content Creators",
    caption: "Content creators who running out of ideas or posts can easily post these and go viral almost instantly.",
    image: contentCreators,
  },
  {
    index: 205,
    title: "Social Media Managers",
    caption: "Social Media Manager who wants to gain followers but is not able to make AI Islamic Reels Bundle content can use this to go viral.",
    image: socialmedia,
  },
  {
    index: 206,
    title: "Motivational Page Admin",
    caption: "Motivational Page admin can use this AI Islamic Reels Bundle and gain followers magically and reach new accounts.",
    image: motivationalPage,
  },
]

const offer = [
  { index: 21, image: HighQuality, caption: "High Quality Reels" },
  { index: 22, image: img100, caption: "100% Risk Free" },
  { index: 23, image: Small, caption: "Small Investment" },
  { index: 24, image: Delivery, caption: "Instant Delivery" },
  { index: 25, image: Hindi, caption: "Hindi Reels" },
  { index: 26, image: MP4, caption: "MP4 Format" },
  { index: 27, image: Infinite, caption: "Lifetime Access" },
  { index: 28, image: trending, caption: "Trending Reels" },
]

function PageTwo() {
  return (
    <div className='md:p-7 pt-10' >
        
      <motion.h1 
        className='text-center text-3xl font-bold'
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Limited Time Offer
      </motion.h1>

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

      {/* Offer Grid */}
      <div className='grid grid-cols-2 mt-5 p-4 gap-2'>
        {offer.map((offer, i)=>(
          <motion.div
            key={offer.index}
            className="p-2 rounded-2xl border relative 
            shadow-[0_0_15px_3px_rgba(255,125,41,0.6),0_0_30px_6px_rgba(239,68,60,0.3)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className='flex justify-center'>
              <Image src={offer.image} alt='My Picture' width={200} height={200} className='rounded-2xl w-20 '/>
            </div> 
            <h2 className='mt-2 text-xl font-bold  text-center'>{offer.caption}</h2>
          </motion.div>
        ))}
      </div>

      {/* Mega Reels Bundle Heading */}
      <motion.h1
        className="text-4xl md:text-5xl text-center mt-10 mb-10 font-extrabold 
        bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400 bg-clip-text text-transparent 
        drop-shadow-[0_2px_10px_rgba(255,125,41,0.6)] tracking-wide"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        🚀 100,000+ Mega Reels Bundle 🎉
      </motion.h1>

      {/* About Cards */}
      <div className='flex flex-wrap md:grid md:grid-cols-2 p-4 gap-4 '>
        {about.map((elem, i)=>(
          <motion.div
            key={elem.index}
            className="border p-4 rounded-2xl shadow-[0_0_8px_2px_rgba(255,215,0,0.4),0_0_10px_3px_rgba(255,105,180,0.35)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Image src={elem.image} alt='My Picture' width={200} height={200} className='rounded-2xl w-20 '/>
            <h2 className='text-2xl mt-2 mb-4 font-bold'>{elem.title}</h2>
            <p>{elem.caption}</p>
          </motion.div>
        ))}
      </div>

      {/* Can Be Used For Section */}
      <motion.div
        className='mt-5'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h1 className='border-b-1 border-t-1 text-2xl text-center font-bold py-5'>Can Be Used For</h1>
        <div className='grid grid-cols-4 p-5 gap-5 text-center text-5xl'>
          <motion.i className="ri-tiktok-fill bg-gradient-to-r from-[#25F4EE] to-[#FE2C55] bg-clip-text text-transparent"
            whileHover={{ scale: 1.2 }}
          ></motion.i>
          <motion.i className="ri-snapchat-fill text-[#FFCC00]" whileHover={{ scale: 1.2 }}></motion.i>
          <motion.i className="ri-twitter-x-fill" whileHover={{ scale: 1.2 }}></motion.i>
          <motion.i className="ri-facebook-circle-fill text-[#1877F2]" whileHover={{ scale: 1.2 }}></motion.i>
          <motion.i className="ri-instagram-fill bg-gradient-to-tr from-[#FEDA75] via-[#FA7E1E] via-[#D62976] via-[#962FBF] to-[#4F5BD5] bg-clip-text text-transparent" whileHover={{ scale: 1.2 }}></motion.i>
          <motion.i className="ri-pinterest-fill text-[#E60023]" whileHover={{ scale: 1.2 }}></motion.i>
          <motion.i className="ri-youtube-fill text-[#FF0000]" whileHover={{ scale: 1.2 }}></motion.i>
          <motion.i className="ri-whatsapp-fill text-[#25D366]" whileHover={{ scale: 1.2 }}></motion.i>
        </div>
      </motion.div>
    </div>
  )
}

export default PageTwo