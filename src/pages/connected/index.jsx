import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MAppBar from '../../components/connected/MAppBar';
import MDrawer from '../../components/connected/MDrawer';
import Content from '../../components/connected/Content';

const Connected = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { fullContent } = useSelector(state => state.configs);

  return (
    <>
      {fullContent.length !== 0 && <MAppBar handleOpenDrawer={() => setDrawerOpen(true)} />}
      {fullContent.length !== 0 && <MDrawer open={drawerOpen} handleClose={() => setDrawerOpen(false)} />}
      <Content />
    </>
  )
}

export default Connected;
