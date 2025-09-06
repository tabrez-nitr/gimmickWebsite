import React from 'react'



function Page4() {
  return (
    <div className="mt-10">
      <h1 className="text-2xl mb-6 text-center  font-bold">
        Demo Reels Video <i className="ri-arrow-down-fill"></i>
      </h1>
       <div className='flex justify-center px-3'>
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4 md:gap-7 md:px-10 ">
          <div><video src="/videos/Video1.mov"controls autoPlay   loop  muted  className="rounded-2xl "  ></video></div>  
         <div><video src="/videos/video3.mp4"controls  autoPlay loop  muted className="rounded-2xl"  ></video></div>  
       <div>  <video  src="/videos/video2.mp4" controls   autoPlay loop   muted   className="rounded-2xl"></video></div>  
       <div>  <video  src="/videos/video4.mov" controls   autoPlay loop   muted   className="rounded-2xl"></video></div>  
     
      </div>
      </div>
    </div>
  );
}

export default Page4;