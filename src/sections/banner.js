/** @jsx jsx */
import React from 'react';
import { jsx, Box, Container, Heading, Text, Button, Image } from 'theme-ui';
import { rgba } from 'polished';
import { keyframes } from '@emotion/react';

import theme from 'gatsby-plugin-theme-ui/index';
import { ScrollRotate } from 'react-scroll-rotate';
import communalEffort from 'assets/images/principles/white/wick-white-communal-effort.svg';
import arrowDown from 'assets/images/arrow.svg';
import { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import menuItems from 'components/header/header.data';
import { NavLink } from 'components/link';
import { BiInfinite } from 'react-icons/bi';
// import { animateScroll } from 'react-scroll';

const shake = `0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }`;

const BannerContent = () => {
  const [displayInformation, setDisplayInformation] = useState(false);
  const [displayBorderlandExplanation, setDisplayBorderlandExplanation] = useState(false);

  const borderlandExplanation = (
    <Text as="p" sx={{ ...styles.desc, marginBottom: '20px' }}>
      Reventtttt
    </Text>
  );

  let mainContent = (
    <Heading as="h1" sx={styles.heroTitle}>
      Welcome<br></br>home.
    </Heading>
  );
  if (displayInformation) {
    mainContent = (
      <>
        {displayBorderlandExplanation ? borderlandExplanation : null}
        <Text
          as="span"
          sx={{ ...styles.desc, ...styles.titleInline, display: 'inline', cursor: 'pointer' }}
          onClick={() => setDisplayBorderlandExplanation(!displayBorderlandExplanation)}
        >
          Revent&nbsp;
        </Text>
        <Text as="p" sx={{ ...styles.desc, display: 'inline' }}>
          is a gathering happening or not happening at the edge of the knives of relating.
        </Text>
      </>
    );
  }
  return (
    <Box sx={styles.bannerContent({ clickable: !displayInformation })} onClick={() => setDisplayInformation(true)}>
      {mainContent}
    </Box>
  );
};

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
      id="home"
      Tag="section"
      style={styles.newSection}
      fluid={imageData}
      backgroundColor={theme.colors.background}
    >
      <Box sx={styles.contentWrapper}>
        <BannerContent />
      </Box>
      <NavLink to={menuItems[1].path} label={menuItems[1].path}>
        <Image
          // onClick={() => animateScroll.scrollTo(menuItems[1].path)}
          loading="lazy"
          src={arrowDown}
          alt={'down'}
          sx={{
            // mixBlendMode: mixBlendModeIsSupported ? 'screen' : 'none',
            // opacity: mixBlendModeIsSupported ? 0.9 : 0.4,
            ...styles.decorativeImage,
          }}
        />
        {/* <Box
        onClick={() => animateScroll.scrollTo(menuItems[1].path)}
        sx={{
          // mixBlendMode: mixBlendModeIsSupported ? 'screen' : 'none',
          // opacity: mixBlendModeIsSupported ? 0.9 : 0.4,
          ...styles.decorativeImage,
        }}
      >
        TEST
      </Box> */}
      </NavLink>
    </BackgroundImage>
  );
}

const styles = {
  titleInline: {
    fontSize: 21,
    fontWeight: 700,
    fontFamily: 'Parisienne, cursive',
    transition: '0.5s ease-in-out 0s',
    ':hover': {
      transform: 'scale(1.1)',
    },
  },
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
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
  },
  dividerLine: {
    borderBottom: `5px solid ${theme.colors.secondary}`,
    width: '150px',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: ['2vh', '3vh', '5vh', '10vh', '10vh', '10vh'],
    background:
      'linear-gradient(to top,rgba(255,255,255,0.97),rgba(255,255,255,0.96),rgba(255,255,255,0.95),rgba(255,255,255,0.9))',
  },
  bannerContent: ({ clickable }) => ({
    animation: `${shake} 1s ease infinite`,
    cursor: clickable ? 'pointer' : 'initial',
    // backgroundColor: rgba('#fff', 0.7),
    // boxShadow: ['0px 10px 16px rgba(52, 61, 72, 0.12)', null, null, null, 'none'],
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
    textAlign: 'center',
    zIndex: 15,
    transition: '0.5s ease-in-out 0.1s',
    ':hover': {
      transform: clickable ? 'scale(1.2)' : 'none',
    },
  }),
  heroTitle: {
    fontFamily: 'Parisienne, cursive',
    // fontSize: [22, null, null, 40, null, 5, 6],
    fontSize: ['7vh', '12vw', '11vw', '10vw', '9vw', '8vw', '7vw'],
    fontWeight: 500,
    letterSpacing: 'heading',
    lineHeight: [0.8, null, null, null, null, null, 0.9],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      fontSize: 40,
    },
    marginBottom: 15,
    zIndex: 10,
  },
  desc: {
    fontSize: 19,
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
    cursor: 'pointer',
    position: 'absolute',
    // bottom: [null, '-50%', '-50%', '-60%', '-60%', '-70%'],
    // top: ['-20%', 'initial', null, null, null, null],
    // right: '-49%',
    bottom: '8vw',
    right: '5vw',
    width: ['10vh', '15vw', '14vw', '13vw', '12vw', '11vw', '10vw'],
    zIndex: 1,
    // mixBlendMode: 'difference',
    // opacity: 1,
    // pointerEvents: 'none',
    transition: '0.5s ease-in-out 0.1s',
    ':hover': {
      transform: 'scale(1.2)',
    },
  },
};
