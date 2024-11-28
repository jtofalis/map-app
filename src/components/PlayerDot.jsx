import React from 'react';
import Draggable from 'react-draggable';

const PlayerDot = ({ onDrag, player, defaultPosition }) => {
  const imageSrc = player === 'thrower' ? 'thrower.png' : 'catcher.png';
  const playerLabel = player === 'thrower' ? 'Thrower' : 'Catcher';

  const handleDrag = (e, data) => {
    const isMediaScreen = window.matchMedia('(min-width: 768px)').matches;
    if (isMediaScreen) {
      const rotatedData = {
        ...data,
        deltaY: data.deltaX,
        deltaX: data.deltaY,
        lastX: data.lastY,
        lastY: data.lastX,
        x: data.y,
        y: data.x
      };
      console.log('data', data, 'rotatedData', rotatedData)
      onDrag(e, rotatedData);
    } else {
      onDrag(e, data);
    }
  };

  return (
    <Draggable
      bounds="parent"
      axis={window.matchMedia('(min-width: 768px)').matches ? 'both' : 'x'}
      onDrag={handleDrag}
      defaultPosition={defaultPosition}
    >
      <div className="flex flex-col md:flex-row items-center absolute cursor-pointer">
        <img
          src={imageSrc}
          alt={playerLabel}
          className="w-12 h-12 rounded-full pointer-events-none md:-rotate-90"
        />
        <span className="text-white font-bold text-xs text-center -mt-1 md:-ml-2 md:-rotate-90">
          {playerLabel}
        </span>
      </div>
    </Draggable>
  );
};

export default PlayerDot;
