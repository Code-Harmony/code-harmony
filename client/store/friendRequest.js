import axios from "axios";

const ADD_FRIEND = "ADD_FRIEND";

// actions

export const createNewFriendRequest = (friendRequest) => {
  return { type: ADD_FRIEND, friendRequest };
};

// thunks
export const addFriend = (myId, otherId) => {
  const friendRequest = {
    user1id: myId,
    user2id: otherId,
  };
  return async (dispatch) => {
    const { data: newFriendRequest } = await axios.post(
      "/api/friend",
      friendRequest
    );
    dispatch(createNewFriendRequest(newFriendRequest));
  };
};

export const friendRequests = (myId) => {
  return async (dispatch) => {
    const friendRelations = (await axios.get("/api/friend")).data;
    const accounts = (await axios.get("/api/account")).data;

    const followees = friendRelations.filter((user) => myId === user.user1id);
    const followers = friendRelations.filter((user) => myId === user.user2id);

    const friendRequestIds = followers.reduce((ids, follower) => {
      if (
        followees.findIndex(
          (followee) => followee.user2id === follower.user1id
        ) === -1
      ) {
        ids.push(follower.user1id);
      }
      return ids;
    }, []);

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
    case ADD_FRIEND:
      return action.friendRequest;
    default:
      return state;
  }
};
