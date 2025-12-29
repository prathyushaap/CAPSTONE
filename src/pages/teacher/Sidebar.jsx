import React from 'react'
import { IoPeopleOutline } from 'react-icons/io5'
import { LuUserCog } from 'react-icons/lu'
import { MdHistory } from 'react-icons/md'
import { RxDashboard } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6 text-gray-600'>
        <NavLink end={true} to='/teacher' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
            <RxDashboard />
            <p className='hidden md:inline-block'>Dashboard</p>
        </NavLink>

        <NavLink  to='/teacher/add-project' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
            <IoPeopleOutline />
            <p className='hidden md:inline-block'>Add Project</p>
        </NavLink>

        <NavLink  to='/teacher/manage-project' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
           <LuUserCog />
            <p className='hidden md:inline-block'>Manage Projects</p>
        </NavLink>

        <NavLink  to='/teacher/teacher-profile' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
            <MdHistory />
            <p className='hidden md:inline-block'>My Profile</p>
        </NavLink>
        <NavLink  to='/teacher/drafts' className={({isActive})=> `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive && "bg-cyan-800 border-r-4 border-blue-500 text-gray-200"}`}>
            <MdHistory />
            <p className='hidden md:inline-block'>Drafts</p>
        </NavLink>
    </div>
  )
}

export default Sidebar