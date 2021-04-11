import React from 'react';
import useWindowSize from 'utils/useWindowSize';

const MapWithPhotos = ({ sizeMultiplier }) => {
  const { width } = useWindowSize();

  return (
    <iframe
      width={width * sizeMultiplier}
      height={width * sizeMultiplier}
      src='https://www.google.com/maps/d/embed?mid=1HbKApGZNdlMBsSqKuPnTPwO4m0Sh-QHh'
    ></iframe>
  );
};

export default MapWithPhotos;
