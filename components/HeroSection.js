import Image from 'next/image';

function HeroSection() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
      <Image
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg font-medium'>
          Not sure where to go? Perfect.
        </p>

        <button className='px-10 py-4 bg-white text-purple-500 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
          I'm flexible
        </button>
      </div>
    </div>
  );
}

export default HeroSection;