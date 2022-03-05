/* This example requires Tailwind CSS v2.0+ */
import Image from 'next/image';
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import mainImage from '../public/assets/images/bi1.png'
import xx from'../public/assets/images/WhyUs/A.jpg'

export default function HomeText() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="text-center">
          <p className="mt-16 mb-1 text-5xl leading-8 font-bold tracking-tight text-indigo-900 sm:text-8xl ">
            Avenir iP Limited
          </p>
          <h2 className="text-base text-gray-700 font-bold text-xl tracking-wide  ">Future Is Here</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-400 lg:mx-auto md:mx-auto">
            One of the promising and fastest growing IT company in Bangladesh with the vision to develop cutting edge desktop and web applications.
          </p>
        </div>
     
      
      <div className="max-w-4xl justify-self-center flex-initial item-center justify-center lg:mx-auto md:mx-auto ">
        <div className=''>
        <Image
          className=""
          src={mainImage}
          alt="banner image"
        />
      </div>
      </div>
    </div>
     </div>
  )
}

