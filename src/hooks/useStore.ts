
import  { type State, type Action, Language, FromLanguage } from '../types.d'
import { useReducer } from 'react';


export function useStore(){
    const [{
      fromLang,
      toLang,
      fromText,
      result,
      loading
    }, dispatch] =useReducer(reducer, initialState)

    const interchangeLang = () => dispatch({ type: 'Interchange-Lang' })
    const setFromLang = (payload: FromLanguage) => dispatch({ type: 'set-from-language', payload }) 
    const setToLang = (payload: Language) => dispatch({ type: 'set-to-language', payload })
    const setFromText = (payload: string) => dispatch({ type: 'set-from-text', payload })
    const setResult = (payload: string) => dispatch({ type: 'set-result', payload })
  
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

const initialState ={
    fromLang: 'auto',
    toLang: 'en',
    fromText: '',
    result: '',
    loading: false
  }
  
function reducer (state: State, action : Action) {
    const { type }  = action
  
    if (type === 'Interchange-Lang'){
        if( state.fromLang === 'auto' ){ return state }
      return {
        ...state, 
        fromLang: state.toLang,
        toLang: state.fromLang
      }
    }
  
    if ( type === 'set-from-language' ){
      return {
        ...state,
        fromLang: action.payload
      }
    }
    if ( type === 'set-to-language' ){
      return {
        ...state,
        toLang: action.payload
      }
    }
  
    if ( type === 'set-from-text' ){
      return {
        ...state,
        loading: true,
        fromText: action.payload,
        result: ''
      }
    }
    if( type === 'set-result'){
      return {
        ...state,
        loading: false,
        result: action.payload
      }
    }
  
    return state
  }
