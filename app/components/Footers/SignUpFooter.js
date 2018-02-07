import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const SignUpFooter = ({children, onPress}) => (
    <View style = {styles.signUpContainer}>
        <Text style = {styles.noAccount}> Don't have an account? </Text>
        <TouchableOpacity onPress={onPress}>
            <Text style = {styles.signUpText}>{children}</Text>
        </TouchableOpacity>
    </View>
);

export default SignUpFooter;