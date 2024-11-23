import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import UndoIcon from '@mui/icons-material/Undo';
import { Button } from '@mui/material';

const Buttons = ({handleSave, handleRemoveLast, handleClearAll}) => {
  return (
    <div
      style={{
        background: '#dcf5f5',
        height: '9vh',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        backgroundColor: 'white',
      }}
    >
      <Button
        size='large'
        variant='contained'
        color='white'
        startIcon={<AddIcon />}
        onClick={handleSave}
        aria-label='clear all'
      >
        {' '}
        Add
      </Button>
      <Button
        size='large'
        variant='contained'
        color='#dcf5e9'
        startIcon={<UndoIcon />}
        onClick={handleRemoveLast}
        aria-label='clear all'
      >
        {' '}
        Undo
      </Button>
      <Button
        size='large'
        variant='contained'
        color='#dcf5e9'
        startIcon={<DeleteIcon />}
        onClick={handleClearAll}
        aria-label='clear all'
      >
        {' '}
        Clear
      </Button>
    </div>
  );
};
export default Buttons;
