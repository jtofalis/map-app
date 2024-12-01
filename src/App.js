import React, { Fragment, useState } from 'react';
import BarChart from './components/BarChart/BarChart';
import Buttons from './components/Buttons';
import FloatingNumber from './components/FloatingNumber';
import FrisbeePitch from './components/Pitch/FrisbeePitch';
import PlayerDot from './components/PlayerDot';
import PositionHeatmapPoint from './components/PositionHeatmapPoint';
import SavedPositionsLine from './components/SavedPositionsLine';
import MainTitle from './components/MainTitle';
import Toggle from './components/Toggles';

const UltimateFrisbeePitch = () => {
  const [positions, setPositions] = useState({
    thrower: { x: 95, y: 300 },
    catcher: { x: 95, y: 50 },
  });

  const [showNumbers, setShowNumbers] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
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

  const handleClearAll = () => {
    setSavedPositions([]);
  };

  return (
    <>
      <div className='w-full max-w-screen-lg mx-auto h-[120vh] font-helvetic pb-[9vh]'>
        <MainTitle />
        <FrisbeePitch>
          {savedPositions.map((savedPos, index) => (
            <Fragment key={(savedPositions, index)}>
              {showNumbers && (
                <FloatingNumber savedPosition={savedPos} index={index} setSavedPositions={setSavedPositions} />
              )}
              {showArrows && 
                <SavedPositionsLine savedPosition={savedPos}/>}

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
        <div className="w-full max-w-md mx-auto px-10 py-4">
          <BarChart savedPositions={savedPositions} />
        </div>
        <div className="w-full max-w-md mx-auto">
<Toggle
  setShowArrows={setShowArrows}
  showArrows={showArrows}
  setShowPlayers={setShowPlayers}
  showPlayers={showPlayers}
  setShowThrows={setShowThrows}
  showThrows={showThrows}
  setShowCatches={setShowCatches}
  showCatches={showCatches}
  setShowNumbers={setShowNumbers}
  showNumbers={showNumbers}
/>
</div>
  </div>
    <Buttons
      handleClearAll={handleClearAll}
      handleSave={handleSave}
      showNumbers={showNumbers}
      setShowNumbers={setShowNumbers}
      showArrows={showArrows}
      setShowArrows={setShowArrows}
    />
      <div className="saved-positions-container mt-4">
      {/* <ul className="list-disc pl-5">
        {savedPositions.map((savedPos, index) => (
          <li key={index} className="mb-2">
            <strong>Position {index + 1}:</strong>
            <div>
              <p><strong>Thrower:</strong> x: {savedPos.thrower.x}, y: {savedPos.thrower.y}</p>
              <p><strong>Catcher:</strong> x: {savedPos.catcher.x}, y: {savedPos.catcher.y}</p>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
    </>
  );
};

export default UltimateFrisbeePitch;
