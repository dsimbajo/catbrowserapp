import CatsContext from './CatsContext';
import { Component } from 'react';
import { CatAPI } from './CatAPI';

class CatsContextProvider extends Component {

    constructor(props){
        super(props);

        //Method called when selectecting cat on dropdownlist
        this.changeSelectedCat = (event) =>{

            this.setState(state => ({
                loading: true
            }))

            let catId = undefined;

            if(event != null)
            {
                if(event.target === undefined || event === null){
                    catId = event;
                }
                else{
                    catId = event.target.value;
                }
    
                localStorage.setItem("selectedCat", catId);
    
                this.fetchSelectedCatData(catId);
            } 
        }

        //Method called when clicking Show More
        this.fetchCatImagesData = (breedId, page) => {

            this.fetchSelectedCatData(breedId, page);

        }

        this.state = {
            cats: [],
            catImages: [],
            catDetails: undefined,
            selectedCat: undefined,
            catData: [],
            loading: false,
            currentPage: 1,
            changeSelectedCat: this.changeSelectedCat,
            fetchCatImagesData: this.fetchCatImagesData
        };
    }

    fetchSelectedCatData(catId, pageNumber){
    
        const page = pageNumber == undefined ?  
            this.state.currentPage :pageNumber

        CatAPI.searchBreedImages(catId,page)
        .then(data => {

            const catData = Array.from(new Set(data.map((d) => {
                let cat = null;
                cat = {
                            url: d.url, 
                            imageId: d.id,
                            breedId: d.breeds[0].id,
                            breedName: d.breeds[0].name,
                            origin: d.breeds[0].origin,
                            temperament: d.breeds[0].temperament,
                            description: d.breeds[0].description
                        }
                return cat;
            })));
           
            this.setState(state => ({
                catData: catData,
                loading: false
            }))
        });

    }

    componentDidMount(){
        this.fetchCatsData();
    }

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

    render() {       
        return (
            <CatsContext.Provider value={this.state}>
                {this.props.children}
            </CatsContext.Provider> 
        )
    }

}

export default CatsContextProvider;