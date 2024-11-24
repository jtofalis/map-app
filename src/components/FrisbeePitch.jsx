const FrisbeePitch = ({ children }) => {
  const coneStyle = {
    width: 0,
    height: 0,
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderBottom: '10px solid orange',
    position: 'absolute',
  };

  return (
    <div
      style={{
        width: '60vw',
        height: '55vh',
        backgroundColor: '#6BA368',
        position: 'relative',
        margin: '20px auto',
        border: '5px solid white',
        borderRadius: '10px',
      }}
    >
      {/* Attacking End Zone */}
      <div
        style={{
          width: '100%',
          height: '80px',
          backgroundColor: '#4C8C4A',
          position: 'absolute',
          textAlign: 'center',
          color: 'white',
          fontWeight: 'bold',
          lineHeight: '80px',
          top: 0,
        }}
      >
        Attacking End Zone
      </div>

      {/* Midline */}
      <div
        style={{
          width: '100%',
          height: '2px',
          backgroundColor: 'white',
          position: 'absolute',
          top: '50%',
          left: 0,
          transform: 'translateY(-50%)',
        }}
      ></div>

      {/* Defending End Zone */}
      <div
        style={{
          width: '100%',
          height: '80px',
          backgroundColor: '#4C8C4A',
          position: 'absolute',
          textAlign: 'center',
          color: 'white',
          fontWeight: 'bold',
          lineHeight: '80px',
          bottom: 0,
        }}
      >
        Defending End Zone
      </div>

      {/* Cones */}
      {/* Top Left */}
      <div style={{ ...coneStyle, top: '5px', left: '5px' }}></div>
      {/* Top Right */}
      <div style={{ ...coneStyle, top: '5px', right: '5px' }}></div>
      {/* Bottom Left */}
      <div style={{ ...coneStyle, bottom: '5px', left: '5px' }}></div>
      {/* Bottom Right */}
      <div style={{ ...coneStyle, bottom: '5px', right: '5px' }}></div>
      {/* Top End Zone - Front Left */}
      <div style={{ ...coneStyle, top: '80px', left: '5px' }}></div>
      {/* Top End Zone - Front Right */}
      <div style={{ ...coneStyle, top: '80px', right: '5px' }}></div>
      {/* Bottom End Zone - Front Left */}
      <div style={{ ...coneStyle, bottom: '80px', left: '5px' }}></div>
      {/* Bottom End Zone - Front Right */}
      <div style={{ ...coneStyle, bottom: '80px', right: '5px' }}></div>

      {children}
    </div>
  );
};

export default FrisbeePitch;
