import axios from 'axios';

const LOAD_USER_INDUSTRIES = 'LOAD_USER_INDUSTRIES';

const userIndustriesReducers = (state = [], action) =>{
    if(action.type === LOAD_USER_INDUSTRIES){
        state = action.userIndustries;
    }
    return state;
}

const loaduserIndustries = () =>{
    return async (dispatch) =>{
        const userIndustries = (await axios.get('/api/userIndustries')).data;
        dispatch(_loaduserIndustries(userIndustries));
    }
}

const _loaduserIndustries = (userIndustries) =>{
    return {
        type: LOAD_USER_INDUSTRIES,
        userIndustries
    }
}

export default userIndustriesReducers;
export {_loaduserIndustries, loaduserIndustries}