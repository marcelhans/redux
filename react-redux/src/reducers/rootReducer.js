import { combineReducers } from 'redux'
import { dummyReducer } from './dummyReducer'


const initialState = []
const todosReducer = (previousState = initialState, action) => {
  switch (action.type) {
    case 'todos/success':
      return [...previousState, ...action.payload]
    default:
      return previousState
  };
}


export default combineReducers({
  dummy: dummyReducer,
  todos: todosReducer
})
