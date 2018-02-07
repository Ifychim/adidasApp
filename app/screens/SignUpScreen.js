import React, {Component} from 'react';
import {Image, KeyboardAvoidingView} from 'react-native';

import {HomeScreenContainer} from '../components/Containers';
import {Input} from '../components/TextInputs';
import {BlackUnderline} from '../components/UnderLines';
import {BlackButton} from '../components/Buttons';

export default class SignUpScreen extends Component {
    handleSignUp() {
        console.log('sign up tapped');
    };
    
    render(){
        return(
            <HomeScreenContainer>
 
                 <Image
                    style = {{height: 80, width: 80, alignSelf: 'center', marginTop: 15}}
                    source = {require('../assets/Images/homeLogo.png')}
                />
           
                <Input
                    placeholder = "Email"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                />
                    <BlackUnderline/>

                <Input
                    placeholder = "Password"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    secureTextEntry = {true}
                />
                    <BlackUnderline/>
                
                <Input
                    placeholder = "Confirm Password"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    secureTextEntry = {true}
                />
                    <BlackUnderline/>
           
                <BlackButton
                onPress={this.handleSignUp}
                >
                    Sign Up
                </BlackButton>

            </HomeScreenContainer>
                
       
        );
    }
};