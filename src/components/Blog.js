import { Fragment } from 'react';
import Container from './Container';
import blog001 from '../images/blog001.jpg';
import blog002 from '../images/blog002.jpg';
import blog003 from '../images/blog003.jpg';
import blog004 from '../images/blog004.jpg';

function Blog(){
    return(
        <Fragment>
            <Container id="blog">
                <div className="blog-title-container">
                    <h2>Blog</h2>
                </div>
                <div className="row blog-container">
                    <div className="col-lg-3 blog-card">
                        <div className="col-lg-12 image-container">
                            <img src={blog001}></img>
                        </div>
                        <div className="col-lg-12 blog-title">
                            <h3>hi-tech</h3>
                        </div>
                        <div className="col-lg-12 blog-description">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
                        </div>
                        <div className="col-lg-12 Blog-link">
                            <a>View All</a>
                        </div>
                    </div>
                    <div className="col-lg-3 blog-card">
                        <div className="col-lg-12 image-container">
                            <img src={blog002}></img>
                        </div>
                        <div className="col-lg-12 blog-title">
                            <h3>hi-tech</h3>
                        </div>
                        <div className="col-lg-12 blog-description">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
                        </div>
                        <div className="col-lg-12 Blog-link">
                            <a>View All</a>
                        </div>
                    </div>
                    <div className="col-lg-3 blog-card">
                        <div className="col-lg-12 image-container">
                            <img src={blog003}></img>
                        </div>
                        <div className="col-lg-12 blog-title">
                            <h3>hi-tech</h3>
                        </div>
                        <div className="col-lg-12 blog-description">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
                        </div>
                        <div className="col-lg-12 Blog-link">
                            <a>View All</a>
                        </div>
                    </div>
                    <div className="col-lg-3 blog-card">
                        <div className="col-lg-12 image-container">
                            <img src={blog004}></img>
                        </div>
                        <div className="col-lg-12 blog-title">
                            <h3>hi-tech</h3>
                        </div>
                        <div className="col-lg-12 blog-description">
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
                        </div>
                        <div className="col-lg-12 Blog-link">
                            <a>View All</a>
                        </div>
                    </div>
                </div>
            </Container>
        </Fragment>
    )
}
export default Blog;