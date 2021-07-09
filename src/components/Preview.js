import React, { Component } from 'react';
import '../styles/Preview.css';
import Email from '../icons/email.svg';
import Phone from '../icons/phone.svg';
import Location from '../icons/location.svg';

class Preview extends Component{

    displayPersonal = () => {
        const result = [];
        for(let [key, value] of Object.entries(this.props.data.personal)){
            result.push(<div className={key}>{value}</div>);
        }
        
        return result;
    }

    displayEducation = () => {
        const result = [];
        for(let i of this.props.data.education){
            result.push(
            <div className="education-entry">
                <div className="name">
                    {i.name}
                </div>
                <div className="date">
                    {i.dateFrom} {i.dateFrom && i.dateTo ? "-" : ""} {i.dateTo}
                </div>
                <div className="title">
                    {i.title}
                </div>
                <div className="desc">
                    {i.desc}
                </div>
            </div>
            )
        }
        return (
            result
        );
    }

    displayWork = () => {
        const result = [];
        for(let i of this.props.data.work){
            result.push(
            <div className="work-entry">
                <div className="name">
                    {i.name}
                </div>
                <div className="date">
                    {i.dateFrom} {i.dateFrom && i.dateTo ? "-" : ""} {i.dateTo}
                </div>
                <div className="title">
                    {i.title}
                </div>
                <div className="desc">
                    {i.desc}
                </div>
            </div>
            )
        }
        return (
            result
        );
    }
    

    render(){
        return(
            <div className="preview">
                <h3>Personal Information</h3>
                <div className="preview-personal">
                    {this.props.data.personal.phone ? <img id="phone-icon" src={Phone} alt="Phone number icon"></img> : <span></span>}
                    {this.props.data.personal.email ? <img id="email-icon" src={Email} alt="Email icon"></img> : <span></span>}
                    {this.props.data.personal.location ? <img id="location-icon" src={Location} alt="Location icon"></img> : <span></span>}

                    {this.displayPersonal()}
                </div>
                <h3> Education </h3>
                <div className="preview-education">
                    {this.displayEducation()}
                </div>
                <h3>Work Experience</h3>
                <div className="preview-work">
                    {this.displayWork()}
                </div>
            </div>
            
        );
    }
}

export { Preview }; 