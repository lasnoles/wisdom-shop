import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton  from "../custom-button/custom-button.component";

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import ErrorMessage from '../error-message/error-message.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            errorMsg: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("Password don't match");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
                errorMsg: ''
            })
        } catch (error) {
            this.setState({errorMsg: error.message});
            console.error(`I hate you ${error}`);
        }
    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    render(){
        const {displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
              <h2 className='title'>I do not have an account</h2>
              <span>Sign up with your email and password</span>

              <form className='sign-up-form' onSubmit = {this.handleSubmit}>
                <FormInput name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' required/>
                <FormInput name='email' value={email} onChange={this.handleChange} label='Email' required/>
                <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required/>
                <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required/>

                <CustomButton type='submit'>Sign Up</CustomButton>

              </form>
              <ErrorMessage>{this.state.errorMsg}</ErrorMessage>
              
            </div>
        )
    }
}

export default SignUp;