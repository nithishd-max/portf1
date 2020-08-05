import React from 'react';
//import avatar from './avataaars.svg';
import Nithish from './circle-cropped-1.png';
//import Screen from './Screenshot (15).png';

const MastHead=()=>{
    return(
        
            <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                
                <img className="masthead-avatar mb-5" src={Nithish} alt="" />
                
                <h1 className="masthead-heading text-uppercase mb-0">Nithish Reddy</h1>
                
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <p className="masthead-subheading font-weight-light mb-0">Coder-FullStack Developer </p>
            </div>
        </header>
        
        

    )
}

export default MastHead;