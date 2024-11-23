import DistanceResult from './DistanceResult';

const PositionSummary = ({ savedPositions }) => {
  return (
    <div style={{overflow: 'scroll'}}>
      <p>
        <strong>Saved Positions:</strong>
      </p>
      {savedPositions.length === 0 ? (
        <p>No saved positions yet.</p>
      ) : (
        <ul>
          {savedPositions.map((save, index) => (
            <li key={index}>
              <DistanceResult
                throwerX={Math.round(save.thrower.x)}
                throwerY={Math.round(save.thrower.y)}
                catcherX={Math.round(save.catcher.x)}
                catcherY={Math.round(save.catcher.y)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default PositionSummary;
