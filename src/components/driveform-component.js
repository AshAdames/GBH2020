import React, { Component, useContext } from 'react'
import axios from 'axios'
import ListDriveItems from './list-drive-items';
import DriveShare from './driveshare-component';
export default class DriveForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currStep: 1,
            type:"",
            drivename: "",
            username: "",
            description: "",
            contact: "",
            location: "",
            driveItems: [],
            item: {
                text: '',
                key: ''
            }
        }

        this.addItem = this.addItem.bind(this);
        this.handleItem = this.handleItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

   }
    addItem(e) {
        e.preventDefault();
        const newItem = this.state.item
        console.log(newItem)
        if (newItem.text !== "") {
            const items = [...this.state.driveItems, newItem];
            this.setState({
                driveItems: items,
                item: {
                    text: "",
                    key: ""
                }
            })
        }
    }

    deleteItem(key) {
        const filteredItems = this.state.driveItems.filter(item =>
            item.key !== key);
        this.setState({
            driveItems: filteredItems
        })

    }

    handleItem(e) {
        this.setState({
            item: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    handleChange = event => {
        console.log("we tried to type");
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log("we tried to submit");
        const drive = {
            drivename: this.state.drivename,
            username: "",
            description: this.state.description,
            contact: this.state.contact,
            location: this.state.location,
            data: this.state.driveItems
        }
        console.log(drive);
        axios.post("http://localhost:5000/drives/add", drive)
            .then(res => console.log(res.data));


        <DriveShare
            items={this.state.driveItems}
            name={this.state.name}
            description={this.state.description}
            location={this.state.location}
            contact={this.state.contact}
        />
    }
/*
    _next = () => {
        let currStep = this.state.currStep;
        currStep = this.state.currStep >= 2 ? 3 : currStep + 1
        this.setState({
            currStep: currStep
        })
    }

    nextButton() {
        let currStep = this.state.currStep;
        if (currStep < 2) {
            return (
                <button type="button" className="btn btn-primary btn-lg" onClick={this._next}>Next</button>      
            )
        }
    }

    _prev = () => {
        let currStep = this.state.currStep;
        currStep = this.state.currStep >= 1 ? 1 : currStep - 1
        this.setState({
            currStep: currStep
        })
    }

    prevButton() {
        let currStep = this.state.currStep;
        if (currStep !==1) {
            return (
                <button type="button" className="btn btn-primary btn-lg" onClick={this._prev}>Prev</button>
            )
        }
    }
    */
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                    <div className="col">
                <form onSubmit={this.handleSubmit}>
                    <h1 className="info-color white-text" >Tell us more about your Drive</h1>
                            <div className="card form-group text-center">
                        <input type="text" name="drivename" className="form-control" placeholder="Name of your Drive" value={this.drivename} onChange={this.handleChange} />

                                <div className="form-group">
                            <textarea className="form-control" name="description" value={this.decription} placeholder="Description" onChange={this.handleChange} />
                        </div>
                                <div className="form-group">
                            <input type="text" className="form-control" name="contact" value={this.contact} placeholder="Contact Information" onChange={this.handleChange} />
                            <small className="form-text text-muted text-left" >
                                Where can people contact you to donate or pick up items?
                        </small>
                        </div>
                                <div className="form-group">
                            <input type="text" className="form-control" name="location" value={this.location} placeholder="Location" onChange={this.handleChange} />
                            <small className="form-text  text-muted text-left">
                                Where will your Drive take place? What time?
                        </small>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-info text- right" >Submit</button>
                    </form>
                        </div>
                        <div className="col-md-4">
                            <div className="container">
                                <h3>Add some Items to Your Drive </h3>
                                <div className="row">


                                    <div className="col">
                                        <input type="text" placeholder="Enter an Item" value={this.state.item.text} onChange={this.handleItem} />
                                        <button type="submit" onClick={this.addItem} >Add</button>
                                    </div>
                                    <ListDriveItems items={this.state.driveItems} deleteItem={this.deleteItem} />

                                    <div className="col-sm">

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}