import React, { Component } from 'react';

export default class Home extends Component {

    render() {
        return (

        <body>
        <div className="jumbotron jumbotron-fluid extra-space">
            <div className="container">
                <h1 className="display-4">This has been rly dank</h1>
                    <p className="lead">This is a modified this is being updated jumbotron that occupies the entire horizontal space of its parent.</p>
            </div>
        </div>

        <div className="container-fluid cover">
            <h1 className="text-center" >this gonna be DIFFERENT</h1>
             
        </div>

        <div className="container-fluid">

            <div className="card card-custom">
                <div className="card-body">
                    <h5 className="card-title">Dank Drive One</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Give to Dank</a>
                                <br/>
                                <br/>
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-info pgs" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">25%</div>
                </div>
            </div>
        </div>

</div>


        <footer className="footer">
            <div className="container">
                <span className="text-muted">Place sticky footer content</span>
            </div>
        </footer>

    </body>
    
        );
    }
}