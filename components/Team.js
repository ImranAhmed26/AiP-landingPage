import Image from 'next/image'
import member1 from '../public/assets/images/Team/member1.png'
import member2 from '../public/assets/images/Team/member2.png'
import member3 from '../public/assets/images/Team/member3.png'
import member4 from '../public/assets/images/Team/member4.png'

function Team() {
  return (
<div className="bg-gray-50" id='team'>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 ">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 text-center mt-20 mb-5">Meet Our <span className='text-indigo-900'> Team</span></h2>
        <p className="text-2xl  tracking-tight text-gray-500 text-center mb-20">We have a great sense of togetherness. </p>

        <div className="mt-6 mb-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 justify-items-center">
         
            <div className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <Image src={member1} alt='' className='w-full'
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className='px-6 py-4'>
            <div className='text-center uppercase'>
              <h1 className='font-black  text-xl mb-0  text-3xl text-gray-700'>
                Ahmed Musa
              </h1>
              <h1 className='text-gray-600 contact-email font-bold  text-sm py-1'>
                C.E.O
              </h1>
            </div>
          </div>
            </div>
         
            <div className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <Image src={member2} alt='' className='w-full'
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className='px-6 py-4'>
            <div className='text-center uppercase'>
              <h1 className='font-black  text-xl mb-0  text-3xl text-gray-700'>
              Jayed AL Hasan
              </h1>
              <h1 className='text-gray-600 contact-email font-bold  text-sm py-1'>
                Project Manager
              </h1>
            </div>
          </div>
            </div>
         
            <div className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <Image src={member3} alt='' className='w-full'
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className='px-6 py-4'>
            <div className='text-center uppercase'>
              <h1 className='font-black  text-xl mb-0  text-3xl text-gray-700'>
              Salman Farshe
              </h1>
              <h1 className='text-gray-600 contact-email font-bold  text-sm py-1'>
                Software Engineer (Intern)
              </h1>
            </div>
          </div>
            </div>

            <div className="group relative">
              <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <Image src={member4} alt='' className='w-full'
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
              </div>
              <div className='px-6 py-4'>
            <div className='text-center uppercase'>
              <h1 className='font-black  text-xl mb-0  text-3xl text-gray-700'>
             Imran Ahmed
              </h1>
              <h1 className='text-gray-600 contact-email font-bold  text-sm py-1'>
                Software Engineer (Intern)
              </h1>
            </div>
          </div>
            </div>
          
        </div>
      </div>
 


   {/* <div className='  '>
      <div className='flex flex-row items-center my-20 card-container max-w-xl shadow-lg  overflow-hidden rounded  '>
        <div className=' shadow-lg m-auto bg-gray-500 relative rounded mx-2 '>
          <Image src={member1} alt='' className='w-full' />
          <div className='px-6 py-4'>
            <div className='text-center uppercase'>
              <h1 className='font-black  text-xl mb-0  text-3xl text-gray-700'>
                Ahmed Musa
              </h1>
              <h1 className='text-indigo-900 contact-email font-bold  text-sm py-1'>
                CHIEF EXECUTIVE OFFICER
              </h1>
            </div>
          </div>
        </div>
        <div className='shadow-lg m-auto bg-gray-500 relative rounded'>
          <Image src={member1} alt='' className='w-full' />
          <div className='px-6 py-4'>
            <div className='text-center uppercase'>
              <h1 className='font-black  text-xl mb-0  text-3xl text-gray-700'>
                Ahmed Musa
              </h1>
              <h1 className='text-indigo-900 contact-email font-bold  text-sm py-1'>
                CHIEF EXECUTIVE OFFICER
              </h1>
            </div>
          </div>
        </div>
      </div>
      </div> */}
      </div>
    
  )
}

export default Team

{
  /* <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className='md:text-center'>
          <h2 className='text-base text-indigo-900 font-semibold tracking-wide uppercase text-xl '>
            Our Services
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            Quality | Service | Value
          </p>
          <p className='mt-4 max-w-2xl text-xl text-gray-500 md:mx-auto'>
            Your journey into a world of quality and better service
          </p>
        </div>
        </div> */
}
