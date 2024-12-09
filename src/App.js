import React, { Fragment, useState } from 'react';
import BarChart from './components/BarChart/BarChart';
import Buttons from './components/Buttons';
import FloatingNumber from './components/FloatingNumber';
import Header from './components/Header.jsx';
import MainTitle from './components/MainTitle';
import FrisbeePitch from './components/Pitch/FrisbeePitch';
import PlayerDot from './components/PlayerDot';
import SavedPositionsLine from './components/SavedPositionsLine';
import SessionNamePopup from './components/SessionNamePopup.jsx';
import Toggle from './components/Toggles';
import { useSavedPositions } from './hooks/useSavedPositions';
import { AppContext } from './utils/AppContext.js';
import { compress } from './utils/dataCompression';

export const ADJUSTMENT_FACTOR_X_FOR_ICON = 24;
export const ADJUSTMENT_FACTOR_Y_FOR_ICON = 30;
export const URL_PARAM_NAME = 'p';

const UltimateFrisbeePitch = () => {
  const [positions, setPositions] = useState({
    thrower: { x: 95, y: 300 },
    catcher: { x: 95, y: 50 },
  });

  const styles = {
    main: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
    },
  };

  const [showNumbers, setShowNumbers] = useState(false);
  const [showArrows, setShowArrows] = useState(false);
  const [showPlayers, setShowPlayers] = useState(true);
  const [showThrows, setShowThrows] = useState(true);
  const [showCatches, setShowCatches] = useState(true);
  const [savedPositions, setSavedPositions] = useSavedPositions();
  const [sessionName, setSessionName] = useState(() => {
    const url = new URL(window.location.href);
    const sessionName = url.searchParams.get('sessionName');
    return sessionName ?? '';
  });
  const [showSetNameModal, setShowSetNameModal] = useState(!sessionName);

  const handleDrag = (player, e, data) => {
    setPositions((prev) => ({
      ...prev,
      [player]: { x: data.x, y: data.y },
    }));
  };

  const handleSave = () => {
    const adjustedPositionsForIconSize = {
      thrower: {
        x: positions.thrower.x + ADJUSTMENT_FACTOR_X_FOR_ICON,
        y: positions.thrower.y + ADJUSTMENT_FACTOR_Y_FOR_ICON,
      },
      catcher: {
        x: positions.catcher.x + ADJUSTMENT_FACTOR_X_FOR_ICON,
        y: positions.catcher.y + ADJUSTMENT_FACTOR_Y_FOR_ICON,
      },
    };
    setSavedPositions((prevSaved) => {
      const newPositions = [...prevSaved, { ...adjustedPositionsForIconSize }];
      updateUrl(newPositions);
      return newPositions;
    });
  };

  const updateUrl = (newData) => {
    const url = new URL(window.location.href);

    if (newData.length === 0) {
      url.searchParams.delete(URL_PARAM_NAME);
    } else {
      url.searchParams.set(URL_PARAM_NAME, encodeURIComponent(compress(newData)));
    }

    window.history.pushState({}, '', url);
  };

  const handleClearAll = () => {
    setSavedPositions([]);
    updateUrl([]);
  };

  return (
    <AppContext.Provider value={{ sessionName, setShowSetNameModal }}>
      <Header />

      <main className='w-full max-w-screen-lg mx-auto h-[120vh] font-helvetic pb-[9vh]'>
        <MainTitle />
        <FrisbeePitch savedPositions={savedPositions} showCatches={showCatches} showThrows={showThrows}>
          {savedPositions.map((savedPos, index) => (
            <Fragment key={(savedPositions, index)}>
              {showNumbers && (
                <FloatingNumber savedPosition={savedPos} index={index} setSavedPositions={setSavedPositions} />
              )}
              {showArrows && <SavedPositionsLine savedPosition={savedPos} />}
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
        <div className='w-full max-w-md mx-auto px-10 py-4'>
          <BarChart savedPositions={savedPositions} />
        </div>
        <div className='w-full max-w-md mx-auto'>
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
          <div className='font-mono text-[0.65rem] mt-5 text-gray-500 text-center'>
            © {new Date().getFullYear()} Made in collaboration with{' '}
            <a href='https://goudeketting.nl/' rel='noopener noreferrer' target='_blank' className='underline'>
              Robin Goudeketting
            </a>
          </div>
        </div>
      </main>
      <Buttons
        handleClearAll={handleClearAll}
        handleSave={handleSave}
        showNumbers={showNumbers}
        setShowNumbers={setShowNumbers}
        showArrows={showArrows}
        setShowArrows={setShowArrows}
      />
      <SessionNamePopup
        sessionName={sessionName}
        setSessionName={setSessionName}
        open={showSetNameModal}
        setOpen={setShowSetNameModal}
      />
    </AppContext.Provider>
  );
};

export default UltimateFrisbeePitch;
