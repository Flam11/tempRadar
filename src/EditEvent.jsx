import React from "react";

import "./EditEvent.css";

const EditEvent = props => {
    return(
        <div className = "edit-event">
            <div className = "edit-event__input-group">
                <label htmlFor = "name">nazwa</label>
                <input 
                    type = "text" 
                    id = "name" 
                    name = "name"
                    onChange = {e => props.onInputChange({[e.target.name]: e.target.value})}
                />
            </div>
            <div className = "edit-event__input-group">
                <label htmlFor = "time">czas</label>
                <input 
                    type = "time" 
                    id = "time" 
                    name = "time"
                    min = "00:00" 
                    max = "23:59"
                    onChange = {e => props.onInputChange({[e.target.name]: e.target.value})}
                    />
            </div>
            <button onClick = {() => props.onSave()}>OK</button>
            <button>Cancel</button>
        </div>
    );
};

export default EditEvent;