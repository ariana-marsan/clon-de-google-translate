
import { autoLanguage, SUPPORTED_LANGUAGES } from './constants'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof autoLanguage
export type FromLanguage = Language | AutoLanguage

export interface State {
        fromLang: FromLanguage
        toLang: Language
        fromText: string
        result: string
        loading: boolean
 }

 export type Action =
    | { type: 'Interchange-Lang' }
    | { type: 'set-from-language', payload: FromLanguage }
    | { type: 'set-to-language', payload: Language }
    | { type: 'set-from-text', payload: string }
    | { type: 'set-result', payload: string }