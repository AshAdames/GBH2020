import React, { Component } from 'react'


function Step3(props) {
    if (props.currStep !== 3) {
        return null
    }

    return (
        //resource type!!!!!!!!!!!!!!!!!!!
        <React.Fragment>
        <div className="container text-center">
            <h1 className="info-color white-text text-center py-4" >Tell us more about your Drive</h1>
            <div className="card-body px-lg-5 pt-0 text-center">
                        <div className="form-group text-center border mx-5">
                        <input type="text" name="drivename" className="form-control" placeholder="Name of your Drive" value={props.drivename} onChange={props.handleChange}  />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="description" value={props.decription} placeholder="Description" onChange={props.handleChange} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="contact" value={props.contact} placeholder="Contact Information" onChange={props.handleChange} />
                        <small className="form-text text-muted text-left" >
                            Where can people contact you to donate or pick up items?
                        </small>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" name="location" value={props.location} placeholder="Location" onChange={props.handleChange} />
                        <small className="form-text  text-muted text-left">
                            Where will your Drive take place? What time?
                        </small>
                    </div>
                    <button type="submit" className="btn btn-info text- right" >Submit</button>
            </div>
            </div>
        </React.Fragment>
        );
}

export default Step3;
