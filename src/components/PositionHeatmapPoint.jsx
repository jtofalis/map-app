import React from 'react';

const PositionHeatmapPoint = ({ x, y, throwerOrCatcher }) => {
  const dynamicStyles = {
    left: `${x}px`,
    top: `${y}px`,
    background: `radial-gradient(circle, ${
      throwerOrCatcher === 'thrower' ? 'rgba(0, 0, 255, 0.1)' : 'rgba(255, 0, 0, 0.25)'
    } 20%, transparent 80%)`
  };

  return (
    <div
      className="absolute w-24 h-24 rounded-full -translate-x-1/2 -translate-y-1/2 bg-no-repeat bg-cover"
      style={dynamicStyles}
    />
  );
};

export default PositionHeatmapPoint;
