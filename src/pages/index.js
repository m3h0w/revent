import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Clients from 'sections/clients';
import Land from 'sections/land';
import OurCustomer from 'sections/our-customer';
import Gallery from 'sections/gallery';
import Principles from 'sections/principles';
import Pricing from 'sections/pricing';
import Blog from 'sections/blog';
import Subscription from 'sections/subscription';
import Crowdfunding from 'sections/crowdfunding';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function IndexPage() {
  return (
    <ParallaxProvider>
      <Layout>
        <SEO title="Revent" />
        <Banner />
        <Principles />
        {/* <Clients /> */}
        <Land />
        <Gallery />
        {/* <Crowdfunding /> */}
        {/* <Pricing /> */}
        {/* <OurCustomer /> */}
        {/* <Blog /> */}
        {/* <Subscription /> */}
      </Layout>
    </ParallaxProvider>
  );
}
