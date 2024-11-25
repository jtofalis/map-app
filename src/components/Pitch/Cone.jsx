const Cone = ({ position }) => {
  const positions = {
    'top-left': 'top-1 left-1',
    'top-right': 'top-1 right-1',
    'bottom-left': 'bottom-1 left-1',
    'bottom-right': 'bottom-1 right-1',
    'endzone-top-left': 'top-20 left-1',
    'endzone-top-right': 'top-20 right-1',
    'endzone-bottom-left': 'bottom-20 left-1',
    'endzone-bottom-right': 'bottom-20 right-1',
  };

  return (
    <div
      className={`absolute w-0 h-0 border-l-[5px] border-r-[5px] border-b-[10px] border-l-transparent border-r-transparent border-b-yellow-500 ${positions[position]}`}
    />
  );
};

export default Cone;
