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

import { updateAuth } from '../actions/auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import * as firebase from 'firebase'

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      isShowingLoginModal: false,
      password:'',
      confirmPass:'',
    };
  }

  addNewUser(){
    const { confirmPass, password, email} = this.state;

    if (confirmPass === '' || password == '' || email === ''){
      return console.log("Uh oh, looks like you missed a required field");
    }

    if (confirmPass !== password){
      return console.log("Uh oh, looks like your passwords don't match. ");
    }

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
      // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
      console.log(error);
    });

  }

  render() {

    const { isShowingLoginModal, password, confirmPass } = this.state;
    let authorizedUser = false;

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        updateAuth(user);
        authorizedUser = user;

      } else {
        // No user is signed in.
        console.log("NO USER")
      }
    });

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
                this.addNewUser.bind(this)} 
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

const mapStateToProps = (state) => ({
  auth: state,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  updateAuth
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
