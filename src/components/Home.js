import React, { Component } from 'react';
import { Container, Row, Col, Form,  Button } from 'react-bootstrap';
import  Results  from '../components/Results';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CatAPI } from '../services/CatAPI';
import CatContext from '../services/CatContext';

class Home extends Component {


    constructor(props){
        super(props);

        this.state = {selectedCat: undefined, catImages: undefined}       
    }

    handleOnChange(event){

        CatAPI.searchCatBreed(event.target.value)
        .then(data => {

            console.log(data);

            const cats = data.map((d) => {
                let cat = null;
                cat = {
                        id: d.id,
                        breedName: d.name,
                        temperament: d.temperament,
                        image: d.image,
                        origin: d.origin,
                        description: d.description
                    } 
                return cat;      
            });  
            
            this.setState({ selectedCat: cats[0] });
            console.log(this.state.selectedCat);
            
        });

        CatAPI.searchBreedImages(event.target.value)
        .then(data => {

            const catImages = Array.from(new Set(data.map((d) => d.url))) || [];
           
            this.setState({ catImages });

        });
    }

    populateSearchList(data){

        let activeComponent = null;
          
        if(data !== undefined && data.length > 0)
        {
            activeComponent = data.map((c) => {
              return  <option key={c.id} value={c.id}>{c.breedName}</option>
            })

        }

        return activeComponent;
    }


    render() {

        const catImages = this.state.catImages;

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
                        <CatContext.Consumer>
                            {context => (
                                <Form.Control as="select" size="md cat-row" onChange={this.handleOnChange.bind(this)}>
                                <option>Select Breed</option>
                                    {this.populateSearchList(context.cats)}
                                </Form.Control>  
                            )}                       
                        </CatContext.Consumer>                                     
                    </Col>
                    <Col md="auto"></Col>
                    <Col xs lg="2"></Col>
                </Row>
                <Row className="cat-row">
                    <Col><Results detail="Test" images={catImages} selectedCat={this.state.selectedCat}/></Col>
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