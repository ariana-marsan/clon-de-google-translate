import { useStore } from './hooks/useStore.ts';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { autoLanguage } from './constants.ts';
import { LanguageSelector } from './components/LanguageSelector.tsx';


function App() {

  const { fromLang, setFromLang, toLang, interchangeLang, setToLang } = useStore()
  console.log(fromLang)

  return (
    <Container fluid className='container'>
    <h1>Google Translate</h1>
    <Row>
      <Col>
        <LanguageSelector 
        type='from' 
        value={fromLang}
        onChange={setFromLang}  />
        {fromLang}
      </Col>
      <Col>
       <Button variant="link" onClick={(interchangeLang)} disabled={fromLang === autoLanguage} ><i className="fa-solid fa-right-left"></i></Button>
      </Col>
      <Col>
        <LanguageSelector  
        type='to' 
        value={toLang}
        onChange={setToLang} />
        {toLang}
      </Col>
    </Row>
    </Container>
  );
}

export default App;
 