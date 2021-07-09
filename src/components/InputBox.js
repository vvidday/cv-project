import React, { Component } from 'react';
import { Personaldetails } from './Personaldetails';
import { Experience } from './Experience';

class InputBox extends Component{
    constructor(props){
        super(props);

    }

    displayEducation = () => {
       return (
        this.props.data.education.map((value, index)=>(
            <Experience type="education" data={value} update={(section, value)=>this.props.updateEducation(index, section, value)}/>
        ))
       );  
    }

    displayWork = () => {
        return (
            this.props.data.work.map((value, index)=>(
                <Experience type="work" data={value} update={(section, value)=>this.props.updateWork(index, section, value)}/>
            ))
           );  
    }

    render(){
        return(
            <div>
                <div className="Personal">
                    <Personaldetails data = {this.props.data.personal} update={this.props.updatePersonal} /> 
                </div>
                <div className="Education">
                    <h2>Education</h2>
                    {this.displayEducation()}
                    <button onClick={this.props.newEducation}>New Entry</button>
                </div>
                <div className="Work">
                    <h2>Work</h2>
                    {this.displayWork()}
                    <button onClick={this.props.newWork}>New Entry</button>
                </div>
            </div>
        );
    }

}

export { InputBox };