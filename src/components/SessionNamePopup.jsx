import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { useState } from 'react';

const SessionNamePopup = ({ setSessionName, sessionName, open, setOpen }) => {
  const [name, setName] = useState(sessionName);

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby='confirm-dialog-title'
      aria-describedby='confirm-dialog-description'
    >
      <DialogTitle id='confirm-dialog-title'>Project Title</DialogTitle>
      <DialogContent className='w-full sm:min-w-96'>
        <label htmlFor='sessionNameInput' className='block text-sm sm:text-base text-gray-500'>
        </label>
        <input
          type='text'
          id='sessionNameInput'
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='border-gray-200 border-2 rounded w-full px-2 py-1 text-sm sm:text-base placeholder:text-gray-500 text-gray-700'
          placeholder='Team 1 vs Team 2'
        />

        <p className='text-gray-400 text-sm/tight italic mt-4'>NB: You can always change this by clicking on the name.</p>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setSessionName(sessionName || 'Team 1 vs Team 2');
            setName(sessionName || 'Team 1 vs Team 2');
            setOpen(false);
          }}
          color='primary'
          type='button'
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            setSessionName(name || 'Team 1 vs Team 2');
            setName(name || 'Team 1 vs Team 2');
            setOpen(false);
          }}
          color='secondary'
          type='button'
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
export default SessionNamePopup;
