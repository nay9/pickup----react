import React from "react";
import './Modal.css';

const modal = (props) => {
    return (
        <div>
            
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                <div className="modal-header">
                    <h2 className="modal_text">Thank you for your order!</h2>
                </div>
               
                <div className="modal-footer">
                    <button className="btn-form" onClick={props.close}>Close</button>
                </div>
            </div>
        </div>
    )
    
}

export default modal;
