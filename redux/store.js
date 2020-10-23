import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import {FETCH_NEWS, LOAD_NEWS} from './types'
import thunk from 'redux-thunk'

let store

const initialState = {
   newsData: [],
   showNews: [],
   lastId: 0
}

function newsReducer(state = initialState, action) {
   switch (action.type) {
      case FETCH_NEWS:
         return {
            ...state,
            newsData: action.payload
         }
      case LOAD_NEWS:
         const lastId = state['showNews'].length
         return {
            ...state,
            showNews: [
               ...state['showNews'],
               ...state['newsData'].slice(lastId, lastId + 4)
            ]
         }
      default:
         return state
   }
}

function initStore(preloadedState = initialState) {
   return createStore(
      newsReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(thunk))
   )
}

export const initializeStore = (preloadedState) => {
   let _store = store ?? initStore(preloadedState)
   if (preloadedState && store) {
      _store = initStore({
         ...store.getState(),
         ...preloadedState,
      })
      store = undefined
   }
   if (typeof window === 'undefined') return _store
   if (!store) store = _store
   return _store
}

export function useStore(initialState) {
   const store = useMemo(() => initializeStore(initialState), [initialState])
   return store
}