import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import ActionButton from './ActionButton';

const Buttons = ({ handleSave, handleClearAll, showNumbers, setShowNumbers, showArrows, setShowArrows }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized((prev) => !prev);
  };

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
    <div className="fixed bottom-0 mx-auto w-full max-w-screen-">
      <div className="flex justify-center items-center p-1 bg-gray-100 shadow-md">
        <button
          onClick={toggleMinimize}
          className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-800"
        >
          {isMinimized ? (
            <>
              <KeyboardArrowUp /> Show
            </>
          ) : (
            <>
              <KeyboardArrowDown /> Hide
            </>
          )}
        </button>
      </div>

      {/* Button Bar */}
      {!isMinimized && (
        <div className="w-full grid grid-cols-3 gap-4 justify-between p-3 bg-white shadow-lg">
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
      )}
    </div>
  );
};

export default Buttons;
