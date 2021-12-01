import axios from 'axios';

const LOAD_USER_SKILLS = 'LOAD_USER_SKILLS';

const userSkillsReducers = (state = [], action) =>{
    if(action.type === LOAD_USER_SKILLS){
        state = action.userSkills;
    }
    return state;
}

const loaduserSkills = () =>{
    return async (dispatch) =>{
        const userSkills = (await axios.get('/api/userSkills')).data;
        dispatch(_loaduserSkills(userSkills));
    }
}

const _loaduserSkills = (userSkills) =>{
    return {
        type: LOAD_USER_SKILLS,
        userSkills
    }
}

export default userSkillsReducers;
export {_loaduserSkills, loaduserSkills}