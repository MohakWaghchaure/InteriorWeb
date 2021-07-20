import { useState } from 'react';
import '../styles/Container.scss';

function Container(props){
    console.log('container props...', props);    
    const [propClass, setPropClass] = useState('');
    // if(props.className === undefined){
    //     setPropClass('');
    // }
    // else{
    //     setPropClass(props.className);
    // }
    return(
        <section className="section-Wrapper" id={props.id}>
            <div className={"row section-container " + props.className}>
                {props.children}
            </div>
            {/* <div className="exp-background"></div> */}
        </section>
    )
    
}

export default Container;