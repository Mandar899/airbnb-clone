import Image from 'next/image';
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className='flex py-7 px-2 pr-3  border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t rounded'>
      {/* image div */}
      <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
        <Image
          src={img}
          layout='fill'
          objectFit='cover'
          className='rounded-2xl'
        />
      </div>

      {/* location */}
      <div className='flex flex-col flex-grow pl-5'>
        <div className='flex justify-between'>
          <p className='text-sm tracking-tight'>{location}</p>
          <HeartIcon className='h-7 cursor-pointer' />
        </div>

        {/* title */}
        <h4 className='text-xl tracking-tighter font-semibold'>{title}</h4>

        <div className='border-b w-10 pt-2'></div>

        {/* description */}
        <p className='pt-2 text-sm text-gray-500 tracking-tight flex-grow'>
          {description}
        </p>

        {/* stars, prices & total */}
        <div className='flex justify-between items-end pt-5'>
          <p className='flex items-center text-sm md:text-base'>
            <StarIcon className='h-5 text-red-400' />
            {star}
          </p>

          <div>
            <p className='text-lg font-semibold pb-2 tracking-tight lg:text-2xl'>
              {price}
            </p>
            <p className='text-right font-extralight tracking-tight'>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
