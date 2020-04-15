import React, { Component } from "react";
import styles from "./AskPetForm.module.css"

export default class AskPetForm extends Component {

    formSubmit = (message) => {
        alert('We received your message and will contact you soon!!!');
        message.preventDefault();
    };

    state = {
        FirstName: '',
        LastName: '',
        email: '',
        number: '',
        gender: '',
        country: '',
        zipCode: '',
        phoneNumberError: '',
        emailError: '',

    };
    operation = (message) => {
        const input = message.target;
        const name = input.name;
        const value = input.type === 'checkbox' ? input.checked : input.value;
        this.setState({[name]: value});
        let errNumber = '';
        let errEmail ='';
        if (name === "number") {
            if (value != "" && !Number(value)) {
                errNumber = <strong>Phone number only permit digits! </strong>;
            }
        }
        if(name === "email"){
            if (value != "" && !(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value))) {
                errEmail = <strong>Please input a correct Email! </strong>;
            }
        }
        this.setState({phoneNumberError: errNumber});
        this.setState({emailError: errEmail});
    };

    render() {
        const surveys = ['Yes', 'No'];
        return (
            <form onSubmit={this.formSubmit}>
                <div className = {styles.container}>
                    <fieldset className = {styles.fieldset}>
                        <label>
                            First name :<br/>
                        </label>
                        <input name="FirstName" type="text" value={this.state.FirstName}
                            onChange={this.operation} required="required"/><br/>
                        <br/>
                        <label>
                            Phone Number:<br/>
                        </label>
                        <input name="number" type="text"  value={this.state.number}
                            onChange={this.operation}/>
                        {this.state.phoneNumberError}<br/>
                        <br/>
                        <label>
                            Country :<br/>
                        </label>
                        <input name="country" type="text" value={this.state.country}
                            onChange={this.operation} required="required"/><br/>
                    </fieldset>

                    <fieldset className = {styles.fieldset}>

                        <label>
                            Last name :<br/>
                        </label>
                        <input name="LastName" type="text" value={this.state.LastName}
                            onChange={this.operation} required="required"/><br/>
                        <br/>
                        <label>
                            Email Address :<br/>
                        </label>
                        <input name="email" type="text" value={this.state.email}
                            onChange={this.operation} required="required"/>
                        {this.state.emailError}<br/>
                        <br/>
                        <label>
                           ZIP Code<br/>
                        </label>
                        <input name="zipCode" type="text"  value={this.state.zipCode}
                            onChange={this.operation}/>
                    </fieldset>

                    <fieldset className = {styles.fieldset}>
                        <label>YOUR MESSAGE（optional）</label><br/>
                        <textarea className = {styles.textarea } name="suggestion" rows="8" cols="30" placeholder=" I wondering if ..." value={this.state.suggestion} onChange={this.operation}/>
                    </fieldset>
                    
                    <div>
                        <lable className = {styles.fieldset}> Do you have pets in your home?</lable><br/>
                    {surveys.map((survey, i) =>
                            <label className = {styles.fieldset} key={i}>
                                <input
                                    name="survey"
                                    value={survey}
                                    onChange={this.operation}
                                    type="radio"
                                    required="required"/>
                                {survey}
                            </label>
                        )}
                        <br/>
                   
                    </div>

                    <div><br/><button className = {styles.button} type="submit">Send Message</button></div>

                </div>
                
            </form>
        )
    }
}

