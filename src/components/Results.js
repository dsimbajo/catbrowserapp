import React, { Component } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import '../../node_modules/react-bootstrap/dist/react-bootstrap';
import { Card }  from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CatsContext from '../services/CatsContext';

const CatDetailContext = React.createContext({});

class CatCard extends Component {

    static contextType = CatDetailContext;

    render() {

        return (
            <Card>
            <Card.Img variant="top" src={this.context.catData.url} />
            <Card.Body>
              <Link className="btn btn-primary btn-block" class="btn btn-primary btn-block cat-btn" to={{pathname:"/" + this.context.catData.imageId, state: {catData: this.context.catData}}}>View details</Link>
            </Card.Body>
          </Card>
           
        );
    }
}

class Results extends Component {

    constructor(props){
        super(props);

        this.state = {currentPage: 1, catDataCount: 0, cats: []}
    }

    showMore(){

        this.setState({currentPage: this.state.currentPage + 1});

        this.context.fetchCatImagesData(this.props.catData[0].breedId,this.state.currentPage);
    }

    render() {

        let columns = null;
        let newCats = [];
        let showMoreButton = null;
        const catData = this.props.catData;
        
            catData.forEach(cat => {

                let index = this.state.cats.findIndex(c => c.imageId == cat.imageId);

                if(index == -1){
                    this.state.cats.push(cat);  

                    newCats.push(cat);
                }     
            });
    
        if(newCats.length === 0){
            showMoreButton = null;
        }
        else {
            showMoreButton =  <Row>
            <Row className="justify-content-md-center" class="cat-row">
                <Col xs lg="2"><Button onClick={this.showMore.bind(this)}>Load More</Button></Col>
                <Col md="auto"></Col>
                <Col xs lg="2"></Col>
            </Row>
            </Row>
        }

        if(this.state.cats !== undefined && this.state.cats.length > 0){
            columns = this.state.cats.map((cat,index) => {
                return <Col md={3} sm={6} xs={12} key={index} className="cat-col">
                    <CatDetailContext.Provider value = {{catData: cat}}>
                        <CatCard class="card h-100"></CatCard>
                    </CatDetailContext.Provider>
                 </Col>
            });
        }
        return (
            <Container>
                <Row className="cat-row">      
                    {columns}            
                </Row>     
                {showMoreButton}
            </Container>
        );
    }
}

Results.contextType = CatsContext;
export default Results;