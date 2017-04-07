import React from "react"

export default class LocationForm extends React.Component{
    render(){
        return(
            <div>
                <h3>Change location</h3>
                <form onSubmit={this.changeLocation.bind(this)}>
                    <div className="form-group">                        
                        <input className="form-control" type="text" ref="city" placeholder="Enter city"/><br />
                    </div>
                    <div className="form-group">
                        <input className="form-control" type="text" ref="state" placeholder="Enter state"/><br /></div>
                    <input className="btn btn-primary btn-block"type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
    changeLocation(e){
        e.preventDefault();
        let location = {
            city: this.refs.city.value,
            state: this.refs.state.value,
        }
        this.props.onLocationChange(location);
        return false;
    }
}