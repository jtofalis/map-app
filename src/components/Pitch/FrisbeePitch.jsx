import React from 'react';
import EndZone from './EndZone';

const FrisbeePitch = ({ children }) => {

  return (
    <div className='px-2'>
      <div className='max-w-xs drop-shadow-xl h-[60vh] bg-[#6BA368] relative mx-auto border-4 border-slate-300'>
        {/* End Zones */}
        <EndZone position='top-0' text='Attacking End Zone' />
        <EndZone position='bottom-0' text='Defending End Zone' />

        {/* Midline */}
        <div className='w-full h-0.5 bg-slate-300 absolute top-1/2 left-0 -translate-y-1/2' />

        {/* End Zone Borders */}
        <div className='w-full h-0.5 bg-slate-300 absolute top-[20%] left-0' />
        <div className='w-full h-0.5 bg-slate-300 absolute bottom-[20%] left-0' />

        {children}
      </div>
    </div>
  );
};

export default FrisbeePitch;
