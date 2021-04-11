import { Box, Container, Heading, Image, Text } from '@theme-ui/components';
import React, { useEffect, useState } from 'react';
import Participation from 'assets/images/principles/white/wick-white-participation.svg';
import ProgressBar from '@ramonak/react-progress-bar';
import useWindowSize from 'utils/useWindowSize';
import IWantToHelpButton from 'components/IWantToHelp';

const Crowdfunding = () => {
  const { width, height } = useWindowSize();
  const [mixBlendModeIsSupported, setMixBlendModeIsSupported] = useState(false);
  useEffect(() => {
    setMixBlendModeIsSupported(window.getComputedStyle(document.body).mixBlendMode !== undefined);
  }, [setMixBlendModeIsSupported]);
  return (
    <Box id='crowdfunding' as='section' sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.headingWrapper}>
          {/* <Text sx={styles.slogan} as='p'>
            Want to help?
          </Text> */}
          <Heading sx={styles.title}>Crowdfunding campaign</Heading>
          <Text sx={styles.description} as='p'>
            So that sounds perfect, right? The thing that makes it only ‘almost perfect’ is: all that magixx costs
            monies, monies. The land costs SEK 6 million and we only have SEK 1.1 million from the memberships donated
            last year. This leaves us with SEK 5 million to raise. And the bidding for the land starts in just 2 weeks,
            on April 19th. So, we need YOU!
          </Text>
          <div sx={styles.spacer} />
          {/* {children} */}
        </Box>
        <Box as='div' sx={styles.progressContainer({ width: width / 2 })}>
          <Heading sx={styles.title}>Progress: 1 166 183 / 6 000 000 SEK</Heading>
          <ProgressBar
            completed={Number(((1666 / 6000) * 100).toFixed(0))}
            bgColor='#0FE6E6'
            height='40px'
            width={width / 2}
            labelAlignment='center'
            labelColor='#ffffff'
            margin='0 0 10px 0'
          />
          <Text sx={styles.description} as='p'>
            Backers: 157
          </Text>
          <Text sx={styles.description} as='p'>
            Days left: 10
          </Text>
          <Text sx={styles.description} as='p'>
            Minimum funding goal: 2 500 000 SEK
          </Text>
        </Box>
        <IWantToHelpButton />
        <Image
          loading='lazy'
          src={Participation}
          alt={'communal effort'}
          sx={{
            mixBlendMode: mixBlendModeIsSupported ? 'soft-light' : 'none',
            opacity: mixBlendModeIsSupported ? 1 : 0.4,
            ...styles.decorativeImage,
          }}
        />
      </Container>
    </Box>
  );
};

const styles = {
  section: {
    width: '100%',
    minHeight: '4v00px',
    position: 'relative',
    pt: [30, 30, 40, 50, 60],
    pb: [60, 60, 60, 90, 80, 120],
    zIndex: 1,
    overflow: 'hidden',

    '&::before': {
      content: '""',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      opacity: '.9',
      zIndex: '-1',
      backgroundColor: '#fa7500',
      backgroundImage:
        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='32' viewBox='0 0 16 32'%3E%3Cg fill='%230fe6e6' fill-opacity='0.13'%3E%3Cpath fill-rule='evenodd' d='M0 24h4v2H0v-2zm0 4h6v2H0v-2zm0-8h2v2H0v-2zM0 0h4v2H0V0zm0 4h2v2H0V4zm16 20h-6v2h6v-2zm0 4H8v2h8v-2zm0-8h-4v2h4v-2zm0-20h-6v2h6V0zm0 4h-4v2h4V4zm-2 12h2v2h-2v-2zm0-8h2v2h-2V8zM2 8h10v2H2V8zm0 8h10v2H2v-2zm-2-4h14v2H0v-2zm4-8h6v2H4V4zm0 16h6v2H4v-2zM6 0h2v2H6V0zm0 24h2v2H6v-2z'/%3E%3C/g%3E%3C/svg%3E\")",
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressContainer: (props) => ({ width: props.width, marginBottom: '20px' }),
  decorativeImage: {
    position: 'absolute',
    bottom: ['-50%', '-50%', '-50%', '-60%', '-60%', '-80%'],
    left: '-49%',
    zIndex: 5,
    // mixBlendMode: 'difference',
    // opacity: 1,
    pointerEvents: 'none',
  },
  heading: {
    mb: [30, 30, 40, 60],
  },
  headingWrapper: {
    maxWidth: 584,
    margin: '0 auto 60px',
    textAlign: 'center',
  },
  slogan: {
    color: (theme) => theme.colors.primary,
    fontSize: 25,
    fontWeight: 500,
    lineHeight: 2.22,
  },
  title: {
    color: '#fff',
    fontSize: [21, null, null, 30],
    fontWeight: 700,
    lineHeight: 1.68,
    letterSpacing: 'heading',
    marginBottom: '10px',
  },
  description: {
    color: '#fff',
    fontSize: 17,
    lineHeight: 1.65,
    // color: (theme) => theme.colors.text,
  },
  spacer: {
    height: '20px',
  },
};

export default Crowdfunding;
