import React from 'react'
import {applyMiddleware, createStore} from 'redux'
import App from 'next/app'
import {Provider, useDispatch} from 'react-redux'
import {createWrapper} from 'next-redux-wrapper'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import NextNprogress from 'nextjs-progressbar'
import '../styles/globals.css'
import rootReducer from '../redux/reducers/rootReducer'
import {useStore} from '../redux/store'
import {fetchNews} from '../redux/actions'

function MyApp({Component, pageProps}) {
// const store = createStore(rootReducer,{}, composeWithDevTools(applyMiddleware(thunk)))
   const store = useStore(pageProps.initialReduxState)

   return (
      <Provider store={store}>
         {/*<NextNprogress*/}
         {/*   color="#29D"*/}
         {/*   startPosition="0.3"*/}
         {/*   stopDelayMs="200"*/}
         {/*   height="3"*/}
         {/*/>*/}
         <Component {...pageProps}/>
      </Provider>
   )
}


export default MyApp
