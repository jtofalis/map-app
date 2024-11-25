import React from 'react';

const ToggleSwitch = ({ label, isChecked, onChange }) => {
  return (
    <div className="flex items-center justify-start gap-2">
      <div
        className="relative inline-block w-10 h-5"
        onClick={() => onChange(!isChecked)}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChange(e.target.checked)}
          className="opacity-0 w-0 h-0 absolute"
        />
        <span className={`absolute cursor-pointer inset-0 rounded-full transition-colors duration-200 ${
          isChecked ? 'bg-blue-500' : 'bg-black'
        }`}>
          <span className={`absolute h-4 w-4 bottom-0.5 bg-white rounded-full transition-all duration-200 ${
            isChecked ? 'left-[22px]' : 'left-0.5'
          }`} />
        </span>
      </div>
      <label
        className="cursor-pointer text-[#2f3e46]"
        onClick={() => onChange(!isChecked)}
      >
        {label}
      </label>
    </div>
  );
};

const Toggle = ({
  setShowArrows,
  showArrows,
  setShowPlayers,
  showPlayers,
  setShowThrows,
  showThrows,
  setShowCatches,
  showCatches,
}) => {
  const toggles = [
    {
      label: "Show Players",
      isChecked: showPlayers,
      onChange: setShowPlayers
    },
    {
      label: "Show Throws",
      isChecked: showThrows,
      onChange: setShowThrows
    },
    {
      label: "Show Catches",
      isChecked: showCatches,
      onChange: setShowCatches
    },
    {
      label: "Show Arrows",
      isChecked: showArrows,
      onChange: setShowArrows
    }
  ];

  return (
    <div className="grid font-helvetica text-[#2f3e46] justify-between pb-12">
      {toggles.map((toggle, index) => (
        <ToggleSwitch
          key={index}
          label={toggle.label}
          isChecked={toggle.isChecked}
          onChange={toggle.onChange}
        />
      ))}
    </div>
  );
};

export default Toggle;
