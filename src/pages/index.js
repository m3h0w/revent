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
// import LastGallery from 'sections/lastgallery';
import { ParallaxProvider } from 'react-scroll-parallax';
import InfoOnce from 'components/infoonce';

const MembershipsInfo = () => {
  return (
    <>
      <p style={{ textAlign: 'center' }}> [RE]vent is sold out now! :( Check the below FB group for transfers:</p>

      <a href="https://www.facebook.com/groups/840400883237015" target="_blank" rel="noreferrer">
        <h3 style={{ textAlign: 'center' }}> --= Membership Transfers =-- </h3>
      </a>
    </>
  );
};

export default function IndexPage() {
  return (
    <ParallaxProvider>
      <InfoOnce id={1}>
        <MembershipsInfo />
      </InfoOnce>
      <Layout>
        <SEO title="Revent" />
        <Banner />
        {/* <LastGallery /> */}
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
