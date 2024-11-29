export const getDirection = (throwerX, catcherX) => {
  return Math.abs(Math.round(throwerX - catcherX));
};
