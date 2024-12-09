import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
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
      <DialogTitle id='confirm-dialog-title'>What are you tracking?</DialogTitle>
      <DialogContent className='w-full sm:min-w-96'>
        <DialogContentText id='confirm-dialog-description'>
          <p className='text-sm mb-2 sm:text-base text-gray-500'>This is the name of the session. Some examples are:</p>
          <ul className='list-inside list-disc text-sm/tight sm:text-base text-gray-500'>
            <li>Johnny vs Jamie</li>
            <li>Dump-swing practice</li>
            <li>My best game</li>
            <li>I &lt;3 Ultimate Insights</li>
            <li>Wow, what an app</li>
          </ul>
          <label htmlFor='sessionNameInput' className='mt-4 block text-sm sm:text-base text-gray-700'>Enter name below:</label>
          <input
            type='text'
            id='sessionNameInput'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className='border-gray-200 border-2 rounded w-full px-2 py-1 text-sm sm:text-base placeholder:text-gray-500 text-gray-700'
            placeholder='Team 1 vs Team 2'
          />
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setSessionName(sessionName || 'Team 1 vs Team 2');
            setName(sessionName || 'Team 1 vs Team 2')
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
            setName(name || 'Team 1 vs Team 2')
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
