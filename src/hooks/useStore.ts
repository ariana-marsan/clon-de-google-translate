
import { AUTO_LANGUAGE } from '../constants.ts';
import  { type State, type Action, Language, FromLanguage } from '../types.d'
import { useReducer } from 'react';


const initialState: State ={
  fromLang: 'auto',
  toLang: 'en',
  fromText: '',
  result: '',
  loading: false
}

function reducer (state: State, action : Action) {
    const { type }  = action
  
    if (type === 'INTERCHANGE-LANGUAGES'){
        if( state.fromLang === AUTO_LANGUAGE ){ return state }
        
      return {
        ...state, 
        fromLang: state.toLang,
        toLang: state.fromLang
      }
    }
  
    if ( type === 'SET_FROM_LANGUAGE' ){
      return {
        ...state,
        fromLang: action.payload
      }
    }
    if ( type === 'SET_TO_LANGUAGE' ){
      return {
        ...state,
        toLang: action.payload
      }
    }
  
    if ( type === 'SET_FROM_TEXT' ){
      return {
        ...state,
        loading: true,
        fromText: action.payload,
        result: ''
      }
    }
    if( type === 'SET_RESULT'){
      return {
        ...state,
        loading: false,
        result: action.payload
      }
    }
  
    return state
  }


export function useStore(){
  const [{
    fromLang,
    toLang,
    fromText,
    result,
    loading
  }, dispatch] =useReducer(reducer, initialState)

  const interchangeLang = () =>{ dispatch({ type: 'INTERCHANGE-LANGUAGES' })}

  const setFromLang = (payload: FromLanguage) => {dispatch({ type: 'SET_FROM_LANGUAGE', payload }) }

  const setToLang = (payload: Language) => {dispatch({ type: 'SET_TO_LANGUAGE', payload })}

  const setFromText = (payload: string) => {dispatch({ type: 'SET_FROM_TEXT', payload })}

  const setResult = (payload: string) => {dispatch({ type: 'SET_RESULT', payload })}

  return {
    fromLang,
    toLang,
    fromText,
    result,
    loading,
    interchangeLang,
    setFromLang,
    setToLang,
    setFromText,
    setResult
    }
}
