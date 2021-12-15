import axios from "axios";

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
      if ( followees.findIndex((followee) => followee.user2id === follower.user1id) === -1) {
        ids.push(follower.user1id);
      }
      return ids;
    }, []);
    
    console.log('followers', followers)
    console.log('followees', followees)
    console.log('requestIds:', friendRequestIds)

    // const friendRequestIds = followers.filter((follower) => {
    //   if (!(followees.find(follower.user2id))) return true;
    // })

    // const friendRequestUsers = accounts.reduce((users, user) => {
    //   if ( friendRequestIds.findIndex((requesterId) => requesterId === user.id) !== myId
    //   ) {
    //     users.push(user);
    //   }
    //   return users;
    // }, []);

    const friendRequestUsers = accounts.filter( account => {
      if (friendRequestIds.findIndex( requestId => requestId === account.id ) !== -1){
        return true
      }
      else {
        return false
      }
    })
    console.log('asdfadsfadf',friendRequestUsers)

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
