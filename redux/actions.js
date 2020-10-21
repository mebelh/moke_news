import {FETCH_NEWS, LOAD_NEWS} from './types'

export function fetchNews() {
   return async (dispatch) => {
      const res = await fetch('http://newsapi.org/v2/top-headlines?country=us&apiKey=2fa2b9166a9d4f8a9cdb5bd306d40a71')
      const posts = await res.json()
      dispatch({
         type: FETCH_NEWS,
         payload: posts['articles']
      })
      dispatch({
         type: LOAD_NEWS
      })
   }
}

export function loadNews() {
   return {
      type: LOAD_NEWS
   }
}