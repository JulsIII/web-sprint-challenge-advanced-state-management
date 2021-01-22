import axios from 'axios';

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.

// FETCH_SMURFS_START, FETCH_SMURF_END, ADD_SMURF_TO_LIST, SET_ERROR_TEXT

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURF_END = "FETCH_SMURF_END";
export const ADD_SMURF_TO_LIST = "ADD_SMURF_TO_LIST";
export const SET_ERROR_TEXT = "SET_ERROR_TEXT";

export const fetchSmurfs = () => dispatch => {
    dispatch({ type:FETCH_SMURFS_START});
    axios 
        .get('http://localhost:3333/smurfs')
        
        .then((res)=>{
            console.log('the get*****', res.data);
            dispatch({ type:FETCH_SMURF_END, payload: res.data});
        })
        .catch(err => {
            dispatch({ type:SET_ERROR_TEXT, payload: err.message});
        });
        
}

export const addSmurf = (body) => dispatch => {
    dispatch({ type:FETCH_SMURFS_START});
    axios 
        .post('http://localhost:3333/smurfs', body)
        
        .then((res)=>{
            console.log('the post*****', res.data);
            dispatch({ type:ADD_SMURF_TO_LIST, payload: res.data});
        })
        .catch(err => {
            dispatch({ type:SET_ERROR_TEXT, payload: err.message});
        });
        
}

