import React from "react";
import { connect } from "react-redux";
import { Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Group";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ForumIcon from "@mui/icons-material/Forum";
import { Link } from "react-router-dom";
import { addFriend } from "../store";
import { friendRequests } from "../store";

/**
 * COMPONENT
 */
export const PeerRequests = (props) => {
  const { username } = props;
  // const { friendRequests } = props;
  const { accounts } = props;
  const { auth } = props;
  const { loadFriendRequests } = props;

  const handleAddPeer = (userId) => {
    const { addFriend } = props;
    addFriend(auth.id, userId);
  };

  return (
    <div>
      <h3>Friend Requests</h3>
        <ul>
        {loadFriendRequests.map((user) => {
        // {accounts.map((user) => {
          return (
            <li key={user.id}>
              {user.name}
              <br />
              <div className={'friendlink'} onClick={(userId) => handleAddPeer(user.id)}>add friend <br /><span className="subtext">(will add ID: {user.id})</span></div>
              <br /> {`  `}
            </li>
          );
        })}
        </ul>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    username: state.auth.username,
    auth: state.auth,
    friends: state.friends,
    loadFriendRequests: state.loadFriendRequests,
    accounts: state.account || [
      { id: 3, name: "stephen" },
      { id: 6, name: "liana" },
    ],
    friendRequests: state.friendRequests
  };
};

const mapDispatch = (dispatch) => {
  return {
    addFriend: (myId, otherId) => dispatch(addFriend(myId, otherId)),
  };
};

export default connect(mapState, mapDispatch)(PeerRequests);
