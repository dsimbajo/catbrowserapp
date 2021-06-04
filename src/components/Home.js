import { Component } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import  Results  from '../components/Results';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CatsContext from '../services/CatsContext';
import Loader from '../components/sub-components/Loader';



class Home extends Component {

    constructor(props){
        super(props);
        this.state = {selectedCat: undefined, catImages: undefined, loading: false}      
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

    componentDidMount(){

        const querySplit = window.location.href.split('?');

        if(querySplit.length > 1)
        {
            const selectedCat = localStorage.getItem("selectedCat");
            this.context.changeSelectedCat(selectedCat);
            this.setState({selectedCat})
        }
        else{
            const selectedCat = "Select Breed"
            this.context.changeSelectedCat(selectedCat);
            this.setState({selectedCat: undefined})
        } 
    }

    render() {

        const selectedCat = localStorage.getItem("selectedCat");

        return (    
            <CatsContext.Consumer>
                {({cats, catData, loading, changeSelectedCat}) => (
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
                    <Form.Control as="select" size="md cat-row" value={selectedCat} onChange={changeSelectedCat}>
                        <option key="Select Breed" value="Select Breed">Select Breed</option>
                        {this.populateSearchList(cats)}
                    </Form.Control>  
                    </Col>
                    <Col md="auto"></Col>
                    <Col xs lg="2"></Col>
                </Row>
                <Row className="cat-row">                     
                        <Col>
                            <Loader loading={loading} catData={catData} />
                        </Col>
                </Row>
                {/* <Row>
                    <Row className="justify-content-md-center" class="cat-row">
                        <Col xs lg="2"><Button>Load More</Button></Col>
                        <Col md="auto"></Col>
                        <Col xs lg="2"></Col>
                    </Row>
                </Row> */}
            </Container>
            )}
            </CatsContext.Consumer>
        );   
    }
}

Home.contextType = CatsContext;

export default Home;