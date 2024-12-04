const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._^`';
const baseCount = CHARS.length;

const toBase = (num) => {
  if (num === 0) return CHARS[0];
  let result = '';
  while (num > 0) {
    result = CHARS[num % baseCount] + result;
    num = Math.floor(num / baseCount);
  }
  // Pad single characters with leading 'A'
  return result.length === 1 ? 'A' + result : result;
};

const fromBase = (str) => {
  if (str.length === 1) {
    return CHARS.indexOf(str);
  }

  const first = CHARS.indexOf(str[0]);
  const second = CHARS.indexOf(str[1]);

  return first * baseCount + second;
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
    const chunks = state.match(/.{2}/g); // Always expect pairs now
    const [tx, ty, cx, cy] = chunks.map(fromBase);

    return {
      thrower: { x: tx, y: ty },
      catcher: { x: cx, y: cy },
    };
  });
};
