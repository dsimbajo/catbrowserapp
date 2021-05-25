import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import '../../node_modules/react-bootstrap/dist/react-bootstrap';
import CatCard from './sub-components/CatCard';

class Results extends Component {
    render() {
        return (
            <Container>
                <Row>                  
                    <Col>
                        <CatCard/>
                    </Col>
                    <Col>
                        <CatCard/>
                    </Col>
                    <Col>
                        <CatCard/>
                    </Col>
                    <Col>
                        <CatCard/>   
                    </Col>
                    <Col>
                        <CatCard/>
                    </Col>
                    <Col>
                        <CatCard/>
                    </Col>
                    <Col>
                        <CatCard/>
                    </Col>
                    <Col>
                        <CatCard/>   
                    </Col>
                    
                </Row>
               
            </Container>
        );
    }
}

export default Results;