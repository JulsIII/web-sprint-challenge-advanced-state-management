import { FETCH_SMURFS_WAIT, FETCH_SMURFS_FAIL} from './../actions';


export const initialState = {
        name:'',
        position:'',
        nickname: '',
        description: ''
}

export const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case(FETCH_SMURFS_WAIT):
          return({
            // ...state,
            // isFetching: true,
            // error:'',
            // joke:''
          });
        case(FETCH_SMURFS_FAIL):
          return({
            // ...state,
            // error: action.payload,
            // isFetching: false
          });
        default:
          return state;
      }
}


//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary