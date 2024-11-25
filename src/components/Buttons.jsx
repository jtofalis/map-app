import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import UndoIcon from '@mui/icons-material/Undo';
import React from 'react';
import ActionButton from './ActionButton';

const Buttons = ({ handleSave, handleRemoveLast, handleClearAll }) => {
  const buttons = [
    {
      label: 'Clear',
      onClick: handleClearAll,
      Icon: DeleteIcon,
    },
    {
      label: 'Undo',
      onClick: handleRemoveLast,
      Icon: UndoIcon,
    },
    {
      label: 'Add',
      onClick: handleSave,
      Icon: AddIcon,
    },
  ];

  return (
    <div className='fixed bottom-0 left-0 right-0 grid grid-cols-3 gap-4 justify-between p-3 bg-white shadow-lg'>
      {buttons.map((button) => (
        <ActionButton key={button.label} onClick={button.onClick} label={button.label} Icon={button.Icon} />
      ))}
    </div>
  );
};

export default Buttons;
