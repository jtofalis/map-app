const ActionButton = ({ onClick, label, Icon }) => (
  <button
    onClick={onClick}
    className='flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium'
    aria-label={label.toLowerCase()}
  >
    <Icon className='w-5 h-5' />
    <span>{label}</span>
  </button>
);

export default ActionButton;
