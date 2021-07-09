import React, { Component } from "react";
import "../assets/map.css";
import GoogleMapReact from "google-maps-react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
//import '../source/equipes'

export class MapAp extends Component {
	render() {
		return (
			<div>
				<div className="mapouter">
					<Map google={this.props.google} zoom={14}>
						<Marker onClick={this.onMarkerClick} name={"Current location"} />

						<InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
					</Map>
				</div>
				
				<p>text</p>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyBsqQRDrK9fGonJIlW1Iex7qSM__LAzpEQ",
})(MapAp);
