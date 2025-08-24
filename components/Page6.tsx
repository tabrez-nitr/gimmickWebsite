import React from 'react'
import Image from 'next/image'
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
    {
     index : 601,
     content : "50,000+ Editable Canva Template"

    },
    {
     index : 602,
     content : "The Complate Digital Marketing Course"

    },
    {
     index : 603,
     content : "10,000+ Kids Worksheet Bundle"

    },
    {
     index : 604,
     content : "5000+ Cartoon Video Bundle"

    },
    {
     index : 605,
     content : "Youtube Secret 2.0 Course"

    },
    {
     index : 606,
     content : "Intagram Growth Mastery Course"

    },
    {
     index : 607,
     content : "6000+ Instagram Post & Stories"

    },
    {
     index : 608,
     content : "17000+ Editable Viral Reels"

    },
]

const elem = [
    {
        index : 61,
        title : 1,
        imgage : image1


    },
     {
        index : 62,
        title : 2,
        imgage : image2


    },
     {
        index : 63,
        title : 3,
        imgage : image3


    },
     {
        index : 64,
        title : 4,
        imgage : image4


    },
     {
        index : 65,
        title : 5,
        imgage : image5


    },
     {
        index : 66,
        title : 6,
        imgage : image6


    },
     {
        index : 67,
        title : 7,
        imgage : image7


    },
     {
        index : 68,
        title : 8,
        imgage : image8


    },

]

function Page6() {
  return (
    <div className='mt-6'>
        <h1 className='text-2xl text-center font-bold p-2'>WE'VE DONE ALL HARD WORK FOR YOU</h1>
        <p className='mt-5 text-2xl font-bold text-center '>Just Buy,Download,Upload on Your Social Media and Boost Your Social Media by <span className='text-red-500'> 10 Times. Grab it Now!!</span></p>
           <button className=' mt-5 mx-5 p-5 border-1 rounded-2xl text-xl font-bold'>
            Buy Now Just ₹147/- <s>₹3,599/- </s>  Limited Time Offer Price
        </button>
        <p className='mt-4 text-center font-bold'>
            Even those people who have good reels content & social media growth, Faced a lot of problems while Creating Reels for their Social Media Pages in Beginning and Spent Years and Lacs of Rupees Creating Good Reels So instead of wasting time learning on your own & money on hiring expensive Editors.
        </p>
        <p className='mt-4 text-2xl text-center font-bold border-t-1 border-b-1 py-2'>⏱️Limited time offer! Hit The Button & Grab It Now !!!⏱️</p>

        <div className='grid grid-cols-2 gap-4 p-2 mt-9 '>
            {elem.map((el)=>(
                <div key={el.index}>
                      <h2 className='text-xl text-center bg-red-500 text-white'>Bonus {el.title}</h2>
                      <Image
                src={el.imgage}
                alt='My Picture'
                width={500}
                height={300}
                className='rounded-2xl'
                />
                </div>
            ))}
        </div>

         <button className=' mt-5 mx-5 p-5 border-1 rounded-2xl text-xl font-bold'>
            Buy Now Just ₹147/- <s>₹3,599/- </s>  Limited Time Offer Price
        </button>

        <h2 className='mt-10 text-2xl text-center font-bold'>✨VALUES INSIDE THE BUNDLE ?​✨</h2>

        <div className='p-3'>
            {faq.map((elem)=>(
                <div key={elem.index} className='border-1 mt-3 p-3 rounded-2xl bg-red-500 text-white'>
                    <div className='flex gap-2 text-xl font-bold '>
                        <i className="ri-arrow-right-circle-line text-yellow-300"></i>
                        <p>{elem.content}</p>
                    </div>

                </div>
            ))}
        </div>

        <div className='p-2'>
            <p className='text-center border-1 rounded-2xl'>There are only a few left and the price will soon increase to</p>
        </div>

         <p className='mt-4 text-2xl text-center font-bold border-t-1 border-b-1 py-2'>⏱️Limited time offer! Hit The Button & Grab It Now !!!⏱️</p>
          <button className=' mt-5 mx-5 p-5 border-1 rounded-2xl text-xl font-bold'>
            Buy Now Just ₹147/- <s>₹3,599/- </s>  Limited Time Offer Price
        </button>

        <div className='p-2 mt-5'>
             <Image
                src={payment}
                alt='My Picture'
                width={500}
                height={300}
                className='rounded-2xl'
                />
        </div>
        <p className='mt-5 text-center font-bold text-2xl'>⏰Our Sales Offer End Today⏰</p>

    </div>
  )
}

export default Page6
