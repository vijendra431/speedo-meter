import { Component } from "react";
import './index.css';

class SpeedoMeter extends Component{
    state ={speed : 0}

    increaseRace = () => {
        const {speed} = this.state 
        if(speed < 200){
            this.setState(prevState => ({
                speed:prevState.speed + 10
            }))
        }
    }


    decreaseRace = () => {
        const {speed} = this.state 
        if(speed > 0){
            this.setState(prevState => ({
                speed:prevState.speed - 10
            }))
        }
    }
    render(){
        const {speed} = this.state 
        return(
            <div className="app-container">
              <div className="speedo-meter-container">
                <h1>Speed Meter</h1>
                <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedom-meter" className="speedoImage" />
                <h2>Speed is <spam className="speed">{speed}</spam>mph</h2>
              <div className="button-container">
                <button onClick={this.increaseRace}>Acclelrate</button>
                <button onClick={this.decreaseRace}>Applye Break</button>

              </div>

              </div>

            </div>
        )
    }
}

export default SpeedoMeter;