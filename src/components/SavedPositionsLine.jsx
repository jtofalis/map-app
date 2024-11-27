import React from 'react';

const SavedPositionsLine = ({ savedPosition }) => {
  return (
    <svg className='absolute inset-0 w-full h-full translate-x-[6%] translate-y-[3%]'>
      <defs>
        <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='9' refY='3.5' orient='auto'>
          <polygon points='0 0, 10 3.5, 0 7' className='fill-black' />
        </marker>
      </defs>
      <line
        x1={savedPosition.thrower.x}
        y1={savedPosition.thrower.y}
        x2={savedPosition.catcher.x}
        y2={savedPosition.catcher.y}
        className='stroke-black stroke-[1.5] opacity-20'
        markerEnd='url(#arrowhead)'
      />
    </svg>
  );
};

export default SavedPositionsLine;
