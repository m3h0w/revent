/** @jsx jsx */
import { rgba } from 'polished';
import { jsx, Box, Heading, Text, Image } from 'theme-ui';
import theme from 'theme-ui';

const Feature = ({ data: feature, key, clickable = true }) => {
  return (
    <Box key={key} sx={styles.featureItem({ clickable })}>
      {/* <Image loading='lazy' src={feature.icon} alt={feature.title} /> */}
      {typeof feature.icon === 'function' ? (
        feature.icon({ size: '3em' })
      ) : (
        <Image loading='lazy' src={feature.icon} alt={feature.title} />
      )}
      <Heading as='h3'>{feature.title}</Heading>
      <Text as='p'>{feature.description}</Text>
    </Box>
  );
};

export default Feature;

const styles = {
  featureItem: (props) => ({
    transition: 'all 0.3s ease-in-out 0.02s',
    textAlign: ['center', null, null, null, 'left'],
    h3: {
      lineHeight: 1.1,
      fontWeight: 700,
      letterSpacing: 'heading',
      fontSize: [18, null, null, null, null, 20],
      marginBottom: '5px',
    },
    p: {
      color: 'inherit',
      fontSize: [null, null, null, null, 14, 15],
      lineHeight: 1.47,
    },
    ':hover': {
      cursor: props.clickable ? 'pointer' : 'initial',
      filter: 'invert(27%) sepia(1) saturate(6) hue-rotate(140deg) brightness(104%) contrast(97%)',
      transform: 'scale(1.1)',
    },
  }),
};
