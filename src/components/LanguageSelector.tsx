import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constants.ts'
import { SectionType, type FromLanguage, type Language } from '../types.d.ts'

type Props =
    | {type: SectionType.From, vakue: FromLanguage, onChange: (lang: FromLanguage) => void}
    | {type: SectionType.To, value: Language, onChange: (lang: Language) => void}

export const LanguageSelector = ({ onChange, type, value }: Props) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as Language)
    }

    return (
        <Form.Select aria-label='Selecciona el idioma' onChange={handleChange}>
            {type === SectionType.From && <option value={AUTO_LANGUAGE}>Detect language</option>}

            {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
                <option key={key} value={key}>{literal}
                </option>
            ))}
        </Form.Select>
    )
}