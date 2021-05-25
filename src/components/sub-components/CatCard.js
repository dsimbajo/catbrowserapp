import React, { Component } from 'react';
import { Card, Button }  from 'react-bootstrap';
import '../../../node_modules/react-bootstrap/dist/react-bootstrap';

class CatCard extends Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg" />
            <Card.Body>
                <Button variant="primary">View Details</Button>
            </Card.Body>
            </Card>
           
        );
    }
}

export default CatCard;