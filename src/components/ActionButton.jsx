import { Button } from '@mui/material';

const ActionButton =  ({ onClick, label, Icon, disabled }) => {
  return (
  <Button
    key={label}
    size='large'
    variant='contained'
    color='#dcf5e9'
    startIcon={<Icon />}
    onClick={onClick}
    disabled={disabled}
    aria-label={label.toLowerCase()}
    className={`w-full
      ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    `}
    sx={{
      padding: '16px 32px', // Increase padding to make the button larger
    }}
  >
    {label}
  </Button>
)};

export default ActionButton;
