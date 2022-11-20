import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
    return (
        <div>
            <p className='f3'>
                {'This robot will find faces in your pictures, give it a shot'}
            </p>
            <div className="center">
                <div className="form center pa4 br3 shadow-2">
                    <input className='f4 br4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
                    <button className='w-30 br4 grow f4 link ph3 pv2 dib white bg-blue' onClick={onButtonSubmit}>
                        Find</button>
                </div>
            </div>

        </div>

    );
}

export default ImageLinkForm;