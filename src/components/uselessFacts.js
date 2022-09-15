import React from 'react'
import { connect } from 'react-redux'
import { fetchFact } from '../actions'

const uselessFact = props => {
   const { fact, source, isFetching, error, fetchFact } = props

   const handleClick = () => {
      fetchFact()
   }

   return (
      <>
         <div>
            <h2>Here is an useless fact:</h2>
            <p>{fact}</p>
            <p>Source: {source}</p>
         </div>
         <button onClick={handleClick}>Get new fact</button>
      </>
   )
}

const mapStateToProps = state => {
   return {
      fact: state.fact.text,
      source: state.fact.source,
      isFetching: state.isFetching,
      error: state.error
   }
}

export default connect(mapStateToProps, { fetchFact })(uselessFact)