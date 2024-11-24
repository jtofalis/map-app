const PositionHeatmapPoint = ({x,y, throwerOrCatcher}) => {
  const color = throwerOrCatcher === 'thrower' ? 'rgba(0, 0, 255, 0.1)' : 'rgba(255, 0, 0, 0.25)'
  return (
    <div
    style={{
      position: 'absolute',
      width: '100px',
      height: '100px',
      background: `radial-gradient(circle, ${color} 20%, transparent 80%)`,
      backgroundSize: '100% 100%',
      borderRadius: '50%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      left: `${x}px`,
      top: `${y}px`
    }}
  ></div>
  )
}
export default PositionHeatmapPoint
