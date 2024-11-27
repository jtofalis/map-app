import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useEffect, useState } from 'react';
import titleize from 'titleizejs';

export default function ToggleButtonGroupComponent({
  setShowArrows, showArrows,
  setShowPlayers, showPlayers,
  setShowThrows, showThrows,
  setShowCatches, showCatches,
  setShowNumbers, showNumbers,
}) {
  // Single object to track all toggle states
  const [toggleStates, setToggleStates] = useState({
    players: showPlayers,
    throws: showThrows,
    arrows: showArrows,
    catches: showCatches,
    numbers: showNumbers
  });

  // Object that maps toggle names to their setter functions
  const setterFunctions = {
    players: setShowPlayers,
    throws: setShowThrows,
    arrows: setShowArrows,
    catches: setShowCatches,
    numbers: setShowNumbers
  };

  const handleChange = (event) => {
    const toggleName = event.target.value;

    setToggleStates(prev => {
      // Create new state object
      const newStates = { ...prev };

      // Handle the special case: turning on numbers requires arrows
      if (toggleName === 'numbers' && !prev.numbers && !prev.arrows) {
        newStates.numbers = true;
        newStates.arrows = true;
        setShowArrows(true);
        setShowNumbers(true);
        return newStates;
      }

      // Normal toggle behavior
      newStates[toggleName] = !prev[toggleName];
      setterFunctions[toggleName](!prev[toggleName]);

      // If turning off arrows, also turn off numbers
      if (toggleName === 'arrows' && !newStates.arrows && prev.numbers) {
        newStates.numbers = false;
        setShowNumbers(false);
      }

      return newStates;
    });
  };

  // Keep numbers in sync with arrows
  useEffect(() => {
    if (!showArrows && toggleStates.numbers) {
      setToggleStates(prev => ({ ...prev, numbers: false }));
      setShowNumbers(false);
    }
  }, [showArrows, setToggleStates, setShowNumbers, toggleStates]);

  // Render the toggle buttons
  return (
    <div className="flex justify-center">
      <ToggleButtonGroup
        color="primary"
        exclusive
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          maxWidth: '100%',
          justifyContent: 'center',
        }}
      >
        {[
          'players',
          'arrows',
          'throws',
          'catches',
          'numbers',
        ].map((value) => (
          <ToggleButton
            key={value}
            value={value}
            selected={toggleStates[value]}
            onChange={handleChange}
          >
            {titleize(value)}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
