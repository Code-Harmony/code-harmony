import axios from 'axios';
import { auth } from './auth';



const LOAD_FRIENDS = 'LOAD_FRIENDS';

const friendsReducers = (state = [], action) =>{
    if(action.type === LOAD_FRIENDS){
        state = action.friends;
    }
    return state;
}

//const {accounts, friends} = this.props;
  /*
    let firstFriendId = friends.find((user) => user.user1id === currentUser.id)
    let secondFriendId = firstFriendId.find((user) => user.user2id === currentUser.id)
    let friendslist = accounts.find((friend) => friend.id === secondFriendId.id)
  */

const loadFriends = (myId) =>{
    console.log('myId:',myId)
    return async (dispatch) =>{
        const friendRelations = (await axios.get('/api/friend')).data;
        const accounts = (await axios.get('/api/account')).data;
        const userOneFriends = friendRelations.filter( (user1) => myId === user1.user1id);
        const userTwoFriends = friendRelations.filter( (user2) => myId === user2.user2id);

        const friendIds = userTwoFriends.reduce((result, userTwo) => {
            if (userOneFriends.findIndex( userOneFriend => userOneFriend.user2id === userTwo.user1id) !== -1) {
                result.push(userTwo.user1id)
            } 
            return result;
        },[]);
        
        const friends = accounts.reduce( (result, account) => {
            if (friendIds.findIndex( friendId => friendId === account.id) !== -1) {
                result.push(account)
            }
            return result;
        },[]);

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