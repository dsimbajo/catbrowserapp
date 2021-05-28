import React, { Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import '../../node_modules/react-bootstrap/dist/react-bootstrap';
import CatCard from './sub-components/CatCard';

class Results extends Component {

    render() {

        let columns = null;

        const catImages = this.props.images;
        const catDetails = this.props.selectedCat;

        if(catImages !== undefined && catImages.length > 0){
            columns = catImages.map(c => {
                return <Col>
                     <CatCard key={c} details={catDetails} catImage={c}></CatCard>
                 </Col>
         });
        }

        return (
            <Container>
                <Row>      
                    {columns}            
                </Row>
               
            </Container>
        );
    }
}

export default Results;