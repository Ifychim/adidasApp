import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const PasswordFooter = ({children, onPress}) => (
    <TouchableOpacity
    onPress = {onPress}
    style = {styles.touchable}>
        <Text style = {styles.footerText}> {children}</Text>
    </TouchableOpacity>
);

export default PasswordFooter;