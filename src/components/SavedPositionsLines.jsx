const SavedPositionsLines = ({ savedPositions }) => {
  return (
    <svg width='100%' height='100%' style={{ position: 'absolute', top: 0, left: 0 }}>
      <defs>
        <marker id='arrowhead' markerWidth='10' markerHeight='7' refX='9' refY='3.5' orient='auto'>
          <polygon points='0 0, 10 3.5, 0 7' fill='black' />
        </marker>
      </defs>
      {savedPositions.map((save, index) => (
        <line
          key={index}
          x1={save.thrower.x}
          y1={save.thrower.y}
          x2={save.catcher.x}
          y2={save.catcher.y}
          stroke='black'
          strokeWidth='1.5' // Increased thickness
          strokeOpacity='0.2'
          markerEnd='url(#arrowhead)'
        />
      ))}
    </svg>
  );
};

export default SavedPositionsLines
