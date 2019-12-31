import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      isShowingLoginModal: false 
    };
  }

  render() {

    const { isShowingLoginModal } = this.state;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
            </IconButton>
            <Typography variant="h6">
              Count Me In!
              </Typography>
              <Button onClick={() => this.setState({ isShowingLoginModal: !isShowingLoginModal })} color="inherit">Login</Button>
              <Button onClick={() => this.setState({ isShowingLoginModal: !isShowingLoginModal })} color="inherit">Sign Up</Button>
            </Toolbar>
          </AppBar>
          <Dialog
            open={isShowingLoginModal}
            onClose={console.log("FOOO")}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
          <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              LET'S LOGIN
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.setState({ isShowingLoginModal: !isShowingLoginModal })} color="primary">
              Cancel
            </Button>
            <Button onClick={() => this.setState({ isShowingLoginModal: !isShowingLoginModal })} color="primary" autoFocus>
              Log In!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}