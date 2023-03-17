import logo from './logo.svg';
import { useState } from 'react';
import {Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import prdData from './data.js';

function App() {
  //surfing이라는 컴포넌트는 App 컴포넌트 안에 있다.
  // App의 자식인 Card 컴포넌트가 쓰고 싶으면 props 전송해주면 된다.
  let [surfing] = useState(prdData);

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
          {
            surfing.map(function(a,i){
              return(
                <Card surfing={surfing[i]} i={i}></Card>
              )
            })
          }
        </Row>
      </Container>
    </div>
  );
}

function Card(props){
  return(
    <Col sm>
      <img src={`${process.env.PUBLIC_URL}https://cms.accuweather.com/wp-content/uploads/2018/06/surf-${props.i+1}.jpg`} width="80%"/>
      <h4>{props.surfing.title}</h4>
      <p>{props.surfing.price}</p>
    </Col>
  )
}

export default App;
