import React, { Component } from "react";
import styles from "./AskPetForm.module.css"

export default class AskPetForm extends Component {

    state = {
        FirstName: '',
        LastName: '',
        email: '',
        number: '',
        gender: '',
        manner: '',
        frequency: '',
        message: '',
        errormessage_num: '',
        errormessage_email: '',
        birthday: '',
        kind: '',
    };

    formSubmit = (e) => {
        alert('Hello ' + this.state.FirstName + ', we received your message and will contact you soon!!!');
        e.preventDefault();
    };


    operation = (e) => {
        const input = e.target;
        const name = input.name;
        const value = input.type === 'checkbox' ? input.checked : input.value;
        this.setState({[name]: value});
        let errNumber = '';
        let errEmail ='';
        if (name === "number") {
            if (value != "" && !Number(value)) {
                errNumber = <strong className = {styles.wrong}>Please input a correct phone number!</strong>;
            }
        }
        if(name === "email"){
            if (value != "" && !(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value))) {
                errEmail = <strong className = {styles.wrong}>Wrong Email Format! </strong>;
            }
        }
        this.setState({phoneNumberError: errNumber});
        this.setState({emailError: errEmail});
    };

    render() {
        const genders = ['Male', 'Female', 'Secret'];
        const surveys = ['Yes', 'No', 'Secret'];

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
                    <label>Your Message（optional）</label><br/>
                    <textarea className = {styles.textarea } name="suggestion" rows="8" cols="18" placeholder=" I wondering if ..." value={this.state.suggestion} onChange={this.operation}/>
                </fieldset>
                </div>
                <div className = {styles.container}>
                <fieldset className = {styles.fieldset}>
                        <label>Gender :</label><br/>
                        {genders.map((gender, i) =>
                            <label key={i}>
                                <input
                                    name="gender"
                                    value={gender.toUpperCase()}
                                    checked={this.state.gender === gender.toUpperCase()}
                                    onChange={this.operation}
                                    type="radio"
                                    required="required"/>
                                {gender}
                            </label>
                        )}
             
                    <br/><br/>
                    <label>How do you want us to contact you? 
                    <br/><br/>
                        <select name ="manner" value={this.state.manner} onChange={this.operation} required="required">
                            <option value="email">Email</option>
                            <option value="phoneCall">Phone call</option>
                            <option value="text">Text</option>
                            <option value="others">Others</option>
                        </select>
                    </label><br/>
                </fieldset>

                <fieldset className = {styles.fieldset}>
                        <label >Do you have pets in your home? </label><br/>
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

                    <br/><br/>
                   
                    <label>If yes, what kind of pet do you have?
                    <br/><br/>
                        <select name ="kind" value={this.state.kind} onChange={this.operation}>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="others">Others</option>
                        </select>
                    </label><br/> 
                </fieldset>
                <div><br/><button className = {styles.button} type="submit">Send Message</button></div>
                </div>
                
            </form>
        )
    }
}

