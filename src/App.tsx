import { useStore } from './hooks/useStore.ts';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { autoLanguage } from './constants/constants.ts';

function App() {

  const { fromLang, setFromLang, toLang, interchangeLang } = useStore()
  console.log(fromLang)

  return (
    <Container fluid className='container'>
    <h1>Google Translate</h1>
    <Row>
      <Col>
        <h2>From</h2>
        {fromLang}
      </Col>
      <Col>
       <button onClick={(interchangeLang)} disabled={fromLang === autoLanguage} ><i className="fa-solid fa-right-left"></i></button>
      </Col>
      <Col>
        <h2>To</h2>
        {toLang}
      </Col>
    </Row>
    </Container>
  );
}

export default App;
 