import axios from 'axios';

const LOAD_FRIENDS = 'LOAD_FRIENDS';

const friendsReducers = (state = [], action) =>{
    if(action.type === LOAD.FRIENDS){
        state = action.friends;
    }
    return state;
}

const loadFriends = () =>{
    return async (dispatch) =>{
        const friends = (await axios.get('/api/friend')).data;
        dispatch(_loadFriends(friends));
    }
}

const _loadFriends = (friends) =>{
    return {
        type: LOAD_FRIENDS,
        friends
    }
}

export default friendsReducers ;
export {_loadFriends, loadFriends}