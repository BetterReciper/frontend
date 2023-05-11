import React from 'react'

const Navbar = () => {
  return (
    <nav>
        <div className="max-w-screen flex items-center justify-between">
            <h1 className='p-6 font-extrabold text-2xl'>Better Reciper</h1>
            <input placeholder='Search recipes by name' className='grow bg-gray-100 max-w-4xl p-2 rounded-xl' />
            <UserProfile />
        </div>
    </nav>
  )
}

const UserProfile = () => {
    return (
        <h1 className='p-6'>
            User
        </h1>
    )
}

export default Navbar