import React from 'react';
import logo from '../logo.png';

const Footer =()=>{
    return(
        <div className="main-footer" bg="dark">
            
                <div className="row">
                    <div className="col-md-3">
                    <img
       src={logo}
       
        className="d-inline-block align-top"
        alt="Метлайн"
        />   
                    </div>
                </div>
            

        </div>
    )
}

export default Footer