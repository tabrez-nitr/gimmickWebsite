import React from 'react'
import Image from 'next/image'
import payment from '@/assets/page6/Page6Payment.png'


const faq = [
{
    index: 71,
    question : "Question 1. What if i don't have any experience in making reel content ?",
    answer : "Answer – Not a big deal you just have to do copy paste your branding material and use this ready made reels"

},
{
    index: 72,
    question : "Question 2. How can i get the access to the bonuses mentioned above ?",
    answer : "Answer – You Will get access all the resources at one place all the links are at same place"

},
{
    index: 73,
    question : "Question 3. Can i add my username in the reel videos?",
    answer : "Answer – Yes , You can add your username and logo in these reels and posts"

},
{
    index: 74,
    question : "Question 4. Is there any validity of this 1,000,00+Reels Bundle video bundle and bonuses?",
    answer : "Answer – No You Will Get Access For Lifetime"

},
]


function page7() {
  return (
    <div>
        <h1 className='pt-10 text-2xl text-center font-bold'>
            Frequently Asked Questions ❓
        </h1>

        <div className='p-2'>
            {faq.map((elem)=>(
                <div key={elem.index} className='border-1 mt-2 rounded-2xl p-2'>
                    <h2 className='text-xl font-bold mb-2'>{elem.question}</h2>
                    <p>{elem.answer}</p>

                </div>
            ))}
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

    </div>
  )
}

export default page7
