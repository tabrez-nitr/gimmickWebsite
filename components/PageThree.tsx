import React from 'react'
import Image from 'next/image'
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
   {
    index: 31,
    image: image1,
},
{
    index: 32,
    image: image2,
},
{
    index: 33,
    image: image3,
},
{
    index: 34,
    image: image4,
},
{
    index: 35,
    image: image5,
},
{
    index: 36,
    image: image6,
},
{
    index: 37,
    image: image7,
},
{
    index: 38,
    image: image8,
},
{
    index: 39,
    image: image9,
},
{
    index: 40,
    image: image10,
},
{
    index: 41,
    image: image11,
},
{
    index: 42,
    image: image12,
},
{
    index: 43,
    image: image13,
},
{
    index: 44,
    image: image14,
},
{
    index: 45,
    image: image15,
},
{
    index: 46,
    image: image16,
},

]

function PageThree() {
  return (
    <div className='mt-5'>

      <h1 className='text-2xl text-center border-t-1 border-b-1  font-bold p-3'>
           GROW YOUR INSTAGRAM ACCOUNT FOLOWERS
      </h1>

      <div className='grid grid-cols-2 gap-4 mt-10 p-3'>
        {elem.map((el)=>(
            <div key={el.index} className='border-1 rounded-2xl'>
               
             <Image
                src={el.image}
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


    </div>
  )
}

export default PageThree
