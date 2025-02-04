
import { autoLanguage, supportedLanguages } from './constants/constants'

export type Language = keyof typeof supportedLanguages
export type AutoLanguage = typeof autoLanguage
export type FromLanguage = Language | AutoLanguage

export interface State {
        fromLang: string,
        toLang: string,
        fromText: string,
        result: string,
        loading: boolean
 }

 export type Action =
    | { type: 'Interchange-Lang' }
    | { type: 'set-from-language', payload: string }
    | { type: 'set-to-language', payload: string }
    | { type: 'set-from-text', payload: string }
    | { type: 'set-result', payload: string }