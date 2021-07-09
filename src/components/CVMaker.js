import React, { Component } from 'react';
import { InputBox } from './InputBox';
import { Preview } from './Preview';
import '../styles/CVMaker.css';

class CVMaker extends Component{
    constructor(props){
        super(props);

        this.state = {
            personal : {
                fullname: "",
                occupation : "",
                phone : "",
                email : "",
                location : "",
            },

            education : [
                {
                    name : "",
                    title : "",
                    desc : "",
                    dateFrom : "",
                    dateTo : ""
                }
            ],

            work : [
                {
                    name : "",
                    title : "",
                    desc : "",
                    dateFrom : "",
                    dateTo : ""
                }
            ],

            previewonly : false,

        };
    }

    updatePersonal = (section, value) => {
        let current = JSON.parse(JSON.stringify(this.state.personal));
        current[section] = value;
        this.setState({personal : current});
    }

    updateEducation = (index, section, value) => {
        let current = this.state.education.slice(0);
        let current_obj = JSON.parse(JSON.stringify(current[index]));
        current_obj[section] = value;
        current.splice(index, 1, current_obj);
        this.setState({education : current});
    }

    updateWork = (index, section, value) => {
        let current = this.state.work.slice(0);
        let current_obj = JSON.parse(JSON.stringify(current[index]));
        current_obj[section] = value;
        current.splice(index, 1, current_obj);
        this.setState({work : current});
    }

    newEducation = () => {
        let current = this.state.education.slice(0);
        let new_obj = {
            name : "",
            title : "",
            desc : "",
            dateFrom : "",
            dateTo : ""
        };
        current.push(new_obj);
        this.setState({education : current});
    }

    newWork = () =>{
        let current = this.state.work.slice(0);
        let new_obj = {
            name : "",
            title : "",
            desc : "",
            dateFrom : "",
            dateTo : ""
        };
        current.push(new_obj);
        this.setState({work : current});
    }

    render(){
        return(
            <div>
                <div id="toggle-div">
                <button id="toggle-button" onClick = {()=>this.setState({previewonly : !this.state.previewonly})}>{!this.state.previewonly ? "Viewing Mode" : "Editing Mode"}</button>
                </div>
                <div className="cvmaker">
                    {!this.state.previewonly ? 
                    <div className="main-container">
                        <InputBox 
                        data = {this.state}
                        updatePersonal = {this.updatePersonal}
                        updateEducation = {this.updateEducation}
                        updateWork = {this.updateWork}
                        newEducation = {this.newEducation}
                        newWork = {this.newWork}
                        />
                    </div>
                    : <></>}
                    <div className="preview-container">
                        <h2>Preview</h2>
                        <Preview 
                        data = {this.state}
                        />
                    </div>
                </div>
            </div>
        );
    }

}

export { CVMaker };