import React from "react";

function LandingPage() {
  return (
    <div>
      <div className='min-w-full min-h-96 bg-blue-700'>
        <div className='text-left px-8 py-10  tracking-wide text-white'>
          <h1 className="text-5xl">Easy way for your PR works <br/>starts here</h1>
          <br/>
          <h3 className='text-2xl bg-white/55 text-transparent bg-clip-text'>one tool for your whole team,write,plan and get organized </h3>
          <div className=" mt-8">
            <button className="bg-blue-500 shadow-sm hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
                Login
            </button>
            <button className="bg-green-500 shadow-sm hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Sign Up
            </button>
           </div>
        </div>
        
      </div>
      <div className="flex ">
          <div className=" px-6 py-8 mt-16 w-1/2  rounded-3xl">
            <h1 className="text-2xl bg-blue-500 text-transparent bg-clip-text">Features</h1>
            <h3 className="tracking-wider text-5xl mt-5 font-bold">We make solutions into reality</h3>
            <h5 className=" tracking-wider leading-1 bg-slate-400 text-transparent bg-clip-text">
              We bring the breathe of our experience and industry 
              knowledgeto help your team. Visualize your product roadmapwrite features specs.
              Cross- functional collaboration
            </h5>
            <h6 className="mt-10 tracking-wider font-bold text-1/2xl  bg-blue-700 text-transparent bg-clip-text">Explore Now </h6>
          </div>
          <div className="w-1/2  x-6 py-8 mt-16">
            <div className="grid grid-cols-2 gap-4 ">
              <div className="px-10  ">
                <div className="rounded-xl p-5 bg-blue-700/5">
                <h1 className="tracking-wider font-bold ">Team management</h1>
              <h3 className="tracking-wider mt-8  text-black  bg-clip-text">Captilize on low hanging fruit to identify a ballark value added </h3>
                </div>
              
              </div>
              <div className="px-10  ">
              <div className="rounded-xl p-5 bg-blue-700/5">
                <h1 className="tracking-wider font-bold  ">Time Schedule</h1>
              <h3 className="tracking-wider mt-8  text-black  bg-clip-text">Captilize on low hanging fruit to identify a ballark value added </h3>
                </div>
              </div>
          
              <div className="px-10  ">
              <div className="rounded-xl p-5 bg-blue-700/5">
                <h1 className="tracking-wider font-bold ">Audience response</h1>
              <h3 className="tracking-wider mt-8  text-black  bg-clip-text">Captilize on low hanging fruit to identify a ballark value added </h3>
                </div>
              </div>
              <div className="px-10  ">
              <div className="rounded-xl p-5 bg-blue-700/5">
                <h1 className="tracking-wider font-bold ">Content management</h1>
              <h3 className="tracking-wider mt-8  text-black  bg-clip-text">Captilize on low hanging fruit to identify a ballark value added </h3>
                </div>
              </div>
              
            </div>
          </div>

        </div>
    </div>
  )
}

export default LandingPage;
