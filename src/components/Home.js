import React, { Component } from 'react';
import { Container, Row, Col, Form,  Button } from 'react-bootstrap';
import  Results  from '../components/Results';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    render() {
        return (
            <Container fluid>
                <Row className="justify-content-md-center" class="cat-row">
                    <Col xs lg="2"></Col>
                    <Col md="auto"><h1>Cat Browser</h1></Col>
                    <Col xs lg="2"></Col>
                </Row>
                <Row className="justify-content-md-center cat-row" class="cat-row">
                    <Col xs lg="2"><h6>Breed: </h6></Col>
                    <Col md="auto"></Col>
                    <Col xs lg="2"></Col>
                </Row>
                <Row className="justify-content-md-center cat-row" class="cat-row">
                    <Col xs lg="2">
                        <Form.Control as="select" size="md cat-row">
                            <option>Large select</option>
                            <option>Large select</option>
                            <option>Large select</option>
                            <option>Large select</option>
                            <option>Large select</option>
                            <option>Large select</option>
                            <option>Large select</option>
                            <option>Large select</option>
                            <option>Large select</option>
                        </Form.Control>                                   
                    </Col>
                    <Col md="auto"></Col>
                    <Col xs lg="2"></Col>
                </Row>
                <Row className="cat-row">
                    <Col><Results/></Col>
                </Row>
                <Row>
                <Row className="justify-content-md-center" class="cat-row">
                    <Col xs lg="2"><Button>Load More</Button></Col>
                    <Col md="auto"></Col>
                    <Col xs lg="2"></Col>
                </Row>
                </Row>

            </Container>
        );
    }
}

export default Home;