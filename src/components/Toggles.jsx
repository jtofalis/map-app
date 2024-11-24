import React from 'react';

const Toggle = ({setShowArrows, showArrows }) => {
  const handleArrowChange = (e) => {
    setShowArrows(e.target.checked);
  };
  return (
    <div
      style={{
        background: '#dcf5f5',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'grid',
        gridTemplateColumns: 'repeat(, 1fr)',
        justifyContent: 'space-between',
        padding: '10px',
        backgroundColor: 'white',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
        <div
          style={{ position: 'relative', display: 'inline-block', width: '40px', height: '20px' }}
          onClick={() => {
            const newValue = !showArrows;
            setShowArrows(newValue);
          }}
        >
          <input
            type='checkbox'
            onChange={handleArrowChange}
            checked={showArrows}
            style={{
              opacity: 0,
              width: '0',
              height: '0',
              position: 'absolute',
            }}
          />
          <span
            style={{
              position: 'absolute',
              cursor: 'pointer',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: showArrows ? '#2196F3' : '#ccc',
              transition: 'background-color 0.2s',
              borderRadius: '34px',
            }}
          >
            <span
              style={{
                position: 'absolute',
                content: '""',
                height: '16px',
                width: '16px',
                left: showArrows ? '22px' : '2px',
                bottom: '2px',
                backgroundColor: 'white',
                transition: '0.2s',
                borderRadius: '50%',
              }}
            />
          </span>
        </div>
        <label
          style={{ cursor: 'pointer' }}
          onClick={() => {
            const newValue = !showArrows;
            setShowArrows(newValue);
          }}
        >
          Show Markings
        </label>
      </div>
    </div>
  );
};

export default Toggle;
