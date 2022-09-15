import { FETCH_FAIL, FETCH_START, FETCH_SUCCESS } from '../actions'

const initialState = {
   fact: {
      id: '',
      text: '',
      source: ''
   },
   isFetching: false,
   error: ''
}

export const reducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_START:
         return {
            ...state,
            isFetching: true
         }
      case FETCH_FAIL:
         return {
            ...state,
            isFetching: false,
            error: action.payload
         }
      case FETCH_SUCCESS:
         return {
            ...state,
            isFetching: false,
            fact: action.payload
         }
      default:
         return state
   }
}