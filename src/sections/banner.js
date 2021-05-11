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
import useWindowSize from 'utils/useWindowSize';
// import { animateScroll } from 'react-scroll';

const shake = keyframes`{
  0% { transform: translate(1px, 1px) rotate(0deg); }
  4% { transform: translate(-1px, -2px) rotate(-1deg); }
  8% { transform: translate(-3px, 0px) rotate(1deg); }
  12% { transform: translate(3px, 2px) rotate(0deg); }
  16% { transform: translate(1px, -1px) rotate(1deg); }
  20% { transform: translate(-1px, 2px) rotate(-1deg); }
  24% { transform: translate(0px, 0px) rotate(0deg); }
}`;

const BannerContent = () => {
  const { width, height } = useWindowSize();
  console.log({ width });
  const [displayInformation, setDisplayInformation] = useState(false);
  const [displayBorderlandExplanation, setDisplayBorderlandExplanation] = useState(false);

  useEffect(() => {
    if (!displayInformation && width < 900) {
      setDisplayInformation(true);
    }
  }, [width, displayInformation]);

  const borderlandExplanation = (
    <Text as="p" sx={{ ...styles.desc, margin: 0, marginBottom: '20px' }}>
      [𝗿𝗲]vent is a mini-burn organised by the Copenhagen's [𝗿𝗲]connect community. It is our yearly coming together
      to [𝗿𝗲]𝖼𝗈𝗇𝗇𝖾𝖼𝗍, [𝗿𝗲]𝗂𝗆𝖺𝗀𝗂𝗇𝖾, [𝗿𝗲]𝗂𝗇𝗏𝗂𝗀𝗈𝗋𝖺𝗍𝖾. To [𝗿𝗲]𝗅𝖺𝗍𝖾, [𝗿𝗲]𝗌𝗉𝖾𝖼𝗍 and [𝗿𝗲]𝖼𝖾𝗂𝗏𝖾.
    </Text>
  );

  let mainContent = (
    <>
      <Heading as="h1" sx={styles.heroTitle}>
        Welcome<br></br>home.
      </Heading>
    </>
  );

  const outToCome = `<out>-<to come>`;

  const againToCome = `<again>-<to come>`;
  if (displayInformation) {
    mainContent = (
      <>
        {borderlandExplanation}
        <Text as="span" sx={{ ...styles.desc, ...styles.titleInline, display: 'inline' }}>
          E-vent&nbsp;
        </Text>
        <Text as="p" sx={{ ...styles.desc, display: 'inline' }}>
          , from latin 𝑒𝑥-𝑣𝑒𝑛𝑖𝑟𝑒 ({outToCome}), that which happens.
        </Text>
        <br></br>

        <Text as="span" sx={{ ...styles.desc, ...styles.titleInline, display: 'inline' }}>
          Re-vent&nbsp;
        </Text>
        <Text as="p" sx={{ ...styles.desc, display: 'inline' }}>
          , ({againToCome}), that which happens again.
        </Text>
      </>
    );
  }
  return (
    <Box sx={styles.bannerContent({ clickable: !displayInformation })} onClick={() => setDisplayInformation(true)}>
      <Heading as="h4" sx={styles.dateDescription}>
        [re]vent | 19-25 July 2021, Copenhagen
      </Heading>
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
      transform: 'scale(1.2)',
    },
  },
  newSection: {
    width: '100%',
    height: '100%',
    backgroundPosition: 'top center',
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
  dateDescription: {
    paddingBottom: '20px',
    borderBottom: '1px solid #ccc',
    marginBottom: '20px',
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
      'linear-gradient(to top,rgba(255,255,255,0.87),rgba(255,255,255,0.86),rgba(255,255,255,0.85),rgba(255,255,255,0.8))',
  },
  bannerContent: ({ clickable }) => ({
    animation: `${shake} 3s linear 3s infinite`,
    cursor: clickable ? 'pointer' : 'initial',
    // backgroundColor: rgba('#fff', 0.7),
    // boxShadow: ['0px 10px 16px rgba(52, 61, 72, 0.12)', null, null, null, 'none'],
    maxWidth: [null, null, '80vw', '70vw', '60vw', '50vw'],
    // maxHeight: '40vh',
    padding: ['20px', '30px', null, null, null, '25px 35px 40px', '35px 40px 55px'],
    borderRadius: 40,
    m: 'auto auto',
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
      animation: `none`,
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
