import React from 'react';

const FloatingNumbers = ({ savedPositions }) => {
  return (
    <svg className="absolute inset-0 w-full h-full translate-x-[6%] translate-y-[3%]">
      {savedPositions.map((save, index) => {
        const midX = (save.thrower.x + save.catcher.x) / 2;
        const midY = (save.thrower.y + save.catcher.y) / 2;

        return (
          <g
            key={`number-${index}`}
            className="cursor-pointer"
          >
            <circle cx={midX} cy={midY} r={10} className="fill-gray-200" />
            <text
              x={midX}
              y={midY}
              className="fill-black"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {index}
            </text>
          </g>
        );
      })}
    </svg>
  );
};

export default FloatingNumbers;
