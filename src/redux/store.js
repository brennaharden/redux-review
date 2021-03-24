// Import createStore from redux, moviesReducer from our moviesReducer.js file, and devToolsEnhancer from redux-devtools-extension. Only our moviesReducer is the default export so don't forget to put curly braces around the other two imports.
import { createStore } from 'redux';
import moviesReducer from './movieReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

// Create a variable called store and set it equal to createStore invoked. Pass it our movies reducer as its first argument, its second argument should be devToolsEnhancer invoked. This will connect our app to the redux devtools.

let store = createStore(moviesReducer, devToolsEnhancer())

export default store