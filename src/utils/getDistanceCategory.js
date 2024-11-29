import { getDistance } from './getDistance';

export const getDistanceCategory = (position) => {
  const distance = getDistance(position.thrower.x, position.thrower.y, position.catcher.x, position.catcher.y);

  if (distance < 130) {
    return 'short';
  } else if (distance > 240) {
    return 'long';
  } else {
    return 'medium';
  }
};
