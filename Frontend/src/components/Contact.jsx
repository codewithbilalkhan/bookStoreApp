import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <nav className='navbar'>
          {/* Your Navbar Content */}
        </nav>
        <div className='content mt-28 justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>
            Contact Us
          </h1>
          <br />
          <div className='mt-4'>
            <div className='flex flex-col items-center'>
              <div className='w-80'>
                <span className='block text-left font-semibold'>Name</span>
                <input type='text' placeholder='Enter your name' className="w-full px-3 border py-1 rounded-md outline-none mt-2" />
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <div className='flex flex-col items-center'>
              <div className='w-80'>
                <span className='block text-left font-semibold'>Email</span>
                <input type='text' placeholder='Enter your email' className="w-full px-3 border py-1 rounded-md outline-none mt-2" />
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <div className='flex flex-col items-center'>
              <div className='w-80'>
                <span className='block text-left font-semibold'>Message</span>
                <textarea placeholder='Enter your message' className="w-full px-3 border py-2 rounded-md outline-none mt-2 h-40 resize-none"></textarea>
              </div>
            </div>
          </div>
          <div className='mt-4 flex flex-col items-center'>
            <div className='w-80 text-left'>
              <button className='hover:bg-blue-700 duration-200 bg-blue-500 text-white px-6 py-2 rounded-md'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
