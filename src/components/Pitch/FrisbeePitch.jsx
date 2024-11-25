import React from 'react';
import Cone from './Cone';
const EndZone = ({ position, text }) => (
  <div className={`w-full h-20 bg-[#4C8C4A] absolute text-center text-white font-bold leading-[80px] ${position}`}>
    {text}
  </div>
);


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
    <div className='w-[60vw] h-[55vh] bg-[#6BA368] relative mx-auto my-5 border-5 border-white rounded-lg'>
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
  );
};

export default FrisbeePitch;
