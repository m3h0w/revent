/** @jsx jsx */
import { rgba } from 'polished';
import { useState, useRef, useEffect } from 'react';
import { jsx, Box, Container, Image, Heading, Text, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Progressbar from 'components/progressbar';
import Feature from 'components/cards/feature';
import expand from 'assets/images/icons/expand.png';
import users from 'assets/images/icons/users.png';
import wifi from 'assets/images/icons/wifi.png';
import slider1 from 'assets/images/features/1.jpg';
import slider2 from 'assets/images/features/2.jpg';
import slider3 from 'assets/images/features/3.jpg';

import SwiperCore, { Autoplay, Pagination, EffectFade } from 'swiper';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import MapWithPhotos from 'components/mapWithPhotos';

import { MdPhotoSizeSelectSmall } from 'react-icons/md';
import { FaPeopleCarry, FaTrain } from 'react-icons/fa';
import { BiLandscape } from 'react-icons/bi';
import { GiTrumpet, GiWoodPile, GiSoccerField } from 'react-icons/gi';
import { AiFillEyeInvisible } from 'react-icons/ai';
import IWantToHelpButton from 'components/IWantToHelp';

SwiperCore.use([Autoplay, Pagination, EffectFade]);

const data = {
  feature: [
    {
      id: 1,
      icon: (props) => <MdPhotoSizeSelectSmall {...props} />,
      title: '42 ha',
      description: `It's huge! There is an almost endless space for new buildings, projects, and, of course, Borderland`,
    },
    {
      id: 2,
      icon: (props) => <FaPeopleCarry {...props} />,
      title: 'Friendly municipality',
      description: `We won't have to worry about local government's support`,
    },
    {
      id: 3,
      icon: (props) => <BiLandscape {...props} />,
      title: 'Magical, hilly, diverse landscape!',
      description: 'Inspiring and wast - perfect for all your unfulfilled dreams and potential realities',
    },
    {
      id: 4,
      icon: (props) => <GiTrumpet {...props} />,
      title: 'Passed the trumpet test',
      description: 'Playing a trumpet while running around naked, without attracting neighbours attention',
    },
    {
      id: 5,
      icon: (props) => <GiWoodPile {...props} />,
      title: 'Infinite wood supply',
      description: 'The forest, if taken care of, should provide plenty of wood for art projects',
    },
    {
      id: 6,
      icon: (props) => <GiSoccerField {...props} />,
      title: 'Open fields',
      description: 'For big tents, small tents, football games - you name it',
    },
    {
      id: 7,
      icon: (props) => <AiFillEyeInvisible {...props} />,
      title: 'Valleys',
      description: 'Hidden, isolated, magical spots for sound camps and the like',
    },
    {
      id: 8,
      icon: (props) => <FaTrain {...props} />,
      title: 'Easy to reach',
      description: 'By train: Gothenborg 2h, Stockholm 2h, Copenhagen 3h, Oslo 5h',
    },
  ],
};

const FeaturedSpace = () => {
  const isPause = useRef(false);
  const swiperRef = useRef(null);
  const [togglePlay, setTogglePlay] = useState(false);
  const [currentWidth, setCurrentWidth] = useState(0);

  let time = 3;
  let tick, percentTime;

  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 10);
  }

  function interval() {
    if (isPause.current === false) {
      percentTime += 1 / (time + 0.1);
      setCurrentWidth(percentTime);
      if (percentTime >= 100) {
        swiperRef.current && swiperRef.current.swiper.slideNext();
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    setCurrentWidth(0);
    clearTimeout(tick);
  }

  useEffect(() => {
    startProgressbar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleToggle = () => {
    isPause.current = !isPause.current;
    setTogglePlay((prev) => !prev);
  };

  return (
    <Box id="land" as="section" sx={styles.section}>
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
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <SectionHeading
              sx={styles.heading}
              title="We found a perfect land in Sweden and We NEED YOU to help make it happen!"
              description="We need to raise 418,602 EUR to bid for the land in 2 weeks, on April 19th.
              Do you want to help build this utopian dream? It will be collectively owned by a foundation and
              your donation will make you a member who has access to the land."
            >
              <IWantToHelpButton />
            </SectionHeading>
          </Box>
          <Box sx={styles.rightContent}>
            {/* <Progressbar
              sx={styles.progressbar}
              togglePlay={togglePlay}
              handleClick={handleToggle}
              currentWidth={currentWidth}
            /> */}
            <MapWithPhotos sizeMultiplier={3 / 8} />
            {/* <Swiper loop={true} effect='fade' ref={swiperRef} spaceBetween={0} slidesPerView={1} pagination={true}>
              {data?.gallery?.map((item) => (
                <SwiperSlide key={item.id}>
                  <Box as='figure' sx={styles.image}>
                    <Image loading='lazy' src={item.image} alt='' />
                    <Box as='figcaption'>
                      <Box>
                        <Heading as='h4'>{item.title}</Heading>
                        <Text as='p'>{item.desc}</Text>
                      </Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper> */}
          </Box>
        </Box>
        <Box sx={styles.featureWrapper}>
          {data?.feature?.map((feature) => (
            <Feature key={feature.id} data={feature} clickable={false} parisienne={false} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedSpace;

const styles = {
  section: {
    pt: [30, null, null, null, 80],
    pb: [30, null, null, 50, 80],
    position: 'relative',
    // overflowX: 'hidden',
  },
  contentWrapper: {
    gap: [0, 0, 0, 0, '30px'],
    display: ['flex', null, null, null, 'grid'],
    alignItems: 'center',
    flexDirection: ['column', null, null, null, null],
    gridTemplateColumns: ['unset', null, null, null, 'repeat(2,1fr)'],
    overflowX: 'hidden',
  },
  leftContent: {
    m: [0, '30px 0px 0', '30px 50px 0', 0],
  },
  heading: {
    textAlign: ['center', null, null, null, 'left'],
    maxWidth: 490,
    margin: ['0 auto 40px', null, null, null, '0 0 80px'],
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
  featureWrapper: {
    gap: ['40px 20px', null, null, null, '30px'],
    display: 'grid',
    gridTemplateColumns: ['repeat(2,1fr)', null, null, 'repeat(4,180px)', 'repeat(4,1fr)'],
    justifyContent: ['unset', null, null, 'center', 'flex-start'],
    marginTop: '40px',
  },
  rightContent: {
    position: 'relative',
    mt: [6, 6, 6, 6, 0],
    maxWidth: '100%',
    '.swiper-pagination-bullets': {
      bottom: 20,
    },
    '.swiper-pagination-bullet': {
      backgroundColor: 'rgba(255,255,255,0.5)',
      width: 10,
      height: 10,
      opacity: 1,
      mx: 5,
      ':focus': {
        outline: 0,
      },
    },
    '.swiper-pagination-bullet-active': {
      backgroundColor: 'rgba(255,255,255,1)',
    },
  },
  progressbar: {
    position: 'absolute',
    left: [15, 25],
    top: [46, 53],
    zIndex: 2,
  },
  progressBar: {
    position: 'relative',
    mr: 4,
  },
  toggleButton: {
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    display: 'flex',
    padding: 0,
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    '&:focus': {
      outline: '0 none',
    },
  },
  image: {
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-start',
    '> img': {
      borderRadius: 10,
    },
    figcaption: {
      backgroundColor: 'primary',
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      left: 0,
      top: 30,
      borderRadius: 5,
      color: '#fff',
      padding: ['20px 20px 20px 80px', '25px 25px 25px 90px'],
      h4: {
        lineHeight: 1,
        fontWeight: 'bold',
        fontSize: [14, 18],
        letterSpacing: 'heading',
      },
      p: {
        fontSize: [13, 16],
        fontWeight: 500,
        letterSpacing: 'heading',
        color: rgba('#fff', 0.6),
        marginTop: [2],
      },
    },
  },
  customShapeDividerTop: {
    zIndex: 2,
    position: 'absolute',
    top: '-50px',
    left: 0,
    width: '100%',
    overflow: 'hidden',
    lineHeight: 0,
    transform: 'rotateX(180deg)',
    '& svg': {
      position: 'relative',
      display: 'block',
      width: 'calc(100% + 1.3px)',
      height: '54px',
    },

    '& .shape-fill': {
      fill: '#fff',
    },
  },
};
