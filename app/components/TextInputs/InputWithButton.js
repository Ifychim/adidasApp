import React from 'react';
import {TouchableOpacity, TextInput, View, Text} from 'react-native';

import styles from './styles';


const InputWithButton = (props) => (
    <View style = {styles.container}>
        <TouchableOpacity
        style = {styles.buttonContainer}
        onPress={props.onPress}>
            <Text style = {styles.buttonText}> {props.buttonText} </Text>
        </TouchableOpacity>

            <View style = {styles.separator}/>

            <TextInput style = {styles.input} {...props}/>
    </View>
);

export default InputWithButton;