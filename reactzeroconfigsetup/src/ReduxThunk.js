import { applyMiddleware, createStore } from "redux";
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = Object.freeze({
    error: null,
  items: [],
  isFetching: false,
  lastUpdated: null,
  selectedAccount: 'manuelbieh',
});

const rootReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'FETCH_REPOS_REQUEST':{
            return {
                ...state,
                isFetching : true,
                error : null,
            }
        }
        case 'FETCH_REPOS_SUCCESS':{
            return {
                ...state,
                isFetching : false,
                items: action.payload.items,
                lastUpdated: action.payload.lastUpdated
            }
        }
        case 'FETCH_REPOS_FAILED': {
            return {
              ...state,
              isFetching: false,
              error: action.payload,
            }
          }
        default: {
        return state;
        }
    }
    
}