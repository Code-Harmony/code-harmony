import axios from 'axios';

const LOAD_CHALLENGES = 'LOAD_CHALLENGES';

// actions
const _loadChallenges = (challenges) => { 
    return {
        type: LOAD_CHALLENGES,
        challenges,
    };
};

// thunk
export const loadChallenges = () => {
    return async (dispatch) => {
        const { data: challenges } = await axios.get('/api/levelup');
        dispatch(_loadChallenges(challenges));
    };
};

// reducer
export default (state = [], action) => {
    switch (action.type) {
        case LOAD_CHALLENGES:
            return action.challenges;
        default: 
            return state;
    }
};