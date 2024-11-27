import React, { Fragment, useState } from 'react';
import BarChart from './components/BarChart/BarChart';
import Buttons from './components/Buttons';
import FrisbeePitch from './components/Pitch/FrisbeePitch';
import PlayerDot from './components/PlayerDot';
import PositionHeatmapPoint from './components/PositionHeatmapPoint';
import SavedPositionsLines from './components/SavedPositionsLines';
import FloatingNumbers from './components/FloatingNumbers';
import Toggle from './components/Toggles';
import MainTitle from './components/Title';

const UltimateFrisbeePitch = () => {
  const [positions, setPositions] = useState({
    thrower: { x: 95, y: 300 },
    catcher: { x: 95, y: 50 },
  });

  const [showNumbers, setShowNumbers] = useState(false);
  const [showArrows, setShowArrows] = useState(true);
  const [showPlayers, setShowPlayers] = useState(true);
  const [showThrows, setShowThrows] = useState(true);
  const [showCatches, setShowCatches] = useState(true);
  const [savedPositions, setSavedPositions] = useState([]);

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

  return (
    <>
      <div className='w-full h-[120vh] font-helvetic pb-[9vh]'>
      <MainTitle/>
        <FrisbeePitch>
        {showArrows && <SavedPositionsLines savedPositions={savedPositions} />}

          {savedPositions.map((savedPos, index) => (
            <Fragment key={(savedPositions, index)}>
              {showNumbers && (
                <FloatingNumbers savedPositions={savedPositions}/>
              )}
            
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
        <div>
        <Toggle
          setShowArrows={setShowArrows}   showArrows={showArrows}
          setShowPlayers={setShowPlayers} showPlayers={showPlayers}
          setShowThrows={setShowThrows}   showThrows={showThrows}
          setShowCatches={setShowCatches} showCatches={showCatches}
          setShowNumbers={setShowNumbers} showNumbers={showNumbers}
        />
      </div>
      <Buttons handleClearAll={handleClearAll} 
               handleSave={handleSave} 
               handleRemoveLast={handleRemoveLast} />
               </div>
    </>
  );
};

export default UltimateFrisbeePitch;
