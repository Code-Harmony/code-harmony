import axios from "axios";
import { ids } from "webpack";

const LOAD_REQUESTS = "LOAD_REQUESTS";

// actions

export const loadFriendRequests = (requests) => {
  return { type: LOAD_REQUESTS, requests };
};

// thunks

export const loadAllFriendRequests = (myId) => {
  return async (dispatch) => {
    const friendRelations = (await axios.get("/api/friend")).data;
    const accounts = (await axios.get("/api/account")).data;

    const followees = friendRelations.filter((user) => myId === user.user1id);
    const followers = friendRelations.filter((user) => myId === user.user2id);

    const friendRequestIds = followers.reduce((ids, follower) => {
      if ( followees.findIndex(
          (followee) => followee.user2id === follower.user1id) !== -1
      ) {
        ids.push(follower.user1id);
      }
      return ids;
    }, []);

    // const friendRequestIds = followers.filter((follower) => {
    //   if (!(followees.find(follower.user2id))) return true;
    // })

    const friendRequestUsers = accounts.reduce((users, user) => {
      if (
        friendRequestIds.findIndex((requesterId) => requesterId === user.id) !==
        1
      ) {
        users.push(user);
      }
      return users;
    }, []);

    dispatch(loadFriendRequests(friendRequestUsers));
  };
};

const initialState = [];

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REQUESTS:
      return action.requests;
    default:
      return state;
  }
};
