import React from 'react'
import Image from 'next/image'
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
    {
        index : 510,
        image : icon1
    },
     {
        index : 511,
        image : icon2
    },
     {
        index : 512,
        image : icon3
    },
     {
        index : 513,
        image : icon4
    },
]
 
const reviews = [
    {
      index : 501,
      image : Image1

    },
      {
      index : 502,
      image : Image2

    },
      {
      index : 503,
      image : Image3

    },
      {
      index : 504,
      image : Image4

    },
      {
      index : 505,
      image : Image5

    },
     {
      index : 506,
      image : Image6

    },
]

function page5() {
  return (
    <div className='mt-10'>
      <h1 className='p-4 text-center text-xl font-bold'>CHECK THIS TYPE REELS CAN GROW YOUR THEME PAGE QUICKLY <i className="ri-arrow-down-fill"></i></h1>

      <div className='grid grid-cols-2 gap-3 p-2'>
        {reviews.map((elem)=>(
            <div key={elem.index} className='border-1 rounded-2xl'>
                <Image
                src={elem.image}
                alt='My Picture'
                width={500}
                height={300}
                className='rounded-2xl'
                />
            </div>
        ))
        }
      </div>
      <div className='p-4'>
      <div className='text-xl text-center font-bold bg-red-500 text-white px-5 py-2 rounded-2xl'>
        Become A Viral Content Creator Today !
      </div>
      </div>

      <div className='p-2 mt-4'>
        <h2 className='text-center font-bold text-2xl border-r-1 border-l-1 rounded'>100% Genuine & Trusted</h2>
      </div>
      <div className='grid grid-cols-2 gap-3 p-2'>
        {icons.map((elem)=>(
            <div>
                <Image
                src={elem.image}
                alt='My Picture'
                width={500}
                height={300}
                className='rounded-2xl'
                />
            </div>
        ))}
      </div>
    </div>
  )
}

export default page5
