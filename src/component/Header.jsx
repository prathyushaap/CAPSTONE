import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosSearch } from "react-icons/io";
import { IoPersonCircleSharp } from "react-icons/io5";
import logo from "../assets/images/logo.webp";

const Header = () => {

    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    
    const menuRef = useRef(null)

    const handleClick = () => {
        navigate("/profile")
    }

    // Close menu when clicking outside
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", handleOutsideClick)
        return () => document.removeEventListener("mousedown", handleOutsideClick)
    }, [])

    return (
        <div className='bg-white px-5'>
            <div className='max-w-[1400px] w-100% mx-auto'>
                <div className='flex justify-between h-20 items-center p-2 flex-wrap'>

                    {/* LOGO */}
                    <Link className='flex items-center gap-1.5'>
                        <img src={logo} alt="img" className='h-[70px] w-[70px] object-cover rounded-lg' />
                        <span className='text-2xl font-bold text-[#231942] font-sciencegothic'>CAPSTONE</span>
                    </Link>

                    {/* MOBILE WRAPPER (hamburger + profile) */}
                    <div className="md:hidden flex items-center gap-4">

                        {/* MOBILE HAMBURGER BUTTON */}


                        {/* MOBILE PROFILE ICON */}
                        <IoPersonCircleSharp
                            className='text-[28px] cursor-pointer'
                            onClick={handleClick}
                        />
                    </div>
                    <div
                        className="flex flex-col gap-1 cursor-pointer md:hidden"
                        onClick={() => setOpen(!open)}
                    >
                        <span className="w-7 h-1 bg-[#231942]"></span>
                        <span className="w-7 h-1 bg-[#231942]"></span>
                        <span className="w-7 h-1 bg-[#231942]"></span>
                    </div>


                    {/* DESKTOP MENU (unchanged) */}
                    <div className='hidden md:flex items-center gap-8'>
                        <ul className='flex gap-14'>
                            <li><Link className='font-inter text-[16px] text-[#5e548e] font-semibold'>Home</Link></li>
                            <li><Link className='font-inter text-[16px] text-[#5e548e] font-semibold'>Departments</Link></li>
                            <li><Link className='font-inter text-[16px] text-[#5e548e] font-semibold'>About Us</Link></li>
                        </ul>

                        <div className='flex items-center gap-10'>
                            <div className='flex items-center gap-2  w-[250px] h-[35px] rounded-2xl pl-4 border border-[#5e548e]'>
                                <IoIosSearch />
                                <input type="search" placeholder='Search Project...' className='outline-0 text-[14px] text-[#5e548e]' />
                            </div>
                            <IoPersonCircleSharp className='text-[25px]' onClick={handleClick} />
                        </div>
                    </div>

                    {/* RIGHT-SIDE MOBILE MENU */}
                    <div
                        ref={menuRef}
                        className={`md:hidden fixed top-0 right-0 h-[400px] rounded-lg w-64 bg-white shadow-xl p-5 transition-transform duration-300 z-50 ${open ? "translate-x-0" : "translate-x-full"
                            }`}
                    >
                        <ul className='flex flex-col gap-6 mt-20'>
                            <li><Link onClick={() => setOpen(false)} className='text-[#5e548e] text-lg font-semibold'>Home</Link></li>
                            <li><Link onClick={() => setOpen(false)} className='text-[#5e548e] text-lg font-semibold'>Departments</Link></li>
                            <li><Link onClick={() => setOpen(false)} className='text-[#5e548e] text-lg font-semibold'>About Us</Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header
