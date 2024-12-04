import h337 from 'heatmap.js';
import { useEffect, useMemo, useState } from 'react';

const Heatmap = ({ savedPositions, showThrows, showCatches, pitchRef }) => {
  const [throwHeatmap, setThrowHeatmap] = useState(null);
  const [catchHeatmap, setCatchHeatmap] = useState(null);

  useEffect(() => {
    if (!pitchRef.current) return;
    const container = pitchRef.current;
    // Common config for both heatmaps
    const commonConfig = {
      container,
      radius: 32,
      maxOpacity: 0.8,
      minOpacity: 0,
      blur: 0.85,
    };

    // Create throw heatmap with container div
    const throwContainer = document.createElement('div');
    throwContainer.id = 'throw-heatmap';
    throwContainer.style.cssText = 'top: 0; left: 0; width: 100%; height: 100%;';
    pitchRef.current.appendChild(throwContainer);

    const throwConfig = {
      ...commonConfig,
      container: throwContainer,
      gradient: {
        '0': '#FFFFFF',
        '.3': '#94C6FF',
        '.5': '#3F90FF',
        '.7': '#0B5DBF',
        '.9': '#05367A'
      }
    };

    // Create catch heatmap with container div
    const catchContainer = document.createElement('div');
    catchContainer.id = 'catch-heatmap';
    catchContainer.style.cssText = 'top: 0; left: 0; width: 100%; height: 100%;';
    pitchRef.current.appendChild(catchContainer);

    const catchConfig = {
      ...commonConfig,
      container: catchContainer,
      gradient: {
        '0': '#FFFFFF',
        '.3': '#FFB3B3',
        '.5': '#FF6666',
        '.7': '#CC0000',
        '.9': '#800000'
      }
    };

    setThrowHeatmap(h337.create(throwConfig));
    setCatchHeatmap(h337.create(catchConfig));

    ensureContainerPosition();
    return () => {
      // Clean up
      if (container) {
        throwContainer.remove();
        catchContainer.remove();
      }
    };
  }, [pitchRef]);

  const ensureContainerPosition = () => {
    document.getElementById('throw-heatmap').style.position = 'absolute';
    document.getElementById('catch-heatmap').style.position = 'absolute';
  }


  const throwDataPoints = useMemo(() => {
    return savedPositions.map((position) => position.thrower);
  }, [savedPositions]);

  const catchDataPoints = useMemo(() => {
    return savedPositions.map((position) => position.catcher);
  }, [savedPositions]);

  useEffect(() => {
    if (!pitchRef.current || !throwHeatmap || !catchHeatmap) return;

    // Clear both heatmaps
    throwHeatmap.setData({ data: [], max: 0 });
    catchHeatmap.setData({ data: [], max: 0 });

    // Update throw heatmap
    if (showThrows) {
      const throwCounts = throwDataPoints.reduce((acc, point) => {
        const key = `${point.x}-${point.y}`;
        acc[key] = acc[key] ? acc[key] + 1 : 1;
        return acc;
      }, {});

      const throwPoints = Object.entries(throwCounts).map(([key, value]) => {
        const [x, y] = key.split('-').map(Number);
        return { x, y, value };
      });

      throwHeatmap.setData({
        max: Math.max(...Object.values(throwCounts)),
        data: throwPoints
      });
      throwHeatmap.repaint();
    }

    // Update catch heatmap
    if (showCatches) {
      const catchCounts = catchDataPoints.reduce((acc, point) => {
        const key = `${point.x}-${point.y}`;
        acc[key] = acc[key] ? acc[key] + 1 : 1;
        return acc;
      }, {});

      const catchPoints = Object.entries(catchCounts).map(([key, value]) => {
        const [x, y] = key.split('-').map(Number);
        return { x, y, value };
      });

      catchHeatmap.setData({
        max: Math.max(...Object.values(catchCounts)),
        data: catchPoints
      });
      catchHeatmap.repaint();
    }
    ensureContainerPosition()
  }, [throwDataPoints, catchDataPoints, pitchRef, showThrows, showCatches, throwHeatmap, catchHeatmap]);

  return null;
};

export default Heatmap;
