import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';
import ActionButton from './ActionButton';

const Buttons = ({ handleSave, handleClearAll, showNumbers, setShowNumbers, showArrows, setShowArrows }) => {
  const buttons = [
    {
      label: 'Clear',
      onClick: handleClearAll,
      Icon: DeleteIcon,
    },
    {
      label: 'Edit',
      onClick: () => {
        if (!showNumbers && !showArrows) {
          setShowArrows(true);
          setShowNumbers(true);
        } else {
          setShowNumbers(!showNumbers);
        }
      },
      Icon: EditIcon,
      selected: showNumbers,
    },
    {
      label: 'Add',
      onClick: handleSave,
      Icon: AddIcon,
    },
  ];


  return (
    <div className='fixed bottom-0 mx-auto w-full max-w-screen-lg grid grid-cols-3 gap-4 justify-between p-3 bg-white shadow-lg'>
      {buttons.map((button) => (
        <ActionButton
          key={button.label}
          onClick={button.onClick}
          label={button.label}
          Icon={button.Icon}
          selected={button.selected}
          disabled={button.disabled}
        />
      ))}
    </div>
  );
};

export default Buttons;
