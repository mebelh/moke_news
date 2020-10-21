import withRedux from 'next-redux-wrapper'
import NextNprogress from 'nextjs-progressbar'
import {applyMiddleware, compose, createStore} from 'redux'
import {Provider} from 'react-redux'
import App from 'next/app'
import thunk from 'redux-thunk'
import '../styles/globals.css'
import rootReducer from '../redux/reducers/rootReducer'

const store = createStore(rootReducer, compose(
   applyMiddleware(thunk)
))

class MyApp extends App {

   static async getInitialProps({Component, ctx}) {
      const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}

      //Anything returned here can be access by the client
      return {pageProps}
   }

   render() {
      //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
      const {Component, pageProps} = this.props

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
}

const makeStore = () => store

export default withRedux(makeStore)(MyApp)
