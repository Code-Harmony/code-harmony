import axios from 'axios';

const LOAD_INDUSTRIES = 'LOAD_INDUSTRIES';

const industriesReducers = (state = [], action) =>{
    if(action.type === LOAD_INDUSTRIES){
        state = action.industries;
    }
    return state;
}

const loadIndustries = () =>{
    return async (dispatch) =>{
        const industries = (await axios.get('/api/industries')).data;
        dispatch(_loadIndustries(industries));
    }
}

const _loadIndustries = (industries) =>{
    return {
        type: LOAD_INDUSTRIES,
        industries
    }
}

export default industriesReducers;
export {_loadIndustries, loadIndustries}