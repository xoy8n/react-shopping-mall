import logo from './logo.svg';
import { useState } from 'react';
import {Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  let [shoes] = useState()
  
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      <Container>
        <Row>
          <Col sm>
            <img src="https://cms.accuweather.com/wp-content/uploads/2018/06/surf-4.jpg" width="80%"/>
            <img src={`${process.env.PUBLIC_URL}https://cms.accuweather.com/wp-content/uploads/2018/06/surf-4.jpg`} width="80%"/>
            <img src={process.env.PUBLIC_URL + 'https://cms.accuweather.com/wp-content/uploads/2018/06/surf-4.jpg' } width="80%"/>
           
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img src="https://cms.accuweather.com/wp-content/uploads/2018/06/surf-4.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img src="https://cms.accuweather.com/wp-content/uploads/2018/06/surf-4.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
        <Row>
          <Col sm>
            <img src="https://cms.accuweather.com/wp-content/uploads/2018/06/surf-4.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img src="https://cms.accuweather.com/wp-content/uploads/2018/06/surf-4.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col sm>
            <img src="https://cms.accuweather.com/wp-content/uploads/2018/06/surf-4.jpg" width="80%"/>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
