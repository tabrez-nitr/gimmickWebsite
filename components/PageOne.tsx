import React from 'react'
import Image from 'next/image'
import pageOneImageOne from '../assets/page1Image1.webp'


const offerings = [
    {
        index : 1,
        offer :"Get All 1,000,00+ Readymade Reel Video Bundle" },
     {
         index : 2,
        offer :"Ready-Made Reels Without logo & Watermark" },
     {
         index : 3,
        offer :"Get Instant Download Link & Lifetime Access" },
     {
         index : 4,
        offer :"Ready to Post : Ready to Post On Social Media" },
     {
         index : 5,
        offer :"Time Saving: Saver lot of Time of Creators" },
    {
         index : 6,
        offer :"Time Saving: Saver lot of Time of Creators" },
    {
         index : 7,
        offer :"Time Saving: Saver lot of Time of Creators" },


]

function pageOne() {
  return (
    <div className='bg-[#901E3E] w-full h-min-screen px-2 text-white pb-10'>
         <h1 className='text-3xl font-bold font-sans text-center pt-10'>1,000,00+ Mega Reels Bundle! 🚀  ✨ <span className='text-[#F27893]'> Faceless, Aesthetic, Lifestyle, Dog & Cat Reels, Interior Design, Luxury Cars</span> —everything you need to grow your social media 🌐 Start attracting clients now! 📈</h1>
        
         <p className='mt-4 text-center text-white/70'>Unleash viral growth with 1,000,00+ reels for every niche—get noticed, gain clients, and scale your social media fast!</p>

         <div className='flex flex-wrap mt-5 justify-center gap-20'>
            
             <Image
                src={pageOneImageOne}
                alt='My Picture'
                width={500}
                height={300}
                className='rounded-2xl'
                />
             <div className='mt-5 bg-white text-black p-2 rounded-2xl  '>
                 <ul>
                {offerings.map((offer)=>(
                   
                     <li key={offer.index} className='mt-5 flex font-bold'><i className="ri-check-fill text-2xl "></i><span className='ml-4'>{offer.offer}</span></li>
                    
                ))}
                </ul>
            
             </div>   
             

             
         </div>
    </div>
  )
}

export default pageOne
