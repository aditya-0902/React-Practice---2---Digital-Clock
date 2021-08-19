import React, {Component, useState} from "react";
import '../styles/App.css';


function getTime(){
    var time = new Date().toLocaleTimeString();
    return time;
}


class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            time:getTime()
        }
    }

    componentDidMount(){
        this.intervalId=setInterval(()=>{
            this.setState({time:getTime()})
        },1000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId);
    }

    render() {

        return(
            <div className="clock">
                <h3 id="time">{this.state.time}</h3>
            </div>
        )
    }
}


export default App;
