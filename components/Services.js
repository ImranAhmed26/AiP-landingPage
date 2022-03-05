import {features} from '../constants/servicesConstants'

export default function Services() {
  return (
    <div className='py-20 bg-slate-100' id='services'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>
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

        <div className='mt-10 mb-10'>
          <dl className='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
            {features.map((feature) => (
              <div key={feature.name} className='relative'>
                <dt>
                  <div className='absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-900 text-white'>
                    <feature.icon className='h-6 w-6' aria-hidden='true' />
                  </div>
                  <p className='ml-16 text-lg leading-6 font-medium text-gray-900'>
                    {feature.name}
                  </p>
                </dt>
                <dd className='mt-2 ml-16 text-base text-gray-500'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
