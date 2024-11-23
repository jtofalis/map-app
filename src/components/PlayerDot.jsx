import Draggable from 'react-draggable';

const PlayerDot = ({ onDrag, player }) => {
  const color = player === 'thrower' ? 'red' : 'blue';

  return (
    <Draggable bounds='parent' onDrag={onDrag}>
      <div
        style={{
          width: '30px',
          height: '30px',
          backgroundColor: color,
          color: 'white',
          fontWeight: 'bold',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          cursor: 'pointer',
          position: 'absolute',
        }}
      >
        {player === 'thrower' ? 'Thrower' : 'Catcher'}
      </div>
    </Draggable>
  );
};
export default PlayerDot;
