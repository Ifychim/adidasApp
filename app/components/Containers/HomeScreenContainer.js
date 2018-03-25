import React, {Component} from 'react';
import {SafeAreaView, StatusBar, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback} from 'react-native';

import styles from './styles';


const HomeScreenContainer = ({children}) => {
    return(
     
        <TouchableWithoutFeedback onPress = {()=> Keyboard.dismiss()}>
            <SafeAreaView style = {styles.homeContainer}>
                <StatusBar barStyle = "dark-content"/>
                <KeyboardAvoidingView 
                behavior = "position"
                keyboardVerticalOffset= {10}
                >
                    {children}
                </KeyboardAvoidingView>
                
            </SafeAreaView>
    </TouchableWithoutFeedback>
        
        
    );
}

export default HomeScreenContainer;