import {newsReducer} from './newsReducer'
import {combineReducers} from 'redux'

export default function rootReducer() {
   return combineReducers({
      news: newsReducer
   })
}