
import { Form } from 'react-bootstrap';
import { SectionType } from '../types.d.ts';

interface Props {
 type: SectionType
loading?: boolean
value: string
onChange: (value: string) => void
}

const getPlaceholer = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
    if (type === SectionType.From) {return 'Enter text to translate'}
    if (loading === true) {return 'Translating...'}
    return 'Translation'
}
export const TextArea = ({ loading, type, value, onChange }: Props) =>{

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value)
    }

    return (
        <Form.Control 
        as='textarea' 
        value={value}
        placeholder={getPlaceholer({ type, loading })} 
        style={{height: '150px'}} 
        onChange={handleChange}/>)
}