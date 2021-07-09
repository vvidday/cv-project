import React, { Component } from 'react';

class Experience extends Component{
    constructor(props){
        super(props);
        let placeholder1;
        let placeholder2;
        if(this.props.type === 'education'){
            placeholder1 = "Name of School";
            placeholder2 = "Title of Study";
        }
        else{
            placeholder1 = "Name of Company";
            placeholder2 = "Job Title";
        }
        this.state = {
            p1: placeholder1,
            p2: placeholder2,
        }
    }

    sections = ["name", "title", "desc", "dateFrom", "dateTo"];
    handleChange = (e) =>{
        let sec = this.sections[Array.from(e.target.parentElement.children).indexOf(e.target)];
        this.props.update(sec, e.target.value);
    }

    render(){
        return(
            <div>
                <p>{this.props.data.name} {this.props.data.title} {this.props.data.dateFrom}</p>
                <div>
                    <input type="text" value={this.props.data.name} placeholder={this.state.p1} onChange={this.handleChange}></input>
                    <input type="text" value={this.props.data.title} placeholder={this.state.p2} onChange={this.handleChange}></input>
                    <input type="text" value={this.props.data.desc} placeholder="Description" onChange={this.handleChange}></input>
                    <input type="date" value={this.props.data.dateFrom} onChange={this.handleChange}></input>
                    <input type="date" value={this.props.data.dateTo} onChange={this.handleChange}></input>
                </div>
            </div>
        )
    }

}

export { Experience };