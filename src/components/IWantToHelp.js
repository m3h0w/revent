import { Button } from '@theme-ui/components';
import React from 'react';

const IWantToHelpButton = ({ stylesOverwrite }) => {
  return (
    <Button
      variant='primaryMd'
      onClick={() => window.open('https://memberships.theborderland.se/borderland-land/crowdfunder/', '_blank')}
    >
      I want to help
    </Button>
  );
};

const styles = {
  link: {
    textDecoration: 'none',
  },
};

export default IWantToHelpButton;
