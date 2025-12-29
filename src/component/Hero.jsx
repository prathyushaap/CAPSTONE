import React from 'react'

const Hero = () => {
  return (
    <>
        <section className="flex flex-col items-center pb-48 text-center text-sm text-white max-md:px-2 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-image-grain.png')] bg-cover bg-center">
                <nav className="flex justify-between items-center px-4 md:px-16 lg:px-24 xl:px-32 py-3.5 border-b border-slate-200/20 w-full">
                    <p className='font-bold text-3xl'>capstone</p>
                    <button className="bg-white text-slate-800 hover:bg-gray-300 px-6 md:px-8 py-2.5 rounded-full font-medium transition">
                        Sign up
                    </button>
                </nav>
                
                <h1 className="font-berkshire text-[45px]/[52px] md:text-6xl/[65px] mt-6 max-w-4xl">
                    A Shared Journey from Idea to Impact.
                </h1>
                <p className="text-base mt-2 max-w-xl">A collaborative platform where students manage their yearly projects with clarity and confidence. 
                   </p>
                <p className="text-base mt-3 md:mt-7 max-w-xl">
                    Teachers guide progress, provide feedback, and support success at every stage.
                </p>
            
                <form className="flex items-center mt-8 max-w-lg h-16 w-full rounded-full border border-slate-50">
                    <input type="email" placeholder="Enter email address" className="w-full h-full outline-none bg-transparent pl-6 pr-2 text-white placeholder:text-slate-300 rounded-full" />
                    <button className="bg-white text-slate-800 hover:bg-gray-300 text-nowrap px-8 md:px-10 h-12 mr-2 rounded-full font-medium transition">
                        Early access
                    </button>
                </form>
            </section>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            
                .font-berkshire {
                    font-family: 'Berkshire Swash', cursive;
                }
            `}</style>
    </>
  )
}

export default Hero