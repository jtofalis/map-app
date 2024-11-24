import Draggable from 'react-draggable';

const PlayerDot = ({ onDrag, player }) => {
  const imageSrc = player === 'thrower' ? 'thrower.png' : 'catcher.png';

  return (
    <Draggable bounds="parent" onDrag={onDrag}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'absolute',
          cursor: 'pointer',
        }}
      >
        {/* Draggable image */}
        <img
          src={imageSrc}
          alt={player === 'thrower' ? 'Thrower' : 'Catcher'}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
          }}
        />
        {/* Text underneath */}
        <span
          style={{
            marginTop: '5px',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '12px',
            textAlign: 'center',
          }}
        >
          {player === 'thrower' ? 'Thrower' : 'Catcher'}
        </span>
      </div>
    </Draggable>
  );
};

export default PlayerDot;
