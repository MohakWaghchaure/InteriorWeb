import { Fragment } from 'react';
import Container from './Container';
import '../styles/common.scss'
function Home(){
    return(
        <Fragment>
            <Container className="intro-adj" id="home">
                <div className="row col-lg-6 intro-container">
                    <div className="title-container">
                        <h1>Interior Design</h1>
                    </div>
                    <div className="description-container">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                    </div>
                    <div className="button-container">
                        <button>Learn More</button>
                    </div>
                </div>
                <div className="intro-background">
                    
                </div>
            </Container>
        </Fragment>
    )
}

export default Home;