const BarSection = ({ percentage, type }) => {
  const bgColors = {
    short: 'bg-[#52796f]',
    medium: 'bg-[#354f5]',
    long: 'bg-[#84a98c]',
    sameThird: 'bg-[#52796f]',
    crossThird: 'bg-[#354f5]',
    crossPitch: 'bg-[#84a98c]',
  };

  const formatLabel = (label) => {
    // Add a space before uppercase letters and capitalize the first letter
    return label
      .replace(/([A-Z])/g, ' $1')
      .charAt(0)
      .toUpperCase() + label.slice(1).replace(/([A-Z])/g, ' $1');
  };

  const formattedLabel = formatLabel(type);

  return percentage > 0 ? (
    <div className={`h-full relative ${bgColors[type]}`} style={{ width: `${percentage}%` }}>
      {percentage > 14.5 && (
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
          {formattedLabel}
        </span>
      )}
    </div>
  ) : null;
};

export default BarSection;
