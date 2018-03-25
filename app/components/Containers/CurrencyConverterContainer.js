import React from 'react';
import {SafeAreaView, Keyboard, StatusBar, TouchableWithoutFeedback} from'react-native';
import styles from './styles';


const CurrencyConverterContainer = ({children}) => (

<TouchableWithoutFeedback onPress= {()=> Keyboard.dismiss()}>
    <SafeAreaView style = {styles.currencyContainer}>
        <StatusBar barStyle= "light-content"/>
            {children}
        
    </SafeAreaView>
</TouchableWithoutFeedback>

);

export default CurrencyConverterContainer;