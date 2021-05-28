import CatContext from '../services/CatContext';
import { Component } from 'react';
import { CatAPI } from '../services/CatAPI';

class ContextProvider extends Component {

    state = { cats: []}

    fetchCatsData = async cats => {
        this.setState({ cats });

        CatAPI.getCatBreeds()
        .then(data => {
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
          
            this.setState({cats});

        });
    }
    
    componentDidMount(){
        this.fetchCatsData();
    }

    render() {       
        return (
            <CatContext.Provider value={{cats: this.state.cats}}>
                {this.props.children}
            </CatContext.Provider> 
        )
    }

}

export default ContextProvider;