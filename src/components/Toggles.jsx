import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtonGroupComponent({
  setShowArrows,
  showArrows,
  setShowPlayers,
  showPlayers,
  setShowThrows,
  showThrows,
  setShowCatches,
  showCatches,
}) {
  // Create state variables for each toggle
  const [alignment, setAlignment] = React.useState({
    players: showPlayers,
    throws: showThrows,
    arrows: showArrows,
    catches: showCatches,
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
        default:
          break;
      }
      return newState;
    });
  };

  return (
    <div className="flex justify-center">
      <ToggleButtonGroup
        color="primary"
        exclusive
        aria-label="show-options"
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
      </ToggleButtonGroup>
    </div>
  );
}
