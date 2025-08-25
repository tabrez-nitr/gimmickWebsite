"use client"
import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
import payment from '@/assets/page6/Page6Payment.png'

const faq = [
  {
    index: 71,
    question: "Question 1. What if I don't have any experience in making reel content?",
    answer: "Answer – Not a big deal, you just have to copy-paste your branding material and use these ready-made reels."
  },
  {
    index: 72,
    question: "Question 2. How can I get access to the bonuses mentioned above?",
    answer: "Answer – You will get access to all the resources at one place. All the links are provided together."
  },
  {
    index: 73,
    question: "Question 3. Can I add my username in the reel videos?",
    answer: "Answer – Yes, you can add your username and logo in these reels and posts."
  },
  {
    index: 74,
    question: "Question 4. Is there any validity for this 1,000,00+ Reels Bundle and bonuses?",
    answer: "Answer – No, you will get lifetime access."
  },
]

function Page7() {
  return (
    <div className='md:p-10'>
      
      {/* Heading */}
      <motion.h1
        className='pt-10 text-2xl md:text-3xl md:mb-8 text-center font-bold'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Frequently Asked Questions ❓
      </motion.h1>

      {/* FAQ Grid */}
      <div className='p-2 md:grid md:grid-cols-2 md:gap-4'>
        {faq.map((elem, i) => (
          <motion.div
            key={elem.index}
            className="mt-3 rounded-xl p-4 border border-white/20 bg-white/10 backdrop-blur-md shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className='text-xl font-bold mb-2'>{elem.question}</h2>
            <p>{elem.answer}</p>
          </motion.div>
        ))}
      </div>

      {/* Limited Offer Text */}
      <motion.p
        className='mt-4 text-2xl text-center font-bold border-t-1 border-b-1 py-2 md:py-8 md:mt-10'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        ⏱️ Limited time offer! Hit The Button & Grab It Now !!! ⏱️
      </motion.p>

      {/* CTA Button */}
      <motion.div
        className='flex justify-center'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
     <button
  className="mt-5 mx-5 p-5 border rounded-2xl text-xl font-bold 
  bg-gradient-to-r from-red-500 via-[#FF7D29] to-orange-600 
  text-white shadow-lg hover:scale-105 transition-transform duration-300 heartbeat"
>
  Buy Now Just ₹147/- <s className="ml-2">₹3,599/-</s> Limited Time Offer Price
</button>
      </motion.div>

      {/* Payment Image */}
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

    </div>
  )
}

export default Page7