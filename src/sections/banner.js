/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image } from 'theme-ui';
import { rgba } from 'polished';

import Select from 'components/select';
import bannerBg from 'assets/images/banner-bg.jpg';
import mapMarker from 'assets/images/icons/map-marker.png';
import theme from 'gatsby-plugin-theme-ui/index';
import { ScrollRotate } from 'react-scroll-rotate';
import communalEffort from 'assets/images/principles/white/wick-white-communal-effort.svg';
import { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

export default function Banner() {
  const [mixBlendModeIsSupported, setMixBlendModeIsSupported] = useState(false);
  useEffect(() => {
    setMixBlendModeIsSupported(window.getComputedStyle(document.body).mixBlendMode !== undefined);
  }, [setMixBlendModeIsSupported]);
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "banner-bg.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  const imageData = data.desktop.childImageSharp.fluid;

  return (
    <BackgroundImage
      id='home'
      Tag='section'
      style={styles.newSection}
      fluid={imageData}
      backgroundColor={theme.colors.background}
    >
      <Box sx={styles.contentWrapper}>
        <Box sx={styles.bannerContent}>
          <Heading as='h1' sx={styles.heroTitle}>
            A permanent space between dreams and reality
          </Heading>
          <Box sx={styles.dividerLine}></Box>
          <Text as='p' sx={styles.desc}>
            An all-year-round playground for Borderland members to prototype dreams through art, events, workshops, and
            anything else you can imagine. A land to dream about what to do and who to be.
          </Text>
        </Box>
      </Box>
      <Image
        loading='lazy'
        src={communalEffort}
        alt={'communal effort'}
        sx={{
          mixBlendMode: mixBlendModeIsSupported ? 'difference' : 'none',
          opacity: mixBlendModeIsSupported ? 1 : 0.4,
          ...styles.decorativeImage,
        }}
      />
    </BackgroundImage>
  );
}

const styles = {
  newSection: {
    width: '100%',
    height: '100%',
    backgroundPosition: 'bottom center',
    backgroundRepeat: 'repeat-y',
    backgroundSize: 'cover',
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  section: {
    // background: `url(${bannerBg}) no-repeat center top / cover`,
    // backgroundSize: [null, null, null, null, 'cover'],
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'hidden',
    minHeight: '450px',
  },
  dividerLine: {
    borderBottom: `5px solid ${theme.colors.secondary}`,
    width: '150px',
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: ['80vh', '80vh', '80vh', '80vh', '100vh', '100vh'],
    padding: ['2vh', '3vh', '5vh', '10vh', '20vh', '20vh'],
  },
  bannerContent: {
    backgroundColor: rgba('#fff', 0.7),
    boxShadow: ['0px 10px 16px rgba(52, 61, 72, 0.12)', null, null, null, 'none'],
    maxWidth: [null, null, '70vw', '60vw', '50vw', '40vw'],
    // maxHeight: '40vh',
    padding: ['20px', '30px', null, null, null, '25px 35px 40px', '35px 40px 55px'],
    borderRadius: 40,
    m: ['110px 0 0', null, null, '110px auto 0', '60px 0 0', '60px 0 0', 0],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      maxWidth: 800,
      mt: 70,
      padding: '30px 50px 65px',
    },
  },
  heroTitle: {
    fontSize: [22, null, null, 40, null, 5, 6],
    fontWeight: 700,
    letterSpacing: 'heading',
    lineHeight: [1.15, null, null, null, null, null, 1.2],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      fontSize: 40,
    },
    marginBottom: 15,
  },
  desc: {
    fontSize: [15, 17, 16, 19],
    lineHeight: [1.4, null, null, 1.5, 1.6, 1.6, 1.6],
    maxWidth: [null, null, '37vw', '37vw', '37vw', '37vw'],
    marginTop: [15, null, null, null, null, null, 15],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      mt: 15,
    },
  },
  select: {
    marginTop: 30,
    select: {
      minWidth: [null, null, 'initial'],
    },
  },
  button: {
    fontWeight: 700,
    marginTop: 20,
    width: '100%',
    minHeight: [50, null, null, null, 60],
    fontSize: [16, null, null, 20],
    ':focus': {
      outline: '0 none',
    },
  },
  decorativeImage: {
    position: 'absolute',
    bottom: [null, '-50%', '-50%', '-60%', '-60%', '-70%'],
    top: ['-20%', 'initial', null, null, null, null],
    right: '-49%',
    zIndex: 1,
    // mixBlendMode: 'difference',
    // opacity: 1,
    pointerEvents: 'none',
  },
};
