import { Jumbotron, Container, Card } from 'react-bootstrap';
import { Link, useLocation, withRouter } from 'react-router-dom';

function Detail(){

    const location = useLocation();

    if(location.state?.catData === undefined){
        return (
            <div class="box">
                <div class="cat">
                    <div class="cat__body"></div>
                    <div class="cat__body"></div>
                    <div class="cat__tail"></div>
                    <div class="cat__head"></div>
                </div>
            </div>    
        ); 
    }
    else{
            const catBreedId = location.state?.catData.breedId;
            const catBreedName = location.state?.catData.breedName;
            const catOrigin = location.state?.catData.origin;
            const catTemperament = location.state?.catData.temperament;
            const catDescription = location.state?.catData.description;
            const catImage = location.state?.catData.url;

        return (
            <Jumbotron fluid>
                <Container className="cat-container">
                    <Card >
                        <Card.Header>
                            <Link className="btn btn-primary" to={'/?breed=' + catBreedId}>
                                Back
                            </Link>
                        </Card.Header>            
                        <Card.Img variant="top" src={catImage} />
                        <Card.Body>
                            <Card.Title>
                                <h2>{catBreedName}</h2>
                            </Card.Title>
                                <h5>Origin: {catOrigin}</h5>
                                <h6>{catTemperament}</h6>
                                    {catDescription}
                        </Card.Body>
                    </Card>
                </Container>
            </Jumbotron>
        ) 
    }

       
}

export default withRouter(Detail);