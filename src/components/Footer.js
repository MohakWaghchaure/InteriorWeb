import { Fragment } from "react";
import '../styles/Footer.scss'; 
import logo_fb from '../images/facebook.png';
import logo_ig from '../images/instagram.png';
import logo_tw from '../images/twitter.png';

function Footer(){
    return(
<Fragment>
        <footer className="row col-lg-12 footer-container">
            <div className="col-lg-6 logo-container">
                <div>AESTHETICA
                    <span>Interiors</span>
                </div>
            </div>
            <div className="col-lg-6 get-in-touch-container">
                <div>Get In Touch</div>
                <p>aesthetica.interior@mail.com</p>
                <p>091-889776655</p>
            </div>
            <div className="col-lg-6 social-links">
                <div className="social-logo-wrapper">
                    <a href="https://www.facebook.com/"><img src={logo_fb}></img></a>
                </div>
                <div className="social-logo-wrapper">
                    <a href="https://www.instagram.com/"><img src={logo_ig}></img></a>
                </div>
                <div className="social-logo-wrapper">
                    <a href="https://twitter.com/"><img src={logo_tw}></img></a>
                </div>
            </div>
            <div className="col-lg-6 nav-options">
                <ul class="col-lg-12 list-unstyled">
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Projects</a></li>
                    <li><a href='#'>Studio</a></li>
                    <li><a href='#'>Blog</a></li>                        
                </ul>
            </div>

        </footer>
    </Fragment>
    )
    
}
export default Footer;