import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchFact } from '../actions'

const uselessFact = props => {
   const { fact, source, isFetching, error, fetchFact } = props

   const handleClick = () => {
      fetchFact()
   }

   useEffect(() => {
      fetchFact()
   }, [])

   if (error) {
      return (
         <div>
            <h3>There was an error: {error}</h3>
         </div>
      )
   }

   if (isFetching) {
      return (
         <div>
            <h3>Please wait, fetching fact now...</h3>
         </div>
      )
   }

   return (
      <>
         <div>
            <h2>Here is a useless fact:</h2>
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