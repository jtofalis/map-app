import React, { useRef } from 'react';
import Heatmap from '../Heatmap';
import EndZone from './EndZone';

const FrisbeePitch = ({ children, savedPositions }) => {
  const pitchRef = useRef()

  return (
    <div className='mx-auto border-4 border-slate-300 max-w-xs relative' >
      <div className='max-w-full drop-shadow-xl h-[60vh] bg-[#6BA368] relative'>

        {/* End Zones */}
        <EndZone position='top-0' text='Attacking End Zone' />
        <EndZone position='bottom-0' text='Defending End Zone' />

        {/* End Zone Borders */}
        <div className='w-full h-0.5 bg-slate-300 absolute top-[20%] left-0' />
        <div className='w-full h-0.5 bg-slate-300 absolute bottom-[20%] left-0' />

        {/* Vertical Dashed Lines for Thirds */}
        <div className='h-full w-0.5 bg-transparent border-l-2 border-dashed border-slate-300 opacity-50 absolute top-0 left-[33%]' />
        <div className='h-full w-0.5 bg-transparent border-l-2 border-dashed border-slate-300 opacity-50 absolute top-0 left-[66%]' />
        <div className='absolute inset-0' ref={pitchRef}></div>
        <Heatmap savedPositions={savedPositions} pitchRef={pitchRef}/>

        {children}
      </div>

    </div>
  );
};

export default FrisbeePitch;
