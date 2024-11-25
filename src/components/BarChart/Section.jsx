const BarSection = ({ percentage, type }) => {
  const bgColors = {
    short: 'bg-[#52796f]',
    medium: 'bg-[#354f5]',
    long: 'bg-[#84a98c]',
  };

  return percentage > 0 ? (
    <div className={`h-full relative ${bgColors[type]}`} style={{ width: `${percentage}%` }}>
      <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black'>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </span>
    </div>
  ) : null;
};

export default BarSection;
