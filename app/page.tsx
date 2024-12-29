import ContactUs from '@/components/ContactUs';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import NewsAndBlogs from '@/components/NewsAndBlogs';
import WhyChooseUs from '@/components/WhyChooseUs';
import FleetGallery from '@/components/FleetGallery';
import Head from 'next/head';
import React from 'react';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Umhlanga Funerals</title>
      </Head>
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="why-choose-us">
          <WhyChooseUs />
        </section>
        <section id="fleet-gallery">
          <FleetGallery />
        </section>
        <section id="news-and-blogs">
          <NewsAndBlogs />
        </section>
        <section id="contact-us">
          <ContactUs />
        </section>
      </main>
    </div>
  );
};

export default Home;
