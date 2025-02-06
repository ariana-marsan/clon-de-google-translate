import { useStore } from './hooks/useStore.ts';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Form, Stack } from 'react-bootstrap';
import { AUTO_LANGUAGE } from './constants.ts';
import { LanguageSelector } from './components/LanguageSelector.tsx';
import { SectionType } from './types.d.ts';
import { TextArea } from './components/TextArea.tsx';


function App() {

  const { fromLang, setFromLang, toLang, interchangeLang, setToLang, fromText, result, setFromText, setResult, loading } = useStore()
  console.log(fromLang)

  return (
    <Container fluid className='container'>
    <h1>Google Translate</h1>
    <Row>
      <Col>
      <Stack gap={2}>
        <LanguageSelector 
        type= {SectionType.From}
        value={fromLang}
        onChange={setFromLang}  />
        <TextArea type={SectionType.From} value={fromText} onChange={setFromText} loading={loading}/>
      </Stack>
      </Col>
      <Col xs='auto'>
       <Button variant="link" onClick={(interchangeLang)} disabled={fromLang === AUTO_LANGUAGE} ><i className="fa-solid fa-right-left"></i></Button>
      </Col>
      <Col>
        <Stack gap={2}>
        <LanguageSelector  
        type= {SectionType.To} 
        value={toLang}
        onChange={setToLang} />
        <TextArea type={SectionType.To} value={result} onChange={setResult} loading={loading} />
        </Stack>
      </Col>
    </Row>
    </Container>
  );
}

export default App;
 