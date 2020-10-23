import React from 'react'
import {Provider} from 'react-redux'
import NextNprogress from 'nextjs-progressbar'
import '../styles/globals.css'
import {useStore} from '../redux/store'

function MyApp({Component, pageProps}) {
// const store = createStore(rootReducer,{}, composeWithDevTools(applyMiddleware(thunk)))
   const store = useStore(pageProps.initialReduxState)

   return (
      <Provider store={store}>
         <NextNprogress
            color="#29D"
            startPosition="0.3"
            stopDelayMs="200"
            height="3"
         />
         <Component {...pageProps}/>
      </Provider>
   )
}


export default MyApp
