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



const about = [
    {
    index : 201,
    title : "Instagram Page Admin",
    caption : "Admin who wants to grow Instagram accounts and reach new accounts every day. By AI Islamic Reels Bundle",
    image : instagram,
     },
     {
    index : 202,
    title : "Influencers",
    caption : "Instagram influencers who want to influence and motivate their followers daily basis.",
    image : influencers,
     },
     {
    index : 203,
    title : "Freelancers",
    caption : "Freelancers who want to reach new followers and showcase those to their clients to get the project.",
    image : freelancer,
     },
     {
    index : 204,
    title : "Content Creators",
    caption : "Content creators who running out of ideas or posts can easily post these and go viral almost instantly.",
    image : contentCreators,
     },
     {
    index : 205,
    title : "Social Media Managers",
    caption : "Social Media Manager who wants to gain followers but is not able to make AI Islamic Reels Bundle content can use this to go viral.",
    image : socialmedia,
     },
    
     {
    index : 206,
    title : "Motivational Page Admin",
    caption : "Motivational Page admin can use this AI Islamic Reels Bundle and gain followers magically and reach new accounts.",
    image : motivationalPage,
     },

]

const offer = [
    { index:21 ,
      image : HighQuality,
      caption : "High Quality Reels"  
    },
    { index:22 ,
      image : img100,
      caption : "100% Risk Free"  
    },
    { index:23 ,
      image : Small,
      caption : "Small Investment"  
    },
    { index:24 ,
      image : Delivery,
      caption : "Instant Delivery"  
    },
    { index:25 ,
      image : Hindi,
      caption : "Hindi Reels"  
    },
    { index:26 ,
      image : MP4,
      caption : "MP4 Format"  
    },
    { index:27 ,
      image : Infinite,
      caption : "Lifetime Access"  
    },
    { index:28 ,
      image : trending,
      caption : "Trending Reels"  
    },
]

function PageTwo() {
  return (
    <div >
        
        <h1 className='text-center text-3xl font-bold'>Limited Time Offer</h1>

        <button className=' mt-5 mx-5 p-5 border-1 rounded-2xl text-xl font-bold'>
            Buy Now Just ₹147/- <s>₹3,599/- </s>  Limited Time Offer Price
        </button>
        <div className='grid grid-cols-2 p-4 gap-2'>
            {offer.map((offer)=>(
                <div key={offer.index} className='border-1 p-2 rounded-2xl'>
                  <div className='flex justify-center'> <Image
                src={offer.image}
                alt='My Picture'
                width={200}
                height={200}
                className='rounded-2xl w-20 '
                
                /></div> 
                <h2 className='mt-2 text-xl font-bold  text-center'>{offer.caption}</h2>
                </div>
            ))
            }

        </div>

        <div>
            <h1 className='text-2xl text-center mt-10 mb-10 font-bold border-t-1 border-b-1 py-4'>100,000+ Mega Reels Bundle</h1>
        </div>

        <div className='flex flex-wrap p-2 gap-4 '>
            {about.map((elem)=>(
                <div key={elem.index} className='border-1 p-4 rounded-2xl'>

                    <Image
                src={elem.image}
                alt='My Picture'
                width={200}
                height={200}
                className='rounded-2xl w-20 ' 
                />

                <h2 className='text-2xl mt-2 mb-4 font-bold'>{elem.title}</h2>
                <p>{elem.caption}</p>
                    

                </div>
            ))}

        </div>

        <div className='mt-5'>
            <h1 className='border-b-1 border-t-1 text-2xl text-center font-bold py-5'>Can Be Used For</h1>
            <div className='grid grid-cols-4 p-5 gap-5 text-center text-5xl'>
               <i className="ri-tiktok-fill bg-gradient-to-r from-[#25F4EE] to-[#FE2C55] bg-clip-text text-transparent"></i>
               <i className="ri-snapchat-fill text-[#FFCC00]"></i>
               <i className="ri-twitter-x-fill"></i>
               <i className="ri-facebook-circle-fill text-[#1877F2]"></i>
               <i className="ri-instagram-fill bg-gradient-to-tr from-[#FEDA75] via-[#FA7E1E] via-[#D62976] via-[#962FBF] to-[#4F5BD5] bg-clip-text text-transparent"></i>
               <i className="ri-pinterest-fill text-[#E60023]"></i>
               <i className="ri-youtube-fill text-[#FF0000]"></i>
               <i className="ri-whatsapp-fill text-[#25D366]"></i>
            </div>
        </div>
    </div>
  )
}

export default PageTwo
