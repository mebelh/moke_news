import {FETCH_NEWS, LOAD_NEWS} from '../types'

const initialState = {
   newsData: [],
   showNews: [],
   lastId: 0
}

export function newsReducer(state = initialState, action) {
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