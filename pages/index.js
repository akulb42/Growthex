import Head from 'next/head';
import Hero from '../components/Hero';
import Testimonials from '../components/reviews';
import ContactUs from '../components/Emailbox';
import Features from '../components/Features';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Head>
        <title>Growthex</title>
        <meta name="description" content="growthex website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Features />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
