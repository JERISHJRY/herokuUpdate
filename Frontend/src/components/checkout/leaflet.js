import React, { Component } from "react";
import L from "leaflet";
import * as ELG from "esri-leaflet-geocoder";
import { Map, TileLayer } from "react-leaflet";
import { updateAddress } from "redux/actions/mapAddressAction"
import { connect } from "react-redux"

// import marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.4.0/dist/images/marker-shadow.png"
});

class MapComp extends Component {
  constructor(props){
    super(props);
    this.state={
      center :[37.7833, -122.4167]
    }
  }
  
  componentDidMount() {
    const map = this.leafletMap.leafletElement;
    const searchControl = new ELG.Geosearch().addTo(map);
    const results = new L.LayerGroup().addTo(map);

    searchControl.on("results", function(data) {
      if(data.results.length){
      const lat =  data.results[0].latlng;
      const latArr = [ lat.lat , lat.lng ];
      
      ELG.geocodeService().reverse().latlng(latArr)
      .run( (error, result, response)=> {  
         const address =result.address;        
         localStorage.setItem("address",JSON.stringify(address));
         updateAddress();              
       });
      } 

      results.clearLayers();
      for (let i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));        
      }
      
    });
    const updateAddress= ()=>{
      const address = localStorage.getItem("address");
        let add = JSON.parse(address);
        this.props.updateAddress(add);
        localStorage.removeItem("address")
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
    this.setState({
        center : [position.coords.latitude,position.coords.longitude]           
    },()=>{
      ELG.geocodeService().reverse().latlng(this.state.center)
      .run( (error, result, response)=> {  
         const address =result.address;        
         localStorage.setItem("address",JSON.stringify(address));
         updateAddress();              
       });    
    })
    const updateAddress= ()=>{
      const address = localStorage.getItem("address");
        let add = JSON.parse(address);
        this.props.updateAddress(add);
        localStorage.removeItem("address")
    }
  }

  render() {
    const center = this.state.center;
    return (
      <div id ="mapContainer">
        <div id="autoDetectButton">
        <button onClick={e=>this.getLocation(e)}> Auto Detect</button>
      </div>   
      <Map
        style={{ height: "60vh" }}
        center={center}
        zoom="10"
        ref={m => {
          this.leafletMap = m;
        }}
      >
        <TileLayer
          attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
          url={"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
        />
        <div className="pointer" />
      </Map>   
      </div>
    );
  }
}



const mapDispatchToProps = () =>{
  return{
    updateAddress
  }
} 

export default connect(null, mapDispatchToProps())(MapComp);

