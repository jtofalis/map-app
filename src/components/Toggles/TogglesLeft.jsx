import React from 'react';

const ToggleLeft = ({setShowArrows, showArrows, 
                 setShowPlayers, showPlayers}) => {
  
  const handleArrowChange = (e) => {
    setShowArrows(e.target.checked);
  };

  const handlePlayerChange = (e) => {
    setShowPlayers(e.target.checked);
  };

  return (
    <div
      style={{
        display: 'grid',
        fontFamily: "Helvetica",
        color: '#2f3e46',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
        <div
          style={{ position: 'relative', display: 'inline-block', width: '40px', height: '20px' }}
          onClick={() => {
            const newValue = !showPlayers;
            setShowPlayers(newValue);
          }}>
          <input
            type='checkbox'
            onChange={handlePlayerChange}
            checked={showPlayers}
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
              backgroundColor: showPlayers ? '#2196F3' : 'black',
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
                left: showPlayers ? '22px' : '2px',
                bottom: '2px',
                backgroundColor: 'white',
                transition: '0.2s',
                borderRadius: '50%',
              }}
            />
          </span>
        </div>
        <label
          style={{cursor: 'pointer'}}
          onClick={() => {
            const newValue = !showPlayers;
            setShowPlayers(newValue);
          }}
        >
          Show Players
        </label>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'left', alignItems: 'center', gap: '8px' }}>
        <div
          style={{ position: 'relative', display: 'inline-block', width: '40px', height: '20px' }}
          onClick={() => {
            const newValue = !showArrows;
            setShowArrows(newValue);
          }}>
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
              backgroundColor: showArrows ? '#2196F3' : 'black',
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
          style={{cursor: 'pointer'}}
          onClick={() => {
            const newValue = !showArrows;
            setShowArrows(newValue);
          }}
        >
          Show Arrows
        </label>
      </div>


    </div>
  );
};

export default ToggleLeft;

