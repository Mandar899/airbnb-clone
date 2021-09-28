import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* header */}
      <Header />

      {/* hero section */}
      <HeroSection />
    </div>
  );
}
