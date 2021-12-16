import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addFriend } from "../store";
import { friendRequests } from "../store";

import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

/**
 * COMPONENT
 */
export const PeerRequests = (props) => {
  const { username } = props;
  // const { friendRequests } = props;
  const { auth } = props;
  const { loadFriendRequests } = props;
  const { accounts } = props;

  const handleAddPeer = (userId) => {
    const { addFriend } = props;
    addFriend(auth.id, userId);
  };

  return (
    <div>
      <div style={{textAlign: 'center'}}>

      <Typography sx={{textAlign: 'center'}} variant="h6">
        ...
      </Typography>
      <Typography variant="body2">End of Friend Requests</Typography>
      <Typography variant="h6">
        <br />
        Temporary Helper Component to Add Friends
      </Typography>
      </div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        pl={"1em"}
        pr={"1em"}
        align="center"
      >
        {accounts.map((user) => {
          // {accounts.map((user) => {
          return (
            <Grid
              item
              xs={12}
              lg={6}
              key={Math.random() * user.id * 100}
              align="center"
            >
              <Card align="center">
                <CardContent>
                  <Avatar
                    alt={user.username}
                    src={user.photoUrl}
                    sx={{
                      width: 80,
                      height: 80,
                    }}
                  />
                  {user.name}
                  <br />
                </CardContent>
                <CardActions
                  sx={{ textAlign: "center", marginLeft: "auto", mr: "auto" }}
                >
                  <Button
                    sx={{ ml: "auto", mr: "auto" }}
                    variant="contained"
                    onClick={(userId) => handleAddPeer(user.id)}
                  >
                    Add Friend ID: {user.id}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
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
    friendRequests: state.friendRequests,
    accounts: state.accounts,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addFriend: (myId, otherId) => dispatch(addFriend(myId, otherId)),
  };
};

export default connect(mapState, mapDispatch)(PeerRequests);
