import React from 'react';
import MAppBar from '../../components/connected/MAppBar';
import MDrawer from '../../components/connected/MDrawer';
import Content from '../../components/connected/Content';

function Connected() {
  return (
    <>
      <MAppBar />
      <MDrawer />
      <Content />
    </>
  );
}

export default Connected;
