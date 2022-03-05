import React from 'react'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'

function Footer() {
  return (
    <div className='bg-gray-900'>
      <div className='pt-10 md:text-center '>
        <ul className=''>
          <p className='text-gray-400 font-bold text-3xl pb-6'>
            Avenir iP Limited
          </p>
          <div className='flex gap-6  justify-center'>
            <FaInstagram className='text-gray-300 text-2xl cursor-pointer hover:text-yellow-600' />
            <FaTwitter className='text-gray-300 text-2xl cursor-pointer hover:text-blue-600' />
            <FaLinkedin className='text-gray-300 text-2xl cursor-pointer hover:text-blue-600' />
            <FaYoutube className='text-gray-300 text-2xl cursor-pointer hover:text-red-600' />
          </div>
        </ul>
      </div>
      <div className=' w-full h-20  flex justify-center items-center'>
        <h1 className='text-xl text-gray-500 ml-2'>
          © 2022 All rights reserved | Avenir iP Ltd.
        </h1>
      </div>
    </div>
  )
}

export default Footer
