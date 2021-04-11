import { Button } from '@theme-ui/components';
import React from 'react';

const IWantToHelpButton = ({ stylesOverwrite }) => {
  return (
    <a
      href='https://memberships.theborderland.se/borderland-land/crowdfunder/'
      target='_blank'
      rel='noreferrer'
      sx={{ ...stylesOverwrite, ...styles.link }}
    >
      <Button variant='primaryMd'>I want to help</Button>
    </a>
  );
};

const styles = {
  link: {
    textDecoration: 'none',
  },
};

export default IWantToHelpButton;
