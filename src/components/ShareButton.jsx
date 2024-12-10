import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

const ShareButton = () => {
  const [open, setOpen] = useState(false);

  const handleShare = () => {
    const currentUrl = window.location.href; // Get the current URL
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        setOpen(true); // Open the popup
      })
      .catch((err) => {
        console.error("Failed to copy the URL: ", err);
      });
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<ShareIcon />}
        onClick={handleShare}
      >
        Share
      </Button>
      
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="confirm-dialog-title"
        aria-describedby="confirm-dialog-description"
      >
        <DialogTitle id="confirm-dialog-title">Custom URL Copied</DialogTitle>
        <DialogContent>
          <DialogContentText id="confirm-dialog-description">
            Custom URL has been copied to clipboard.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ShareButton;
