import Results from '../Results';

//Preloader when fetching data
const Loader = ({loading, catData}) => 
    loading ? (
        <div class="box">
            <div class="cat">
                <div class="cat__body"></div>
                <div class="cat__body"></div>
                <div class="cat__tail"></div>
                <div class="cat__head"></div>
            </div> 
        </div>
    ): <Results catData={catData} />;

export default Loader;