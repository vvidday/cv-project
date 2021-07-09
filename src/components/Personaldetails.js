import React, { Component } from 'react';

class Personaldetails extends Component{

    sections = ["firstname", "lastname", "occupation", "phone", "email", "location"];
    handleChange = (e) =>{
        let sec = this.sections[Array.from(e.target.parentElement.children).indexOf(e.target)];
        this.props.update(sec, e.target.value);
    }

    render(){
        return(
            <div>
                <p>{this.props.data.firstname} {this.props.data.lastname} {this.props.data.occupation}</p>
                <h2>Personal Details</h2>
                <div>
                    <input type="text" value={this.props.data.firstname} placeholder="First Name" onChange={this.handleChange}></input>
                    <input type="text" value={this.props.data.lastname} placeholder="Last Name" onChange={this.handleChange}></input>
                    <input type="text" value={this.props.data.occupation} placeholder="Occupation" onChange = {this.handleChange}></input>
                    <input type="number" value={this.props.data.phone} placeholder="Phone Number" onChange={this.handleChange}></input>
                    <input type="email" value={this.props.data.email} placeholder="Email Address" onChange={this.handleChange}></input>
                    <input type="text" value={this.props.data.location} placeholder="Location" onChange={this.handleChange}></input>
                </div>
            </div>
        );
    }
}

export { Personaldetails };