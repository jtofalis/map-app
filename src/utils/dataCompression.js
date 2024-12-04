const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._^`';

const baseCount = CHARS.length;

const toBase = (num) => {
  if (num === 0) return CHARS[0];
  let result = '';
  while (num > 0) {
    result = CHARS[num % baseCount] + result;
    num = Math.floor(num / baseCount);
  }
  return result || CHARS[0];
};

const fromBase = (str) => {
  return str.split('').reduce((acc, char) => {
    return acc * baseCount + CHARS.indexOf(char);
  }, 0);
};

export const compress = (data) => {
  return data
    .map((state) => {
      const { thrower, catcher } = state;
      return [toBase(thrower.x), toBase(thrower.y), toBase(catcher.x), toBase(catcher.y)].join('');
    })
    .join('|');
};

export const decompress = (str) => {
  return str.split('|').map((state) => {
    const chunks = state.match(/.{1,2}/g);
    const [tx, ty, cx, cy] = chunks.map(fromBase);

    return {
      thrower: { x: tx, y: ty },
      catcher: { x: cx, y: cy },
    };
  });
};
