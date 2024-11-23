// // Wide border around pitch
// // cones?
// // save button saves as file
// Estimated analysis
// toggle arrows
// all negative or level is it's own thing?

import React, { Fragment, useState } from 'react';
import Buttons from './components/Buttons';
import FrisbeePitch from './components/FrisbeePitch';
import PlayerDot from './components/PlayerDot';
import PositionHeatmapPoint from './components/PositionHeatmapPoint';
import PositionSummary from './components/PositionSummary';
import SavedPositionsLines from './components/SavedPositionsLines';

const UltimateFrisbeePitch = () => {
  // State to track the positions of the draggable elements
  const [positions, setPositions] = useState({
    thrower: { x: 0, y: 0 },
    catcher: { x: 0, y: 0 },
  });

  const [showArrows, setShowArrows] = useState(true);

  // State to track a list of saved positions
  const [savedPositions, setSavedPositions] = useState([]);

  // Update the position of a player
  const handleDrag = (player, e, data) => {
    setPositions((prev) => ({
      ...prev,
      [player]: { x: data.x, y: data.y },
    }));
  };

  // Save the current positions
  const handleSave = () => {
    // Save the current positions to the list
    setSavedPositions((prevSaved) => [...prevSaved, { ...positions }]);
  };

  const handleRemoveLast = () => {
    setSavedPositions((prevPositions) => prevPositions.slice(0, -1));
  };

  const handleClearAll = () => {
    setSavedPositions([]);
  };

  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  console.log(savedPositions);

  return (
    <div style={styles.top70}>
      <div>
        <input
          type='text'
          placeholder='TEAM 1 VS TEAM 2'
          value={title}
          onChange={handleChange}
          style={styles.topTitle}
        />
        <FrisbeePitch>
          {showArrows && <SavedPositionsLines savedPositions={savedPositions} />}

          {savedPositions.map((savedPos, index) => (
            <Fragment key={index}>
              <PositionHeatmapPoint x={savedPos.thrower.x} y={savedPos.thrower.y} throwerOrCatcher='thrower' />
              <PositionHeatmapPoint x={savedPos.catcher.x} y={savedPos.catcher.y} throwerOrCatcher='catcher' />
            </Fragment>
          ))}

          <PlayerDot player='thrower' onDrag={(e, data) => handleDrag('thrower', e, data)} />
          <PlayerDot player='catcher' onDrag={(e, data) => handleDrag('catcher', e, data)} />
        </FrisbeePitch>
        <PositionSummary savedPositions={savedPositions} />
        <Buttons
          handleClearAll={handleClearAll}
          handleSave={handleSave}
          handleRemoveLast={handleRemoveLast}
          handleToggleArrows={() => setShowArrows((prev) => !prev)}
        />
      </div>
    </div>
  );
};

const styles = {
  liveinfo: {
    textAlign: 'center',
    fontSize: '16px',
    marginTop: '20px',
  },
  savedinfo: {
    textAlign: 'center',
    marginBottom: '100px',
    fontSize: '16px',
    marginTop: '20px',
  },
  top70: {
    width: '100%',
    height: '70vh',
    backgroundColor: '#F5F5DC',
    paddingBottom: '9vh',
  },
  topTitle: {
    fontSize: '2rem', // Similar to h1
    overflow: 'hidden',
    width: '100%',
    marginTop: '20px',
    textAlign: 'center',
    fontWeight: 'bold',
    border: 'none', // Remove the box
    outline: 'none', // Remove focus border
    backgroundColor: 'transparent', // Transparent background for a cleaner look
  },
};

export default UltimateFrisbeePitch;
