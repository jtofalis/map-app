import h337 from 'heatmap.js';
import { useEffect, useMemo } from 'react';

const Heatmap = ({ savedPositions, showThrows, showCatches, pitchRef }) => {

  const throwDataPoints = useMemo(() => {
    return savedPositions.map((position) => position.thrower);
  }, [savedPositions])

  const catchDataPoints = useMemo(() => {
    return savedPositions.map((position) => position.catcher);
  }, [savedPositions])

  console.log(throwDataPoints, catchDataPoints)
  useEffect(() => {
    if (!pitchRef.current) return;

    const heatmapInstance = h337.create({
      container: pitchRef.current,
    });

    console.log('heatmapInstance', heatmapInstance)
    // now generate some random data
    const points = [];
    let max = 0;

    if (true) {
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
    if (true) {
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

    // heatmap data format
    const data = {
      max: max,
      data: points
    };

    // if you have a set of datapoints always use setData instead of addData
    // for data initialization
    console.log(pitchRef.current, data)
    heatmapInstance.setData(data);
  }, [throwDataPoints, catchDataPoints, pitchRef, showThrows, showCatches])


  return null
};

export default Heatmap;
