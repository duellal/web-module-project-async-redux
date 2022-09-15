import axios from 'axios'

export const FETCH_START = 'FETCH_START'
export const FETCH_FAIL = 'FETCH_FAIL'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'

export const fetchFact = () => dispatch => {
   dispatch({ type: FETCH_START })

   axios.get('https://uselessfacts.jsph.pl/random.json?language=en')
      .then(res => {
         dispatch({ type: FETCH_SUCCESS, payload: res.data })
      })
      .catch(err => {
         dispatch({ type: FETCH_FAIL, payload: err })
      })
}