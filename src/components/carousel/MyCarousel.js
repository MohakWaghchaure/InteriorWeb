
import { Carousel } from '3d-react-carousal';
import { Fragment } from 'react';
import '../../styles/MyCarousel.scss';

function MyCarousel(){
    const slides = [
        <img  src="https://images.unsplash.com/photo-1618221639244-c1a8502c0eb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" alt="1" />,
        <img  src="https://images.unsplash.com/photo-1615971677499-5467cbab01c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80" alt="2" />  ,
        <img  src="https://images.unsplash.com/photo-1615529182904-14819c35db37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="3" />  ,
        <img  src="https://images.unsplash.com/photo-1618219740975-d40978bb7378?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=949&q=80" alt="4" />  ,
        <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80" alt="5" />   ];
    return(
        <Fragment>
            <Carousel slides={slides} autoplay={false} interval={1000}/>
        </Fragment>
    )
}

export default MyCarousel;
  
  
  
  