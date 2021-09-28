import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid';

function Header() {
  return (
    <header className='sticky top-0 z-50 p-5 md:px-10 grid grid-cols-3 bg-white shadow-md'>
      {/* left */}
      <div className='relative flex items-center h-10 cursor-pointer my-auto'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* middle - search box */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          className=' flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
          type='text'
          placeholder='Start your search..'
        />
        <SearchIcon className='hidden md:inline-flex  h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:mx-2' />
      </div>

      {/* right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline-flex cursor-pointer font-medium'>
          Become a host
        </p>
        <GlobeAltIcon className='h-6 cursor-pointer' />

        <div className='flex items-center border-2 space-x-2 p-2 rounded-full'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
    </header>
  );
}

export default Header;