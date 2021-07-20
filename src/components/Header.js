import { Fragment } from 'react';
import { Link, animateScroll as scroll } from "react-scroll"; 
import '../styles/Header.scss';
function Header(){
    return(
        <Fragment>
            <header className='row col-lg-12 header-container'>
                <div className='row col-lg-8 logo-container'>
                    <div>AESTHETICA
                        <span>Interiors</span>
                    </div>
                </div>
                <div className='row col-lg-4 nav-container'>
                    {/* <ul class="col-lg-12 list-unstyled">
                        <li><a href='#'>About</a></li>
                        <li><a href='#'>Projects</a></li>
                        <li><a href='#'>Studio</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='#'>Contact</a></li>
                    </ul> */}
                    <Link activeClass="active" to="about" spy={true} smooth={true} offset={-70} duration={500}>About</Link>
                    <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
                    <Link activeClass="active" to="studio" spy={true} smooth={true} offset={-70} duration={500}>Studio</Link>
                    <Link activeClass="active" to="blog" spy={true} smooth={true} offset={-70} duration={500}>Blog</Link>
                    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Contact</Link>
                </div>
                
            </header>
        </Fragment>
    )
}

export default Header;