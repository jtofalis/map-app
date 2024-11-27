import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonGroupComponent({
  setShowArrows, showArrows,
  setShowPlayers, showPlayers,
  setShowThrows, showThrows,
  setShowCatches, showCatches,
  setShowNumbers, showNumbers,
}) {
  // Create state variables for each toggle
  const [alignment, setAlignment] = React.useState({
    players: showPlayers,
    throws: showThrows,
    arrows: showArrows,
    catches: showCatches,
    numbers: showNumbers
  });

  const handleChange = (event, newAlignment) => {
    // Update the state based on the clicked button
    setAlignment((prev) => {
      const newState = { ...prev, [newAlignment]: !prev[newAlignment] };
      switch (newAlignment) {
        case 'players':
          setShowPlayers(!prev.players);
          break;
        case 'throws':
          setShowThrows(!prev.throws);
          break;
        case 'arrows':
          setShowArrows(!prev.arrows);
          break;
        case 'catches':
          setShowCatches(!prev.catches);
          break;
        case 'numbers':
          setShowNumbers(!prev.numbers);
          break;
        default:
          break;
      }
      return newState;
    });
  };

  return (
    <div className="flex justify-center">
      <ToggleButtonGroup className=''
        color="primary"
        exclusive
        sx={{
          display: 'flex',
          flexWrap: 'wrap',  // Allow buttons to wrap to the next line
          gap: 1,  // Add space between buttons
          maxWidth: '100%',  // Ensure it does not overflow the container
          justifyContent: 'center',  // Center the buttons horizontally
        }}
      >
        <ToggleButton
          value="players"
          selected={alignment.players}
          onChange={handleChange}
        >
          Players
        </ToggleButton>
        <ToggleButton
          value="arrows"
          selected={alignment.arrows}
          onChange={handleChange}
        >
          Arrows
        </ToggleButton>
        <ToggleButton
          value="throws"
          selected={alignment.throws}
          onChange={handleChange}
        >
          Throws
        </ToggleButton>
        <ToggleButton
          value="catches"
          selected={alignment.catches}
          onChange={handleChange}
        >
          Catches
        </ToggleButton>
        <ToggleButton
          value="numbers"
          selected={alignment.numbers}
          onChange={handleChange}
        >
          Numbers
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
