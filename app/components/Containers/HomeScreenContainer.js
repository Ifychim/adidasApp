import React, {Component} from 'react';
import {SafeAreaView, StatusBar, KeyboardAvoidingView} from 'react-native';

import styles from './styles';


const HomeScreenContainer = ({children}) => {
    return(
     
            <SafeAreaView style = {styles.homeContainer}>
                <StatusBar barStyle = "dark-content"/>
                <KeyboardAvoidingView 
                behavior = "position"
                keyboardVerticalOffset= {10}
                >
                    {children}
                </KeyboardAvoidingView>
                
            </SafeAreaView>

        
        
    );
}

export default HomeScreenContainer;