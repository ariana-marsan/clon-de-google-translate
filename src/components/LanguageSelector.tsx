import { Form } from 'react-bootstrap'
import { SUPPORTED_LANGUAGES } from '../constants.ts'
import { FromLanguage, type Language } from '../types.ts'

type Props =
    | {type: 'from', vakue: FromLanguage, onChange: (lang: FromLanguage) => void}
    | {type: 'to', value: Language, onChange: (lang: Language) => void}

export const LanguageSelector = ({ onChange }: Props) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
    }

    return (
        <Form.Select aria-label='Selecciona el idioma'>
            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>{literal}
                </option>
            ))}
        </Form.Select>
    )
}