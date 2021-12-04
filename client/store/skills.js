import axios from 'axios';

const LOAD_SKILLS = 'LOAD_SKILLS';

const skillsReducers = (state = [], action) =>{
    if(action.type === LOAD_SKILLS){
        state = action.skills;
    }
    return state;
}

const loadSkills = () =>{
    return async (dispatch) =>{
        const skills = (await axios.get('/api/skills')).data;
        dispatch(_loadSkills(skills));
    }
}

const _loadSkills = (skills) =>{
    return {
        type: LOAD_SKILLS,
        skills
    }
}

export default skillsReducers;
export {_loadSkills, loadSkills}