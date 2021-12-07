import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import auth from './auth'
import account from './account'
import lookingfor from './lookingfor'
import messages from './messages'
import industries from './industries'
import userIndustries from './userIndustries'
import skills from './skills'
import userSkills from './userSkills'
import friends from './friends'


// const reducer = combineReducers({ auth })
const reducer = combineReducers({ 
  auth, 
  friends,
  accounts: account, 
  lookingfor, 
  messages,
  industries: industries,
  userIndustries: userIndustries,
  skills: skills,
  userSkills: userSkills,
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './auth'
export * from './friends'
