import React, {Component} from 'react';
import {Image, KeyboardAvoidingView} from 'react-native';

import {HomeScreenContainer} from '../components/Containers';
import {Input} from '../components/TextInputs';
import {BlackUnderline} from '../components/UnderLines';
import {BlackButton} from '../components/Buttons';

export default class ForgotPasswordScreen extends Component {
    handleForgotPassword() {
        console.log('forgot password tapped');
    };
    
    render(){
        return(
            <HomeScreenContainer>
 
                 <Image
                    style = {{height: 80, width: 80, alignSelf: 'center', marginTop: 15}}
                    source = {require('../assets/Images/Logos/homeLogo.png')}
                />
           
                <Input
                    placeholder = "Email address"
                    autoCapitalize = "none"
                    autoCorrect = {false}
                />
                    <BlackUnderline/>

               
                <BlackButton
                onPress={this.handleForgotPassword}
                >
                    Recover Password
                </BlackButton>

            </HomeScreenContainer>
                
       
        );
    }
};