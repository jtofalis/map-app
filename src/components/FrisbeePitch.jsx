const FrisbeePitch = ({ children }) => {
  return (
    <div
      style={{
        width: '300px',
        height: '500px',
        backgroundColor: '#6BA368',
        position: 'relative',
        margin: '20px auto',
        border: '5px solid white',
        borderRadius: '10px',
      }}
    >
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
      {children}
    </div>
  );
};

export default FrisbeePitch;
