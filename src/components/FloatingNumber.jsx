import DeleteIcon from '@mui/icons-material/Delete';
import SwitchIcon from '@mui/icons-material/SwapHoriz';
import { Popover } from '@mui/material';
import React, { useMemo, useRef, useState } from 'react';
import Popup from './Popup';

const FloatingNumber = ({ savedPosition, index, setSavedPositions }) => {
  const midX = useMemo(() => (savedPosition.thrower.x + savedPosition.catcher.x) / 2, [savedPosition]);
  const midY = useMemo(() => (savedPosition.thrower.y + savedPosition.catcher.y) / 2, [savedPosition]);

  const anchorRef = useRef(null);
  const [isPopoverOpen, setPopoverOpen] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);

  const switchThrowerAndCatcher = (savedPosition) => {
    const thrower = savedPosition.thrower;
    const catcher = savedPosition.catcher;
    return {
      ...savedPosition,
      thrower: catcher,
      catcher: thrower,
    };
  };

  const handleDelete = () => {
    setSavedPositions((prev) => prev.filter((_, i) => i !== index));
    setPopoverOpen(false);
    setDialogOpen(false);
  };

  return (
    <>
      <div
        ref={anchorRef}
        onClick={() => setPopoverOpen(true)}
        className='cursor-pointer absolute z-10'
        style={{ left: `${midX}px`, top: `${midY}px` }}
      >
        <svg width='20' height='20' x={midX - 10} y={midY - 10}>
          <g>
            <circle cx='10' cy='10' r='10' className='fill-gray-200' />
            <text x='10' y='10' className='fill-black' textAnchor='middle' dominantBaseline='middle'>
              {index + 1}
            </text>
          </g>
        </svg>
      </div>

      <Popover
        open={isPopoverOpen}
        anchorEl={anchorRef.current}
        onClose={() => setPopoverOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        slotProps={{
          paper: {
            elevation: 4,
          },
        }}
      >
        <div className='p-4'>
          <h2 className='text-lg text-center'>Throw {index + 1}</h2>
          <button
            type='button'
            aria-label='Delete Saved Throw'
            title='Delete Saved Throw'
            className='p-2 hover:text-red-500 rounded hover:bg-gray-100'
            onClick={() => setDialogOpen(true)}
          >
            <DeleteIcon className='fill-current' />
          </button>
          <button
            type='button'
            aria-label='Switch Thrower and Catcher Positions'
            title='Switch Thrower and Catcher Positions'
            className='p-2 hover:text-blue-500 rounded hover:bg-gray-100'
            onClick={() => {
              setSavedPositions((prev) => prev.map((pos, i) => (i === index ? switchThrowerAndCatcher(pos) : pos)));
            }}
          >
            <SwitchIcon className='fill-current' />
          </button>
        </div>
      </Popover>

      {/* Confirmation Dialog */}
      <Popup
        description={`Are you sure you want to delete this saved throw (#${index + 1})?`}
        open={isDialogOpen}
        setOpen={setDialogOpen}
        onConfirm={handleDelete}
      />
    </>
  );
};

export default FloatingNumber;
