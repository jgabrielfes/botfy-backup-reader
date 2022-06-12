import React from 'react';
import { useSelector } from 'react-redux';
import MAppBar from '../../components/connected/MAppBar';
import MDrawer from '../../components/connected/MDrawer';
import Content from '../../components/connected/Content';

const Connected = () => {
  const { chats } = useSelector(state => state.configs);

  return (
    <>
      {chats.length !== 0 && <MAppBar />}
      <MDrawer />
      <Content />
    </>
  )
}

export default Connected;
