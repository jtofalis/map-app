import { getDistance } from './getDistance';

export const getDistanceCategory = (position) => {
  const distance = getDistance(position.thrower.x, position.thrower.y, position.catcher.x, position.catcher.y);

  if (distance < 110) {
    return 'short';
  } else if (distance > 150) {
    return 'long';
  } else {
    return 'medium';
  }
};
