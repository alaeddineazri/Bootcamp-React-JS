import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button ,Form,Card,Container,Navbar}from 'react-bootstrap'
// import React from 'react';
function App() {
  return (
    <div className="App">
      <Container>
        <Navbar  className="App-nav" expand="lg" variant="dark" bg="dark">
          <Navbar.Brand href="#">HOME</Navbar.Brand>
          <Navbar.Brand href="#">ABOUT</Navbar.Brand>
          <Navbar.Brand href="#" >CONTACT</Navbar.Brand>
        </Navbar>
      </Container>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Card style={{ width: '18rem' ,margin:'5rem'}}>
      <Card.Img variant="top" src="https://picsum.photos/200/300" />
      <Card.Body>
        <Card.Title style={{color:"#000" }}>Card Title</Card.Title>
        <Card.Text  style={{color:"#000" }}>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default App;
