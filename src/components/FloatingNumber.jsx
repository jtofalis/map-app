import DeleteIcon from '@mui/icons-material/Delete';
import { Popover } from '@mui/material';
import React, { useMemo, useRef, useState } from 'react';

const FloatingNumber = ({ savedPosition, index, setSavedPositions }) => {
  const midX = useMemo(() => (savedPosition.thrower.x + savedPosition.catcher.x) / 2, [savedPosition]);
  const midY = useMemo(() => (savedPosition.thrower.y + savedPosition.catcher.y) / 2, [savedPosition]);

  // Create separate refs for both the SVG and the popover anchor
  const anchorRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        ref={anchorRef}
        onClick={() => setIsOpen(true)}
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
        open={isOpen}
        anchorEl={anchorRef.current}
        onClose={() => setIsOpen(false)}
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
        <div className='p-2'>
          <button
            type='button'
            aria-label='Delete Saved Throw'
            className='p-2 hover:text-red-500 rounded hover:bg-gray-100'
            onClick={() => {
              if (!window.confirm('Are you sure you want to delete this saved throw?')) return;
              setSavedPositions((prev) => prev.filter((_, i) => i !== index));
              setIsOpen(false);
            }}
          >
            <DeleteIcon className='fill-current' />
          </button>
        </div>
      </Popover>
    </>
  );
};

export default FloatingNumber;
