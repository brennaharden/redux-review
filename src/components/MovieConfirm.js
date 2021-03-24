import React from 'react'
import styles from './styles'
import { connect } from 'react-redux'
import { updateMovieList } from '../redux/movieReducer'
// Import connect into your MovieConfirm component from 'react-redux'.

const MovieConfirm = props => {

  // The MovieConfirm component currently has placeholder strings of TITLE, RATING, and URL. Change those strings to references to our values on props to make them display correctly.
  const {title, poster, rating} = props

  const confirmMovie = () => {
    props.updateMovieList({title, poster, rating})
    props.history.push('/list')
  }

  

  return (
    
    <div style={styles.container}>
      <p style={styles.containerHeading}>CONFIRM YOUR DETAILS</p>
      <p style={styles.confirmText}>{`${title} - ${rating}`}</p>
      <img src={`${poster}`} alt="Movie Poster" />
      <div>
        <button
          onClick={() => props.history.push('/')}
          style={styles.formButton}
        >
          BACK
        </button>
        <button onClick={confirmMovie} style={styles.formButton}>
          CONFIRM
        </button>
      </div>
    </div>
  )
}

// Outside of your component create a function called mapStateToProps which accepts a single argument, our redux state. You can call this whatever you want.
const mapStateToProps = (state) => {
  const { title, poster, rating } = state
  return {
    title, poster, rating
  }
}
// Destructure title, poster, and rating from our redux state and return an object containing those three values from our mapStateToProps function. When provided to the first invocation of connect this will take those values from our redux state and put them on the props of our MovieConfirm component.

// Pass mapStateToProps to the first invocation of connect and console log props in our MovieConfirm component to test that these props are being applied properly.

// Wrap your export of MovieConfirm in the second invocation of connect.

export default connect(mapStateToProps, {updateMovieList})(MovieConfirm)
