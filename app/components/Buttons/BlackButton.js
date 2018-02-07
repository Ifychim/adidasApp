import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const BlackButton = ({children, onPress}) => (
    <TouchableOpacity 
    onPress = {onPress}
    style = {styles.blackButton}>

        <Text style = {styles.blackButtonText}>{children}</Text>

    </TouchableOpacity>

);

export default BlackButton;