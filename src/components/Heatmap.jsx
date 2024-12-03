import h337 from 'heatmap.js';
import { useEffect, useMemo, useState } from 'react';

const Heatmap = ({ savedPositions, showThrows, showCatches, pitchRef }) => {
  const [heatmap, setHeatmap] = useState(() => {
    if (!pitchRef.current) return;

    return h337.create({
      container: pitchRef.current,
    });
  });

  useEffect(() => {
    if (!pitchRef.current) return;

    setHeatmap(h337.create({
      container: pitchRef.current,
    }));
  }, [pitchRef])

  const throwDataPoints = useMemo(() => {
    return savedPositions.map((position) => position.thrower);
  }, [savedPositions])

  const catchDataPoints = useMemo(() => {
    return savedPositions.map((position) => position.catcher);
  }, [savedPositions])

  useEffect(() => {
    if (!pitchRef.current || !heatmap) return;

    const points = [];
    let max = 0;

    if (showThrows) {
      throwDataPoints.forEach((point) => {
        const val = 1;
        max = Math.max(max, val);
        const pointData = {
          x: point.x,
          y: point.y,
          value: val
        };
        points.push(pointData);
      });
    }
    if (showCatches) {
      catchDataPoints.forEach((point) => {
        const val = 1;
        max = Math.max(max, val);
        const pointData = {
          x: point.x,
          y: point.y,
          value: val
        };
        points.push(pointData);
      });
    }

    const data = {
      max: max,
      data: points
    };

    heatmap.setData(data);
    heatmap.repaint();
  }, [throwDataPoints, catchDataPoints, pitchRef, showThrows, showCatches, heatmap])

  return null
};

export default Heatmap;
