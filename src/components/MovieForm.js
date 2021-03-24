import React, { Component } from 'react'
import styles from './styles'
import { connect } from 'react-redux'
import { setMovieInfo } from '../redux/movieReducer'

// Import connect from react-redux and setMovieInfo from our moviesReducer.js file.

class MovieForm extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      poster: '',
      rating: null,
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  // Inside of handleSubmit, invoke the props version of setMovieInfo, passing it title, poster, and rating from our local state.

  handleSubmit = e => {
    e.preventDefault()
    const {title, poster, rating} = this.state
    this.props.setMovieInfo(title, poster, rating)
    this.props.history.push('/confirm')
  }

  render() {
    return (
      <div style={styles.container}>
        <p style={styles.containerHeading}>INPUT DETAILS</p>
        <form onSubmit={this.handleSubmit} style={styles.form}>
          <input
            style={styles.formInput}
            name="title"
            placeholder="Title"
            onChange={this.handleChange}
          />
          <input
            style={styles.formInput}
            name="poster"
            placeholder="Poster URL"
            onChange={this.handleChange}
          />
          <input
            style={styles.formInput}
            name="rating"
            placeholder="Rating"
            onChange={this.handleChange}
            type="number"
            max={10}
            min={0}
          />
          <button type="submit" style={styles.formButton}>
            NEXT
          </button>
        </form>
      </div>
    )
  }
}

// Wrap your export of MovieForm in the second invocation of connect. Because we don't need to display any redux state values in this component, just set them, instead of passing mapStateToProps to the first invocation of connect, we will pass null and an object containing our setMovieInfo function as the second argument.

export default connect(null, {setMovieInfo})(MovieForm)
