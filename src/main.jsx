import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

import store from "./store/store.js";
import { Provider } from "react-redux";
import BreadCrumbs from './components/breadcrumbs/BreadCrumbs.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <BrowserRouter>

  <Provider store={store}>
  {/* <BreadCrumbs> */}

      <App />
  {/* </BreadCrumbs> */}
    </Provider>
  </BrowserRouter>
  </>,
)
