import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/Home";
import { me } from "./store";
import Account from "./components/Account";
import LevelUp from "./components/LevelUp";

import Messages from "./components/Messages";

import {_loadAccounts, loadAccounts} from './store/account'
import {_loadIndustries, loadIndustries} from './store/industries'
import {_loaduserIndustries, loaduserIndustries} from './store/userIndustries'
import {_loadSkills, loadSkills} from './store/skills'
import {_loaduserSkills, loaduserSkills} from './store/userSkills'
import {_loadFriends, loadFriends} from './store/friends'
import {loadChallenges} from './store/levelup'


import SingleProfile from './components/SingleProfile'
import UpdateProfile from './components/UpdateProfile'
import LookingFor from "./components/LookingFor";
import ProfileResults from "./components/ProfileResults";
import MyPeers from "./components/MyPeers";
import PeerRequests from "./components/PeerRequests";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props._loadChallenges();
    setTimeout(() => {
      this.props.loadInitialData();
      this.props._loadAccounts();
      this.props._loadIndustries();
      this.props._loaduserIndustries();
      this.props._loadSkills();
      this.props._loaduserSkills();
      this.props._loadFriends();
    }, 50);
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route path="/home" component={ Home } />
            <Route path="/account" exact component={ Account } />
            <Route path="/lookingfor" exact component={ LookingFor } />
            <Route path="/levelup" exact component={ LevelUp } />
            <Route exact path="/messages" exact component={ MyPeers } />

            <Route exact path="/viewProfile" component={SingleProfile}/>
            <Route exact path="/updateProfile" component={UpdateProfile}/>
            <Route exact path="/lookingFor" component={LookingFor}/>
            <Route exact path='/profileResults/:filter?' component={ProfileResults}/>
            <Route exact path="/mypeers" component={MyPeers}/>
            <Route exact path="/requests" component={PeerRequests}/>
            <Redirect to="/home" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={ Login } />
            <Route path="/login" component={ Login } />
            <Route path="/signup" component={ Signup } />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
    _loadAccounts: async ()=> {
      dispatch(loadAccounts());
    },
    _loadIndustries: async ()=> {
      dispatch(loadIndustries());
    },
    _loaduserIndustries: async ()=> {
      dispatch(loaduserIndustries());
    },
    _loadSkills: async ()=> {
      dispatch(loadSkills());
    },
    _loaduserSkills: async ()=> {
      dispatch(loaduserSkills());
    },
    _loadFriends: async ()=> {
      dispatch(loadFriends());
    },
    _loadChallenges: async ()=> {
      dispatch(loadChallenges());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
