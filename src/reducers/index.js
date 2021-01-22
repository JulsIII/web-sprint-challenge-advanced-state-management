import { FETCH_SMURFS_START, FETCH_SMURF_END, ADD_SMURF_TO_LIST, SET_ERROR_TEXT} from './../actions';


export const initialState = {
    smurfs: [],
    isFetching: false,
    error: 'null'
}

export const reducer = (state = initialState, action)=>{
    switch (action.type) {
        case(FETCH_SMURFS_START):
          return({
            ...state,
            isFetching: true,
            smurfs:[]
          });
        case(FETCH_SMURF_END):
          return({
            ...state,
            smurfs: action.payload,
            isFetching: false
          })
        case(ADD_SMURF_TO_LIST):
          return({
            ...state,

            
          });
          case(SET_ERROR_TEXT):
          return({
            ...state,
            error: action.payload
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