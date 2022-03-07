//make bmi calculator with react js
import React, { Component } from 'react';
import Alert from './Alert';

class BMI extends Component {
    constructor() {
        super();
        this.state = {
            weight: 0,
            height: 0,
            bmi: 0,
            bmiStatus: ""
        }
    }
    calculateBMI = () => {
        let weight = this.state.weight;
        let height = this.state.height;
        let bmi = weight / (height * height);
        let bmiStatus = "";
        if (bmi < 18.5) {
            bmiStatus = "Underweight";
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiStatus = "Normal";
        }
        else if (bmi >= 25 && bmi <= 29.9) {
            bmiStatus = "Overweight";
        }
        else if (bmi >= 30) {
            bmiStatus = "Obese";
        }
        this.setState({
            bmi,
            bmiStatus
        });
    }

    changeWeight = (event) => {
        this.setState({
            weight: event.target.value
        });
    }
    changeHeight = (event) => {
        this.setState({
            height: event.target.value
        });
    }

    //show alert
    showAlert = () => {
        if (this.state.bmiStatus === "") {
            return <div></div>;
        }
        if (this.state.bmiStatus === "Underweight") {
            return <Alert type="danger" header="Underweight">

                <p>You are underweight!</p>
            </Alert>

        }
        if (this.state.bmiStatus === "Normal") {
            return <Alert type="success" header="Normal">
                <p>You are normal</p>
            </Alert>
        }
        if (this.state.bmiStatus === "Overweight") {
            return <Alert type="warning" header="Overweight">

                <p>You are overweight!</p>
            </Alert>
        }
        if (this.state.bmiStatus === "Obese") {
            return <Alert type="danger" header="Obese">

                <p>You are obese!</p>
            </Alert>
        }
    }

    render() {
        return (


            <div className="container col-md-6">
                <div className="card">
                    <div className="card-header">
                        BMI
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Weight</label>
                            <input type="number" className="form-control" onChange={this.changeWeight} />
                        </div>
                        <div className="form-group">
                            <label>Height</label>
                            <input type="number" className="form-control" onChange={this.changeHeight} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" onClick={this.calculateBMI}>Calculate</button>
                        </div>
                        {/* bmi status with alert bootstrap */}
                        {this.showAlert()}
                    </div>
                </div>
            </div>



        );

    }
}

export default BMI;
