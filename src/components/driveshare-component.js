import React from 'react';
import '../driveshare.css'
import axios from 'axios'
export default class DriveShare extends Component {
    constructor(props) {
        super(props)
        this.state = {
            drivename: "",
            description: "",
            contact: "",
            location: "",
            driveItems: [],
            item: {
                text: '',
                key: ''
            }
        }
    }
       /* componentDidMount() {
            axois.get('http://localhost:5000/drives/' +this.props.match.params.id)
                .then(responder =>{
                    this.setState({
                        drivename: response.data.drivename,
                        description: response.data.description,
                        contact: response.data.contact,
                        location: response.data.location,
                        driveItems: response.data.data
                    })
                    .catch(function)
                })
        }*/

    /*const listItems = items.map(item => {
        return <div className="list" key={item.key}>
            <p>
                {item.text}
            </p>
        </div>
        
    })*/
    return (

        <div className="container">
            <img src="./share.bg"/>
            <div class="text-block">
                <h4>{props.name}</h4>
                {listItems}
                <h4>{props.description}</h4>
                <h4>{props.location}</h4>
                <h4>{props.name}</h4>
                
            </div>
        </div>
    )
}
export default DriveShare;