import axios from 'axios';

const LOAD_ACCOUNTS = 'LOAD_ACCOUNTS';
const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';

const accountReducers = (state = [], action) =>{
    if(action.type === LOAD_ACCOUNTS){
        state = action.accounts;
    }
    if(action.type === UPDATE_ACCOUNT){
        state = state.map(account => account.id !== action.account.id ? account : action.account)
    }
    return state;
}

const loadAccounts = () =>{
    return async (dispatch) =>{
        const accounts = (await axios.get('/api/account')).data;
        dispatch(_loadAccounts(accounts));
    }
}

const _loadAccounts = (accounts) =>{
    return {
        type: LOAD_ACCOUNTS,
        accounts
    }
}

const updateAccount = (id, name, email, industry, description, zipcode) =>{
    return async (dispatch) =>{
        const account = (await axios.put(`/api/account/${id}`, {name, email, industry, description, zipcode})).data;
        dispatch(_updateAccount(account));
    }
}

const _updateAccount = (account) =>{
    return {
        type: UPDATE_ACCOUNT,
        account
    }
}

const createProfileAccount = (id, name, email, industry, description, zipcode) =>{
    return async (dispatch) =>{
        const account = (await axios.put(`/api/account/${id}`, {name, email, industry, description, zipcode})).data;
        dispatch(_updateAccount(account));
    }
}

const _createProfileAccount = (account) =>{
    return {
        type: UPDATE_ACCOUNT,
        account
    }
}




export default accountReducers;
export {_loadAccounts, loadAccounts, updateAccount}