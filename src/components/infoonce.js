import { Box, Card, Button } from '@theme-ui/components';
import React, { useEffect, useState } from 'react';
import useLocalStorage from 'utils/useLocalStorage';
//

const InfoOnce = ({ id, children }) => {
  const [alreadySeen, setAlreadySeen] = useLocalStorage(`alreadyseen-${id}`, false);
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
  useEffect(() => {
    if (!alreadySeen) {
      setOpen(true);
      setAlreadySeen(true);
    }
  }, []);
  return (
    <Box sx={styles.container} style={{ display: open ? 'flex' : 'none' }}>
      <Card sx={styles.card}>
        <Box sx={styles.close} onClick={closeModal}>
          &times;
        </Box>
        {children}
      </Card>
    </Box>
  );
};

const styles = {
  container: {
    zIndex: 100,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    // position: 'fixed',
    // top: '50%',
    // left: '50%',
    width: '50vw',
    minWidth: '300px',
    position: 'relative',
    backgroundColor: 'white',
    padding: 30,
    color: 'black',
  },
  close: {
    zIndex: 101,
    position: 'absolute',
    right: 0,
    top: '-10px',
    backgrounColor: 'black',
    fontSize: '25px',
    padding: 10,
    cursor: 'pointer',
  },
};

export default InfoOnce;
