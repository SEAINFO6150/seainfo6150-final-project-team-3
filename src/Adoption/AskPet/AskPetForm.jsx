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
        const genders = ['I agree to receive marketing and other communications from Petfinder.'];
        const subscribes = ['I’d like to receive email and other communications from Purina and its brands.'];
        const surveys = ['Yes', 'No'];
        return (
            <form onSubmit={this.formSubmit}>
                <div className = {styles.container}>
                    <fieldset>
                        <label>
                            First name :<br/>
                        </label>
                        <input name="FirstName" type="text" value={this.state.FirstName}
                            onChange={this.operation} required="required"/><br/>
                        <label>
                            Last name :<br/>
                        </label>
                        <input name="LastName" type="text" value={this.state.LastName}
                            onChange={this.operation} required="required"/><br/>

                        <label>
                            Email Address :<br/>
                        </label>
                        <input name="email" type="text" value={this.state.email}
                            onChange={this.operation} required="required"/>
                        {this.state.emailError}<br/>

                        </fieldset>
                        <fieldset>

                        <label>
                            Phone Number:<br/>
                        </label>
                        <input name="number" type="text"  value={this.state.number}
                            onChange={this.operation}/>
                        {this.state.phoneNumberError}<br/>
                        <label>
                            Country :<br/>
                        </label>
                        <input name="country" type="text" value={this.state.country}
                            onChange={this.operation} required="required"/><br/>
                        <label>
                           ZIP Code<br/>
                        </label>
                        <input name="zipCode" type="text"  value={this.state.zipCode}
                            onChange={this.operation}/>
                    </fieldset>

                    <fieldset>
                        <label>YOUR MESSAGE</label><br/>
                        <textarea name="suggestion" rows="10" cols="30" placeholder=" I wondering if ..." value={this.state.suggestion} onChange={this.operation}/>
                    </fieldset>
                    <div>
                        <lable> Do you have pets in your home?</lable><br/>
                    {surveys.map((survey, i) =>
                            <label key={i}>
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

                    <div>
                   
                        {genders.map((gender, i) =>
                            <label key={i}>
                                <input
                                    name="gender"
                                    value={gender}
                                    onChange={this.operation}
                                    type="radio"
                                    required="required"/>
                                {gender}
                            </label>
                        )}

                        <br/>
                        {subscribes.map((subscribe, i) =>
                            <label key={i}>
                                <input
                                    name="subscribe"
                                    value={subscribe}
                                    onChange={this.operation}
                                    type="radio"/>
                                {subscribe}
                            </label>
                        )}
                    </div>

                  
                    <div>
                    <button className = {styles.button} type="submit">Send Message</button>
                    </div>

                </div>
               

                
              
                
            </form>
        )
    }
}

