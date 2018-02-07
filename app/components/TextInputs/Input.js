import React from 'react';
import {TextInput} from 'react-native';

import styles from './styles';

const Input = ({secureTextEntry, placeholder, autoCapitalize, autoCorrect, onChangeText}) => (

    <TextInput
    style = {styles.input}
    secureTextEntry = {secureTextEntry}
    placeholder={placeholder}
    autoCapitalize = "none"
    autoCorrect = {autoCorrect}
    onChangeText = {onChangeText}
    placeholderTextColor = "#a5a5a5"
    />

);

export default Input;