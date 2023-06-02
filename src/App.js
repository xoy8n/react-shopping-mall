import { useState } from 'react';
import {Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import prdData from './data.js';
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom'
import Detail from './routes/Detail.js'

function App() {
  //surfing이라는 컴포넌트는 App 컴포넌트 안에 있다.
  // App의 자식인 Card 컴포넌트가 쓰고 싶으면 props 전송해주면 된다.
  let [surfing] = useState(prdData);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand>SURFERSHOP</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
          <Nav.Link onClick={()=>{navigate('/event')}}>Event</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg'></div>

            <Container>
              <Row>
                { surfing.map((a,i)=>{
                  return <Card surfing={surfing[i]} i={i}></Card>
                })}
              </Row>
            </Container>
          </>
        }/>
        <Route path="/detail/:id" element={<Detail surfing={surfing}/>}/>
        <Route path="/event" element={<About/>}>
          <Route path="one" element={<h5>첫 주문시 양배추즙 서비스</h5>}/>
          <Route path="two" element={<h5>생일기념 쿠폰받기</h5>}/>
        </Route>
        <Route path="*" element={<h1>404 Pages</h1>}/>
      </Routes>
    </div>
  );
}

function About(){
  return(
    <div>
      <h2>오늘의 이벤트</h2>
      <Outlet></Outlet>
    </div>
  )
}



function Card(props){
  return(
    <Col sm>
      {/* eslint-disable-next-line  */}
      <img src={`${process.env.PUBLIC_URL}https://cms.accuweather.com/wp-content/uploads/2018/06/surf-${props.i+1}.jpg`} width="100%"/>
      <h4>{props.surfing.title}</h4>
      <h4>{props.surfing.content}</h4>
      <p>{props.surfing.price}</p>
    </Col>
  )
}



export default App;
