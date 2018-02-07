import React, {Component} from 'react';
import {Image,KeyboardAvoidingView} from 'react-native';


import {HomeHeader} from '../components/Headers';
import {HomeScreenContainer} from '../components/Containers';
import {PasswordFooter, SignUpFooter} from '../components/Footers';
import {BlackButton} from '../components/Buttons';
import {Input} from '../components/TextInputs';
import {BlackUnderline} from '../components/UnderLines';

export default class HomeScreen extends Component {

    handleForgotPassword = () => {
        this.props.navigation.navigate('ForgotPassword');
    };
    handlePressSignUp = () => {
        this.props.navigation.navigate('SignUp');
    };
    handleUserSignIn () {
        console.log('Sign In Tapped');
    };

    render(){
        return(
        <HomeScreenContainer>
                    <Image
                    style = {{height: 150, width: 150, alignSelf: 'center', marginTop: 15}}
                    source = {require('../assets/Images/homeLogo.png')}
                    />

                    <HomeHeader>
                        adidas
                    </HomeHeader>
                          
                    <Input
                    placeholder = "SneakerHead@gmail.com"
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

                    <BlackButton
                    onPress = {this.handleUserSignIn}
                    >
                        Sign In
                    </BlackButton>


                    <PasswordFooter
                    onPress= {this.handleForgotPassword}
                    >
                        Forgot Password?
                    </PasswordFooter>

                    <SignUpFooter
                    onPress = {this.handlePressSignUp}>
                    Sign Up
                    </SignUpFooter>

             </HomeScreenContainer>

         
        );
    }
};

