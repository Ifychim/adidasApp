import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const GreenButton = ({children, onPress}) => (
    <TouchableOpacity 
        onPress={onPress}
        style = {styles.greenButton}>
        
        <Text style = {styles.greenButtonText}>
            {children}
        </Text>
        
    </TouchableOpacity>
);

export default GreenButton;