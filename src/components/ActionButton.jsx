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
  >
    {label}
  </Button>
);

export default ActionButton;
