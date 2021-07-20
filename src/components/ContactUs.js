import { Fragment } from "react";
import Container from "./Container";

function ContactUs(){
    return(
        <Fragment>
            <Container id="contact">
                <div className="col-lg-12 contact-us-title">
                    <h2>Let's talk about your project</h2>
                </div>
                <div className="col-lg-12 contact-us-form">
                    <form>
                        <div className="row form-container">
                            <div className="col-lg-4 field-container">
                                <label>Name</label>
                                <input type="text"></input>
                            </div>
                            <div className="col-lg-5 field-container">
                                <label>Phone</label>
                                <input type="tel"></input>
                            </div>
                            <div className="col-lg-3 send-button-container">
                                <button>Send</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </Container>
        </Fragment>
    )
}
export default ContactUs;