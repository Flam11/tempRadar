import React, { Component } from 'react';
import Countdown from "./Countdown";
import EditEvent from "./EditEvent";

import "./App.css";

class App extends Component{
    constructor(){
        super();
        this.state = {
            events: [
                { id: 0, name: "śniadanie", time: "07:00"},
                { id: 1, name: "obiad", time: "15:00"}
            ],
            EditEvent: {
                id: 2,
                name: "",
                time: ""
            }
        };

        this.handleEditEvent = this.handleEditEvent.bind(this);
    }

    handleEditEvent(val){
        //this.setState({EditEvents: val});
        this.setState(prevState => {
            return{
                EditEvent: Object.assign(prevState.EditEvent, val)
            }
        })
    }

    render(){
        const events = this.state.events.map(el => {
            return <Countdown key = {el.id} id = {el.id} name = {el.name} time = {el.time}/>
        });
        return (
            <div className = "app">
                {events}
                <EditEvent 
                    onInputChange = {val => this.handleEditEvent(val)}
                    onSave = {() => alert("test")}/>
            </div>
        );
    }
}

export default App;
