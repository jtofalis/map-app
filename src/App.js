import React, { Fragment, useState } from 'react';
import BarChart from './components/BarChart/BarChart';
import Buttons from './components/Buttons';
import FloatingNumber from './components/FloatingNumber';
import FrisbeePitch from './components/Pitch/FrisbeePitch';
import PlayerDot from './components/PlayerDot';
import PositionHeatmapPoint from './components/PositionHeatmapPoint';
import SavedPositionsLine from './components/SavedPositionsLine';
import MainTitle from './components/Title';
import Toggle from './components/Toggles';
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

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
  const [expanded, setExpanded] = useState(false);
  const handleChange = () => {
    setExpanded(!expanded);
  };
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
              {showArrows && <SavedPositionsLine savedPosition={savedPos} />}

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
        <div className="w-full max-w-md mx-auto p-4">
      <Accordion
        expanded={expanded}
        onChange={handleChange}
        className="shadow-lg rounded-lg border-2 border-gray-300"
      >
        <AccordionSummary
          expandIcon={expanded ? <ExpandLess /> : <ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className="bg-blue-500 text-white"
        >
          <div className="flex items-center justify-between w-full">
            <span className="text-lg">Analysis</span>
            <span>{expanded ? 'Collapse' : 'Expand'}</span>
          </div>
        </AccordionSummary>
        <AccordionDetails className="bg-gray-100">
        <BarChart savedPositions={savedPositions} />        </AccordionDetails>
      </Accordion>
    </div>
        <div>

          
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
        <Buttons
          handleClearAll={handleClearAll}
          handleSave={handleSave}
          showNumbers={showNumbers}
          setShowNumbers={setShowNumbers}
          showArrows={showArrows}
          setShowArrows={setShowArrows}
        />
      </div>
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
