import React from 'react';
import Cone from './Cone';
import EndZone from './EndZone';

const FrisbeePitch = ({ children }) => {
  const conePositions = [
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
    'endzone-top-left',
    'endzone-top-right',
    'endzone-bottom-left',
    'endzone-bottom-right',
  ];

  return (
    <div className='px-2'>
      <div className='max-w-sm h-[65vh] bg-[#6BA368] relative mx-auto my-5 border-5 border-white rounded-lg'>
        {/* End Zones */}
        <EndZone position='top-0' text='Attacking End Zone' />
        <EndZone position='bottom-0' text='Defending End Zone' />

        {/* Midline */}
        <div className='w-full h-0.5 bg-white absolute top-1/2 left-0 -translate-y-1/2' />

        {/* Cones */}
        {conePositions.map((position) => (
          <Cone key={position} position={position} />
        ))}

        {children}
      </div>
    </div>
  );
};

export default FrisbeePitch;
