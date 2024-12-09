import React from 'react';
import { Textfit } from 'react-textfit';
import { useAppContext } from '../utils/AppContext';

const MainTitle = () => {
  const { sessionName, setShowSetNameModal } = useAppContext();
  return (
    <Textfit mode='single' max={48} className='px-4 pt-2 text-center font-bold text-gray-400 w-full max-w-[500px] mx-auto cursor-pointer' onClick={() => setShowSetNameModal(true)}>
      {sessionName || 'Team 1 vs Team 2'}
    </Textfit>
  );
};

export default MainTitle;
