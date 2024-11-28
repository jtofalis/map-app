import React, { useEffect, useRef, useState } from 'react';

const MainTitle = () => {
  const [fontSize, setFontSize] = useState(100);
  const [text, setText] = useState('');
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const MIN_FONT_SIZE = 12;

  useEffect(() => {
    if (!text) {
      setFontSize(40);
      return;
    }

    const checkSize = () => {
      if (!inputRef.current || !containerRef.current) return;

      const input = inputRef.current;
      const container = containerRef.current;

      let currentSize = 40;
      input.style.fontSize = `${currentSize}px`;

      while (input.scrollWidth > container.clientWidth && currentSize > MIN_FONT_SIZE) {
        currentSize--;
        input.style.fontSize = `${currentSize}px`;
      }

      setFontSize(currentSize);
    };

    checkSize();
  }, [text]);

  return (
    <div ref={containerRef}>
      <input
        ref={inputRef}
        type='text'
        value={text}
        placeholder='TEAM 1 VS TEAM 2'
        onChange={(e) => setText(e.target.value)}
        style={{ fontSize: `${fontSize}px` }}
        className='w-full mt-5 h-full p-2 text-center font-bold text-black bg-transparent border-none outline-none'
      />
    </div>
  );
};

export default MainTitle;
