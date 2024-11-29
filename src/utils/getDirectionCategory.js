import { getDirection } from './getDirection';

export const getDirectionCategory = (position) => {
  const direction = getDirection(position.thrower.x, position.catcher.x);

  if (direction < 90) {
    return 'sameThird';
  } else if (direction > 195) {
    return 'crossPitch';
  } else {
    return 'crossThird';
  }
};
