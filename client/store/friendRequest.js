import axios from 'axios';

const ADD_FRIEND = 'ADD_FRIEND';

// actions
export const createNewFriendRequest = (friendRequest) => {
  return { type: ADD_FRIEND, friendRequest };
};

// thunks
export const addFriend = (myId, otherId) => {
  const friendRequest = {
    user1id: myId,
    user2id: otherId
  };
  return async (dispatch) => {
    const { data: newFriendRequest } = await axios.post("/api/friend", friendRequest);
    dispatch(createNewFriendRequest(newFriendRequest));
  };
};

const initialState = [];

// reducer
export default (state = initialState, action) => {
  switch (action.type){
    case ADD_FRIEND:
      return action.friendRequest;
    default:
      return state;
  }
};