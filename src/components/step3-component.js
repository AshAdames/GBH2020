import React, { Component } from 'react'

export default class Step3 extends Component {
    render() {
        if (this.props.currStep !== 3) {
            return null
        }
        return (
            //resource type!!!!!!!!!!!!!!!!!!!
            <div class="container text-center">
                <h1 class="info-color white-text text-center py-4" >Tell us more about your Drive</h1>
                <div className="card-body px-lg-5 pt-0 text-center">
                    <form class="text-center border mx-5" onSubmit={this.props.handleSubmit}>
                        <div class="form-group">
                            <input type="text" class="form-control" value={this.props.drivename} placeholder="Name of your Drive" onChange={this.props.handleChange} />
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" value={this.props.decription} placeholder="Description" onChange={this.props.handleChange} />
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" value={this.props.contact} placeholder="Contact Information" onChange={this.props.handleChange} />
                            <small class="form-text text-muted text-left" >
                                Where can people contact you to donate or pick up items?
                            </small>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-control" value={this.props.location} placeholder="Location" onChange={this.props.handleChange} />
                            <small class="form-text  text-muted text-left">
                            Where will your Drive take place? What time?
                            </small>
                        </div>
                        <button type="button" class="btn btn-info text- right">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}