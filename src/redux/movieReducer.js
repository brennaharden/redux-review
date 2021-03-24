// Our initial state which will need the following properties and default values: title: '', poster: '', rating: null, movies: [].
const initialState = {
    title: "",
    poster: "",
    rating: null,
    movies: []

}

// An action constant called "SET_MOVIE_INFO".
const SET_MOVIE_INFO = 'SET_MOVIE_INFO'
const UPDATE_MOVIE_LIST = 'UPDATE_MOVIE_LIST'

// An action creator, a function called setMovieInfo that does the following:
// Takes in title, poster, and rating as parameters
// Returns an object containing two properties: type and payload
// type will be our SET_MOVIE_INFO constant
// payload will be an object containing our title, poster, and rating
// Make sure to export this function

export const setMovieInfo = (title, poster, rating) => {
    return {
        type: SET_MOVIE_INFO,
        payload: {title, poster, rating}
    }
}

export const updateMovieList = (newMovie) => {
    return {
        type: UPDATE_MOVIE_LIST,
        payload: newMovie
    }
}

// Our reducer function which will take in state (this should default to initialState)and action. It will contain:
// A switch statement that will switch on our action.type.
// In that switch statement, set up a case for SET_MOVIE_INFO which will return an updated redux state with our title, poster, and rating properties updated (HINT: Use the spread operator to do this easily)
// Don't forget to include a default case that will just return our state object
// This function needs to be our default export from this file.

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIE_INFO:
            return {...state, ...action.payload}
        case UPDATE_MOVIE_LIST:
            return {...state, title: '', poster: '', rating: null, movies: [...state.movies, action.payload]}
        default:
            return state
    }
}

export default moviesReducer