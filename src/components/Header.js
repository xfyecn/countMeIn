import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      isShowingLoginModal: false,
      password:'',
      confirmPass:'',
    };
  }

  addNewUsers(){
    console.log("AAAAAAAA", this.state)
    const { confirmPass, password, email} = this.state;

    if (confirmPass === '' || password == '' || email === ''){
      return console.log("Uh oh, looks like you missed a required field");
    }

    if (confirmPass !== password){
      return console.log("Uh oh, looks like your passwords don't match. ");
    }

    //add to firebase


  }

  render() {

    console.log("this is your stateeeee", this.state)
    const { isShowingLoginModal, password, confirmPass } = this.state;



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
          
          {/* Sign Up Modal */}
          <Dialog
            open={isShowingLoginModal}
            onClose={console.log("FOOO")}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
          <DialogTitle id="alert-dialog-title">{"Join Us!"}</DialogTitle>
          <TextField
            autoFocus
            margin="dense"
            required
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            onChange={val => this.setState({ email: val.target.value })}
          />
          <TextField
            autoFocus
            margin="dense"
            required
            id="name"
            label="Password"
            type="password"
            fullWidth
            onChange={val => this.setState({ password: val.target.value })}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            label="Confirm Password"
            type="password"
            fullWidth
            onChange={val => this.setState({ confirmPass: val.target.value })}
          />
          <DialogActions>
            <Button onClick={() => this.setState({ isShowingLoginModal: !isShowingLoginModal })} color="primary">
              Cancel
            </Button>
            <Button 
              onClick={() => 
                this.setState({ 
                  isShowingLoginModal: !isShowingLoginModal 
                }),
                this.addNewUsers.bind(this)} 
              color="primary" 
              autoFocus
              disabled= {confirmPass !== password || password === '' || confirmPass === '' ? true : false}
            >
              Sign Me Up!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}