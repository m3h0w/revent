/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image } from 'theme-ui';
import { rgba } from 'polished';

import Select from 'components/select';
import bannerBg from 'assets/images/banner-bg.jpg';
import mapMarker from 'assets/images/icons/map-marker.png';
import theme from 'gatsby-plugin-theme-ui/index';
import communalEffort from 'assets/images/principles/white/wick-white-communal-effort.svg';

export default function Banner() {
  return (
    <Box as='section' id='home' sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as='h1' sx={styles.heroTitle}>
              A permanent space between dreams and reality
            </Heading>
            <Box sx={styles.dividerLine}></Box>
            <Text as='p' sx={styles.desc}>
              An all-year-round playground for Borderland members to prototype dreams through art, events, workshops,
              and anything else you can imagine. A land to dream about what to do and who to be.
            </Text>
            {/* <Box as="form" onSubmit={handleSubmit}>
              <Select
                id="location"
                label="Find workplace"
                defaultValue={options[1].label}
                sx={styles.select}
                icon={mapMarker}
              >
                {options?.map((option) => (
                  <option value={option.value} key={option.id}>
                    {option.label}
                  </option>
                ))}
              </Select>
              <Button type="submit" sx={styles.button} variant="primary">
                Subscribe
              </Button>
            </Box> */}
          </Box>
        </Box>
      </Container>
      <Image loading='lazy' src={communalEffort} alt={'communal effort'} sx={styles.decorativeImage} />
    </Box>
  );
}

const styles = {
  section: {
    background: `url(${bannerBg}) no-repeat center top / cover`,
    backgroundSize: ['100%', null, null, null, 'cover'],
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'hidden',
  },
  dividerLine: {
    borderBottom: `5px solid ${theme.colors.secondary}`,
    width: '150px',
  },
  contentWrapper: {
    display: 'flex',
    alignItems: 'center',
    minHeight: [null, null, null, null, '100vh', '100vh'],
  },
  bannerContent: {
    backgroundColor: rgba('#fff', 0.7),
    boxShadow: ['0px 10px 16px rgba(52, 61, 72, 0.12)', null, null, null, 'none'],
    maxWidth: '50vw',
    // maxHeight: '40vh',
    padding: ['20px', '30px', null, null, null, '25px 35px 40px', '35px 40px 55px'],
    borderRadius: 5,
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
    lineHeight: [1.4, null, null, null, null, null, 1.57],
    '@media only screen and (min-height: 720px) and (max-height: 760px), (min-width: 1501px) and (max-width: 1560px) ': {
      fontSize: 40,
    },
    marginBottom: 15,
  },
  desc: {
    fontSize: [15, 16, 15, 17],
    lineHeight: [1.53, null, null, 2, 2.4, 2, 2.48],
    maxWidth: '37vw',
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
    bottom: '-70%',
    right: '-49%',
    zIndex: 1,
    opacity: 0.3,
    pointerEvents: 'none',
  },
};
