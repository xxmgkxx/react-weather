import React from 'react';
import {connect} from 'react-redux';

import WeatherComponent from './Weather';
import LocationFormComponent from './LocationForm';

import {fetchWeather} from '../actions/weatherActions';

@connect((store) => {
    return {
        weather: store.weather.weather,
    };
})
export default class App extends React.Component {
    componentWillMount(){
        this.props.dispatch(fetchWeather({city: 'Boston', state: 'MA'}))
    }
    render(){
        const {weather} = this.props;
        
        return (
            <div class="container">
                <div className="row">
                    <div className="text-center col-md-6 col-md-offset-3">
                        <h1>WeatherCheck</h1>
                        <WeatherComponent weather={weather}/>
                        <LocationFormComponent onLocationChange={this.onLocationChange.bind(this)}/>
                    </div>
                </div>
            </div>
        )
    }
    onLocationChange(location){
        this.props.dispatch(fetchWeather({city:location.city, state: location.state}))
    }
}