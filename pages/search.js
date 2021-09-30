import { format } from 'date-fns';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';

function Search({ searchResults }) {
  const router = useRouter();
  const { location, startDate, endDate, noofGuests } = router.query;

  // formatting startDate & endDate
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className='h-screen'>
      <Header placeholder={`${location} | ${range} | ${noofGuests} guests`} />

      <main className='flex'>
        <section className='flex-grow pt-14 px-6'>
          <p className='text-xs font-medium tracking-tight'>
            300+ Stays - {range} - for {noofGuests} guests
          </p>

          <h1 className='text-3xl font-semibold tracking-tighter mt-2 mb-6'>
            Stays in {location}
          </h1>

          <div className='hidden mb-5 space-x-3 text-gray-800 whitespace-nowrap lg:inline-flex'>
            <p className='btn'>Cancellation Flexibility</p>
            <p className='btn'>Type of Place</p>
            <p className='btn'>Price</p>
            <p className='btn'>Rooms &#38; Beds</p>
            <p className='btn'>More filters</p>
          </div>

          <div className='flex flex-col'>
            {searchResults?.map(
              ({ img, title, location, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  title={title}
                  location={location}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
