import {createStore,applyMiddleware,combineReducers,compose} from 'redux';
import reducer from '../reducer';
const initValue={
    'First':0,
    'Second':10,
    'Third':20,
    'name':555,
    'pas':666,
}




// const store=createStore(combineReducers(reducer),initValue,compose(applyMiddleware(promiseMiddleware()),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
const store=createStore(reducer,initValue)
export default store
