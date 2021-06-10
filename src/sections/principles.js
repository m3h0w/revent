/** @jsx jsx */
import React from 'react';
import { jsx, Box, Container, Heading, Text, Button } from 'theme-ui';
import { rgba } from 'polished';

import civicResponsibility from 'assets/images/principles/white/wick-white-civic-responsibility.svg';
import communalEffort from 'assets/images/principles/white/wick-white-communal-effort.svg';
import decommodification from 'assets/images/principles/white/wick-white-decommodification.svg';
import gifting from 'assets/images/principles/white/wick-white-gifting.svg';
import immediacy from 'assets/images/principles/white/wick-white-immediacy.svg';
import leaveNoTrace from 'assets/images/principles/white/wick-white-leaving-no-trace.svg';
import participation from 'assets/images/principles/white/wick-white-participation.svg';
import inclusion from 'assets/images/principles/white/wick-white-radical-inclusion.svg';
import radicalSelfExpression from 'assets/images/principles/white/wick-white-radical-self-expression.svg';
import radicalSelfReliance from 'assets/images/principles/white/wick-white-radical-self-reliance.svg';
import Feature from 'components/cards/feature';
import { Link } from 'components/link';
import { RiArrowRightSLine } from 'react-icons/ri';
import { navigate } from 'gatsby'; //import navigate from gatsby

const data = {
  feature: [
    {
      icon: civicResponsibility,
      title: 'Civic responsibility',
      description: `Some description`,
    },
    {
      icon: communalEffort,
      title: 'Communal effort',
      description: `Some description`,
    },
    {
      icon: decommodification,
      title: 'Decommodification',
      description: `Some description`,
    },
    {
      icon: gifting,
      title: 'Gifting',
      description: `Some description`,
    },
    {
      icon: immediacy,
      title: 'Immediacy',
      description: `Some description`,
    },
    {
      icon: leaveNoTrace,
      title: 'Leave no trace',
      description: `Some description`,
    },
    {
      icon: participation,
      title: 'Participation',
      description: `Some description`,
    },
    {
      icon: inclusion,
      title: 'Inclusion',
      description: `Some description`,
    },
    {
      icon: radicalSelfExpression,
      title: 'Radical self expression',
      description: `Some description`,
    },
    {
      icon: radicalSelfReliance,
      title: 'Radical self reliance',
      description: `Some description`,
    },
  ],
};

export default function Principles() {
  const [currentSideModal, setCurrentSideModal] = React.useState('');

  return (
    <Box as="section" id="principles" sx={styles.section}>
      <div sx={styles.customShapeDividerTop}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Container>
        {/* <Box sx={styles.topContentWrapper}>

          <Text>Test</Text>
        </Box> */}
        <Box sx={styles.contentWrapper}>
          <Heading as="h2" sx={styles.title}>
            Co-create with us!
          </Heading>
          <hr></hr>
          [RE]vent is a one-week 200-people co-created communal event that aims at creating a magical space that
          allows us to grow and engage in self- and other-exploration. [RE]vent has many faces and aspects and it
          is for all participants to find out what experience they want to create, but our focus lies on exploring
          how to relate authentically with ourselves and others.
          <Box sx={styles.spacer}></Box>
          <Button variant="muted" sx={styles.button} onClick={() => navigate('/what-is-revent')}>
            Tell me more!
          </Button>
          <hr></hr>
          {/* <Box sx={styles.featureWrapper}> */}A burn is not a festival — it is a co-created event in which all
          participants are invited to bring their own gifts and skills to build a magical place together.
          <hr></hr>
          That’s why we don’t sell tickets but memberships: they grant you access to [RE]vent and also invite you
          to co-create it.
          <hr></hr>
          At the same time memberships are the financial backbone of the burn — all income will flow into renting
          the space and equipment, funding dreams, and anything else we need for [RE]vent.
          {/* {data?.feature?.map((feature, i) => (
              <Feature
                key={i}
                data={{ title: feature.title, icon: feature.icon }}
                onClick={() => setCurrentSideModal(feature.title)}
              />
            ))} */}
          {/* </Box> */}
          <Box sx={styles.spacer}></Box>
          <Button variant="muted" sx={styles.button} onClick={() => navigate('/memberships')}>
            How do I join?
          </Button>
        </Box>
      </Container>
      {/* {currentSideModal ? (
        <Box sx={styles.sideModal}>
          <Box sx={styles.x} onClick={() => setCurrentSideModal('')}>
            x
          </Box>
          <Feature data={data?.feature?.find((f) => f.title === currentSideModal)} clickable={false} />
        </Box>
      ) : null} */}
    </Box>
  );
}

const styles = {
  x: {
    position: 'absolute',
    right: '10px',
    top: '-2px',
    fontWeight: 900,
    fontSize: 25,
    cursor: 'pointer',
  },
  button: {
    minHeight: [50, 50, 50, 60],
    fontSize: [14, 14, 16],
    width: '100%',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
    },
    ':hover': {
      svg: {
        ml: '5px',
      },
    },
  },
  sideModal: {
    position: 'fixed',
    left: 0,
    top: '10vh',
    height: '80vh',
    background: '#222',
    backgroundColor: 'rgba(15,15,15,0.9)',
    color: '#fff',
    zIndex: 1000,
    width: '30vw',
    minWidth: '500px',
    padding: '20px 10px',
    transition: 'all 0.3s ease-in-out 0.02s',
  },
  section: {
    backgroundColor: 'secondary',
    backgroundSize: ['100%', null, null, null, 'cover'],
    minHeight: '800px',
    position: 'relative',
  },
  topContentWrapper: {
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    h2: {
      fontSize: [22, null, null, 30, 30, 36, 46],
      lineHeight: [1.6, null, null, 1.41],
      fontWeight: [500, null, null, 400],
    },

    p: {
      fontSize: ['15px', null, null, '17px'],
      mt: [3, 3, 3, 5],
    },
  },
  contentWrapper: {
    paddingTop: '50px',
    paddingBottom: '70px',
    fontSize: [18, null, null, 22, 24, 26, 30],
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: [null, null, null, null, '95vh', '95vh'],
  },
  sectionFootNote: {
    color: '#fff',
    position: 'absolute',
    bottom: '40px',
  },
  featureWrapper: {
    color: '#fff',
    gap: ['40px 20px', null, null, '50px', '60px'],
    display: 'grid',
    gridTemplateColumns: ['repeat(2,1fr)', null, null, 'repeat(5,180px)', 'repeat(5,1fr)'],
    justifyContent: ['unset', null, null, 'center', 'flex-start'],
  },
  customShapeDividerTop: {
    zIndex: 2,
    position: 'absolute',
    top: '-50px',
    left: 0,
    width: '100%',
    overflow: 'hidden',
    lineHeight: 0,
    transform: 'rotate(180deg)',
    '& svg': {
      position: 'relative',
      display: 'block',
      width: 'calc(100% + 1.3px)',
      height: '54px',
    },

    '& .shape-fill': {
      fill: 'secondary',
    },
  },
  spacer: {
    height: '50px',
  },
};
