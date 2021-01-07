
import React,{Component} from "react";

class GoogleMap extends Component{
    constructor(props){
        super(props);
        this.state ={
            latitude :null,
            longitude :null,
            userAddress : null,
        }        
    }

    getLocation = ()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.getCoOrdinates);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    getCoOrdinates=(position)=>{
        console.log(position);
        this.setState({
            latitude : position.coords.latitude ,
            longitude : position.coords.longitude          
        })
    }

    render(){
        return(
            <div className="mapContainer">
                <button onClick={this.getLocation}>Auto detect</button>
                
            </div>
        )
    }
}

export default GoogleMap;