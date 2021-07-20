import { Fragment } from 'react';
import MyCarousel from './carousel/MyCarousel';
import Container from './Container';
function Projects(){
    return(
        <Fragment>
            <Container id="projects">                
                    <div className="col-lg-12 projects-title-container">
                        <h2>Our Projects</h2>
                    </div>
                    <div className="row col-lg-5 project-description-container">
                        <div className="col-lg-12 projects-description">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                        </div>
                        <div className="col-lg-12 projects-description">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
                        </div>
                        <div className="col-lg-12 projects-button">
                            <button>View All</button>
                        </div>
                        
                    </div>
                    <div className="col-lg-7 projects-slider">
                        <MyCarousel></MyCarousel>
                    </div>
                    
                
                
            </Container>
        </Fragment>
    )
}
export default Projects;