import { Button } from '@mui/material';

const ActionButton = ({ onClick, label, Icon }) => (
  <Button
    key={label}
    size='large'
    variant='contained'
    color='#dcf5e9'
    startIcon={<Icon />}
    onClick={onClick}
    aria-label={label.toLowerCase()}
    className='w-full'
    sx={{
      padding: '16px 32px', // Increase padding to make the button larger
    }}
  >
    {label}
  </Button>
);

export default ActionButton;
