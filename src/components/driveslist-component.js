import React, { Component } from 'react';
import '../driveslist.css';
import axios from 'axios';

const DriveCard = props => (

    <div className="card">
    <div className="card-header">
    </div>
        <div className="card-body">
            <h5 className="card-title">{props.drive.drivename}</h5>
                <p className="card-text">{props.drive.description}</p>
        </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{props.drive.contact}</li>
                <li className="list-group-item">{props.drive.location}</li>
            </ul>  
        <div className="card-body">
            <a href="#" className="btn btn-primary">Give to Drive</a>
                <br/>
        </div>
</div>

)

export default class DrivesList extends Component {

    constructor(props) {
        super(props);

        this.state = {drives: []};

    }

    componentDidMount() {
        axios.get('http://localhost:5000/drives/')
            .then(response => {
                this.setState({ drives: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    activeDrives() {
        return this.state.drives.map( currentDrives=> {
            return <DriveCard drive={currentDrives} key={currentDrives._id} />;
        })
    }






    render() {
        return (
            <div className="container">
                <h3>About Page </h3>

                <div className="card-columns">
                    { this.activeDrives() }
                </div>

            </div>
  
           
        )
    }
}