import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useEffect, useState } from 'react';
import titleize from 'titleizejs';

export default function ToggleButtonGroupComponent({
  setShowArrows,
  showArrows,
  setShowPlayers,
  showPlayers,
  setShowThrows,
  showThrows,
  setShowCatches,
  showCatches,
  setShowNumbers,
  showNumbers,
}) {
  const [toggleStates, setToggleStates] = useState({
    players: showPlayers,
    throws: showThrows,
    arrows: showArrows,
    catches: showCatches,
  });

  useEffect(() => {
    setToggleStates((prev) => ({
      ...prev,
      arrows: showArrows,
    }));
  }, [showArrows]);

  const setterFunctions = {
    players: setShowPlayers,
    throws: setShowThrows,
    arrows: setShowArrows,
    catches: setShowCatches,
  };

  const handleChange = (event) => {
    const toggleName = event.target.value;

    setToggleStates((prev) => {
      const newStates = { ...prev };
      newStates[toggleName] = !prev[toggleName];

      if (toggleName === 'arrows' && !newStates.arrows && showNumbers) {
        setShowNumbers(false);
      }

      setterFunctions[toggleName](!prev[toggleName]);
      return newStates;
    });
  };

  return (
    <div className='flex justify-center'>
      <ToggleButtonGroup color='primary'>
        {['players', 'arrows', 'throws', 'catches'].map((value) => (
          <ToggleButton
            key={value}
            value={value}
            selected={toggleStates[value]}
            onChange={handleChange}
            sx={{
              borderRadius: '50px', // Makes the buttons more round
              padding: '8px 16px', // Adjust spacing for better appearance
              textTransform: 'capitalize', // Keeps the text consistent
            }}
          >
            {titleize(value)}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
