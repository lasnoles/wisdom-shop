import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import ErrorMessage from '../error-message/error-message.component';

import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email:'',
            password:'',
            errorMsg: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email, password} = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
            console.log(error);
            this.setState({errorMsg: error.message});
        }
        
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value });
    }

    render (){
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit} method='post'>
                    <FormInput name='email' value={this.state.email} required handleChange={this.handleChange} label="email"/>
                    <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label="password"/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
                <ErrorMessage>{this.state.errorMsg}</ErrorMessage>
            </div>
        )
    }
}

export default SignIn;