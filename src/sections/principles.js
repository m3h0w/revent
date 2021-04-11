/** @jsx jsx */
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

const data = {
  feature: [
    {
      icon: civicResponsibility,
      title: 'Civic responsibility',
      description: `It's huge! There is an almost endless space for new buildings, projects, and, of course, Borderland`,
    },
    {
      icon: communalEffort,
      title: 'Communal effort',
      description: `We won't have to worry about local government's support`,
    },
    {
      icon: decommodification,
      title: 'Decommodification',
      description: 'Direct connection to god. Miracles guaranteed.',
    },
    {
      icon: gifting,
      title: 'Gifting',
      description: 'Direct connection to god. Miracles guaranteed.',
    },
    {
      icon: immediacy,
      title: 'Immediacy',
      description: 'Direct connection to god. Miracles guaranteed.',
    },
    {
      icon: leaveNoTrace,
      title: 'Leave no trace',
      description: 'Direct connection to god. Miracles guaranteed.',
    },
    {
      icon: participation,
      title: 'Participation',
      description: 'Direct connection to god. Miracles guaranteed.',
    },
    {
      icon: inclusion,
      title: 'Inclusion',
      description: 'Direct connection to god. Miracles guaranteed.',
    },
    {
      icon: radicalSelfExpression,
      title: 'Radical self expression',
      description: 'Direct connection to god. Miracles guaranteed.',
    },
    {
      icon: radicalSelfReliance,
      title: 'Radical self reliance',
      description: 'Direct connection to god. Miracles guaranteed.',
    },
  ],
};

export default function Principles() {
  return (
    <Box as='section' id='principles' sx={styles.section}>
      <div sx={styles.customShapeDividerTop}>
        <svg data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'>
          <path
            d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
            opacity='.25'
            class='shape-fill'
          ></path>
          <path
            d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
            opacity='.5'
            class='shape-fill'
          ></path>
          <path
            d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
            class='shape-fill'
          ></path>
        </svg>
      </div>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.featureWrapper}>
            {data?.feature?.map((feature, i) => (
              <Feature key={i} data={feature} />
            ))}
          </Box>
        </Box>
        <Box sx={styles.spacer}></Box>
      </Container>
    </Box>
  );
}

const styles = {
  section: {
    backgroundColor: 'secondary',
    backgroundSize: ['100%', null, null, null, 'cover'],
    minHeight: '800px',
    position: 'relative',
  },
  contentWrapper: {
    display: 'flex',
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
