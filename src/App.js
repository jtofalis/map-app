import React, { Fragment, useState } from 'react';
import BarChart from './components/BarChart/BarChart';
import Buttons from './components/Buttons';
import FrisbeePitch from './components/Pitch/FrisbeePitch';
import PlayerDot from './components/PlayerDot';
import PositionHeatmapPoint from './components/PositionHeatmapPoint';
import SavedPositionsLines from './components/SavedPositionsLines';
import Toggle from './components/Toggles';

const UltimateFrisbeePitch = () => {
  const [positions, setPositions] = useState({
    thrower: { x: 95, y: 300 },
    catcher: { x: 95, y: 50 },
  });

  const [showArrows, setShowArrows] = useState(true);
  const [showPlayers, setShowPlayers] = useState(true);
  const [showThrows, setShowThrows] = useState(true);
  const [showCatches, setShowCatches] = useState(true);
  const [savedPositions, setSavedPositions] = useState([]);
  const [title, setTitle] = useState('');

  const handleDrag = (player, e, data) => {
    setPositions((prev) => ({
      ...prev,
      [player]: { x: data.x, y: data.y },
    }));
  };

  const handleSave = () => {
    setSavedPositions((prevSaved) => [...prevSaved, { ...positions }]);
  };

  const handleRemoveLast = () => {
    setSavedPositions((prevPositions) => prevPositions.slice(0, -1));
  };

  const handleClearAll = () => {
    setSavedPositions([]);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <div className='w-full h-[75vh] font-helvetica bg-[#2f3e46] pb-[9vh]'>
        <input
          type='text'
          placeholder='TEAM 1 VS TEAM 2'
          value={title}
          onChange={handleTitleChange}
          className='w-full mt-5 text-4xl text-center font-bold text-white bg-transparent border-none outline-none'
        />

        <FrisbeePitch>
          {showArrows && <SavedPositionsLines savedPositions={savedPositions} />}

          {savedPositions.map((savedPos, index) => (
            <Fragment key={index}>
              {showCatches && (
                <PositionHeatmapPoint x={savedPos.catcher.x} y={savedPos.catcher.y} throwerOrCatcher='catcher' />
              )}
              {showThrows && (
                <PositionHeatmapPoint x={savedPos.thrower.x} y={savedPos.thrower.y} throwerOrCatcher='thrower' />
              )}
            </Fragment>
          ))}

          {showPlayers && (
            <PlayerDot
              player='catcher'
              onDrag={(e, data) => handleDrag('catcher', e, data)}
              defaultPosition={positions.catcher}
            />
          )}
          {showPlayers && (
            <PlayerDot
              player='thrower'
              onDrag={(e, data) => handleDrag('thrower', e, data)}
              defaultPosition={positions.thrower}
            />
          )}
        </FrisbeePitch>

        <BarChart savedPositions={savedPositions} />

        <div className='w-full h-[10vh] my-0 mx-0 mb-24 bg-[#cad2c5] grid grid-cols-2'>
          <Toggle
            setShowArrows={setShowArrows}
            showArrows={showArrows}
            setShowPlayers={setShowPlayers}
            showPlayers={showPlayers}
            setShowThrows={setShowThrows}
            showThrows={showThrows}
            setShowCatches={setShowCatches}
            showCatches={showCatches}
          />
        </div>
      </div>
      <Buttons handleClearAll={handleClearAll} handleSave={handleSave} handleRemoveLast={handleRemoveLast} />
    </>
  );
};

export default UltimateFrisbeePitch;
