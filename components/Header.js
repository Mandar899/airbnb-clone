import Image from 'next/image';
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

function Header({ placeholder }) {
  const router = useRouter();

  const [searchInput, setSearchInput] = useState('');
  const [noofGuests, setNoofGuests] = useState(1);

  // startDate & endDate states for DateRangePicker
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  // selectRange object for DateRangePicker
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noofGuests,
      },
    });
  };

  return (
    <header className='sticky top-0 z-50 p-5 md:px-10 grid grid-cols-3 bg-white shadow-md'>
      {/* left */}
      <div
        className='relative flex items-center h-10 cursor-pointer my-auto'
        onClick={() => router.push('/')}
      >
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
          onChange={(e) => setSearchInput(e.target.value)}
          value={searchInput}
          className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
          type='text'
          placeholder={placeholder || 'Start your search..'}
        />
        <SearchIcon className='hidden md:inline-flex  h-8 p-2 text-white bg-red-400 rounded-full cursor-pointer md:mx-2' />
      </div>

      {/* right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline-flex cursor-pointer font-medium tracking-tight'>
          Become a host
        </p>
        <GlobeAltIcon className='hidden sm:inline-flex h-6 cursor-pointer' />

        <div className='flex items-center border-2 space-x-2 p-2 rounded-full'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>

      {/* for rendering calendar */}
      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto mt-1'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5861']}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='mt-1 text-2xl flex-grow font-semibold tracking-tighter text-gray-700'>
              Number of Guests
            </h2>
            <UsersIcon className='h-5 text-gray-700' />
            <input
              type='number'
              value={noofGuests}
              onChange={(e) => setNoofGuests(e.target.value)}
              min={1}
              className='w-12 pl-2 text-lg outline-none font-medium text-red-400'
            />
          </div>
          <div className='flex items-center'>
            <button
              onClick={() => setSearchInput('')}
              className='flex-grow text-gray-500 font-medium'
            >
              Cancel
            </button>
            <button
              className='flex-grow text-red-400 font-medium'
              onClick={search}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
