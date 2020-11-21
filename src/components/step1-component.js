import React from 'react'

function Step1(props){
        if (props.currStep !==1) {
            return null
        }
        return (
            //resource type
            <div className="container text-center ">
                <h1>What Type of Drive Do You Want to Start? </h1>
                <div className="my-row row-cols-3 ">
                    <div className="col"><button type="button" class="btn btn-primary btn-lg">Food Drive</button></div>
                    <div className="col"><button type="button" class="btn btn-secondary btn-lg">School Drive</button></div>
                    <div className="col"><button type="button" class="btn btn-primary btn-lg">Other Drive</button></div>
                </div>
            </div>
        );
}
export default Step1;