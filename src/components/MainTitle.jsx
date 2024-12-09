import { Edit } from '@mui/icons-material';
import React from 'react';
import { Textfit } from 'react-textfit';
import { useAppContext } from '../utils/AppContext';

const MainTitle = () => {
  const { sessionName, setShowSetNameModal } = useAppContext();
  return (
    <Textfit mode='single' max={48} className='p-2 text-center font-bold text-gray-400 w-full max-w-[500px]'>
      {sessionName || 'Team 1 vs Team 2'}
      <Edit className='ml-2 text-gray-300' onClick={() => setShowSetNameModal(true)} />
    </Textfit>
  );
};

export default MainTitle;
