import React from 'react';

const SavedPositionsLines = ({ savedPositions }) => {
  return (
    <svg className="absolute inset-0 w-full h-full translate-x-[6%] translate-y-[3%]">
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon points="0 0, 10 3.5, 0 7" className="fill-black" />
        </marker>
      </defs>
      {savedPositions.map((save, index) => (
        <line
          key={`line-${index}`}
          x1={save.thrower.x}
          y1={save.thrower.y}
          x2={save.catcher.x}
          y2={save.catcher.y}
          className="stroke-black stroke-[1.5] opacity-20"
          markerEnd="url(#arrowhead)"
        />
      ))}
    </svg>
  );
};

export default SavedPositionsLines;
