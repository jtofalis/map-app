import React, { useEffect, useRef } from 'react';
import heatmapjs from 'heatmap.js';

const Heatmap = ({ positions, showThrows, showCatches }) => {
  const heatmapContainerRef = useRef(null);

  useEffect(() => {
    // Initialize the heatmap instance
    const heatmapInstance = heatmapjs.create({
      container: heatmapContainerRef.current,
      radius: 20,
      maxOpacity: 0.6,
      minOpacity: 0.1,
      blur: 0.9,
    });

    // Prepare the data points for the heatmap
    const points = [];

    // Add points for thrower and catcher if enabled
    if (showThrows) {
      points.push({
        x: positions.thrower.x,
        y: positions.thrower.y,
        value: 1, // You can adjust the value depending on the weight of the heatmap point
      });
    }

    if (showCatches) {
      points.push({
        x: positions.catcher.x,
        y: positions.catcher.y,
        value: 1,
      });
    }

    // Set the data for the heatmap
    heatmapInstance.setData({
      max: 1,
      min: 0,
      data: points,
    });

    // Cleanup the heatmap instance when the component unmounts
    return () => {
      heatmapInstance.destroy();
    };
  }, [positions, showThrows, showCatches]);

  return (
    <div
      ref={heatmapContainerRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none', // Allow clicks to pass through the heatmap
      }}
    />
  );
};

export default Heatmap;
