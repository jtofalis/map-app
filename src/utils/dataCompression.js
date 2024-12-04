export const compress = (data) => {
  return data
    .map((state) => {
      const { thrower, catcher } = state;
      return `${thrower.x},${thrower.y},${catcher.x},${catcher.y}`;
    })
    .join('|');
};

export const decompress = (str) => {
  return str.split('|').map((state) => {
    const [tx, ty, cx, cy] = state.split(',').map(Number);
    return {
      thrower: { x: tx, y: ty },
      catcher: { x: cx, y: cy },
    };
  });
};
