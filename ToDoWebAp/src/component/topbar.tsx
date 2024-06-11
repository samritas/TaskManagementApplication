import { AppBar, Toolbar, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TopBar() {
  const [logoutOpen, setLogoutOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogoutOpen = () => {
    setLogoutOpen(true);
  };

  const handleLogoutClose = () => {
    setLogoutOpen(false);
  };

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logged out');
    handleLogoutClose();
    navigate('/');
  };

  return (
    <AppBar position="static" sx={{width:"100%"}}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Task Management
        </Typography>
        <Button color="inherit" onClick={handleLogoutOpen}>
          Logout
        </Button>

        <Dialog
          open={logoutOpen}
          onClose={handleLogoutClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Confirm Logout</DialogTitle>
          <DialogContent>
            <Typography id="alert-dialog-description">
              Are you sure you want to logout?
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleLogoutClose}>Cancel</Button>
            <Button onClick={handleLogout} color="error" autoFocus>
              Logout
            </Button>
          </DialogActions>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;