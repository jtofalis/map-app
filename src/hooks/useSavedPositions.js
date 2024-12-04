import { useEffect, useState } from 'react';
import { URL_PARAM_NAME } from '../App';
import { decompress } from '../utils/dataCompression';

export const useSavedPositions = () => {
  const [savedPositions, setSavedPositions] = useState([]);

  useEffect(() => {
    const url = new URL(window.location.href);
    const urlPositions = url.searchParams.get(URL_PARAM_NAME);
    if (urlPositions) {
      const positions = decompress(urlPositions);
      setSavedPositions(positions);
    }
  }, []);

  return [savedPositions, setSavedPositions];
};
