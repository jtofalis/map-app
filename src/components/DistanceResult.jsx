import { getDistance } from '../utils/getDistance';

const DistanceResult = ({ throwerX, throwerY, catcherX, catcherY }) => {
  const result = getDistance(throwerX, throwerY, catcherX, catcherY);

  // Determine distance category based on the result
  let distanceCategory = 'medium'; // Default category
  if (result < 110) {
    distanceCategory = 'short';
  } else if (result > 150) {
    distanceCategory = 'long';
  }

  return (
    <p>
      {distanceCategory}: {result}
    </p>
  );
};
export default DistanceResult;
