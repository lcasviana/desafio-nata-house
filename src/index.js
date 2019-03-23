import React from "react"
import ReactDOM from "react-dom"

import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import ReduxThunk from 'redux-thunk'

import App from "App"
import Reducers from "reducers"

import "css/style.css"
import "tachyons"

ReactDOM.render(<Provider store={createStore(Reducers, applyMiddleware(ReduxThunk))}><App /></Provider>, document.getElementById("root"))