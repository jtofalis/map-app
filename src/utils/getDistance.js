export const getDistance = (throwerX, throwerY, catcherX, catcherY) => {
  return Math.round(Math.sqrt((throwerX - catcherX) ** 2 + (throwerY - catcherY) ** 2));
};
