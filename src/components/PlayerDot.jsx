import React from 'react';
import Draggable from 'react-draggable';

const PlayerDot = ({ onDrag, player, defaultPosition }) => {
  const imageSrc = player === 'thrower' ? 'thrower.png' : 'catcher.png';
  const playerLabel = player === 'thrower' ? 'Thrower' : 'Catcher';

  return (
    <Draggable bounds="parent" onDrag={onDrag} defaultPosition={defaultPosition}>
      <div className="flex flex-col items-center absolute cursor-pointer">
        <img
          src={imageSrc}
          alt={playerLabel}
          className="w-12 h-12 rounded-full translate-x-[-50%] translate-y-[-50%]"
        />
        <span className="text-white font-bold text-xs text-center -mt-1 translate-x-[-50%] translate-y-[-50%]">
          {playerLabel}
        </span>
      </div>
    </Draggable>
  );
};

export default PlayerDot;
