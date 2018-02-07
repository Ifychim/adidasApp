import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const HomeHeader = ({children}) => (
    <View style = {styles.headerContainer}>
        <Text style = {styles.headerText}> {children}</Text>
       
    </View>
);

export default HomeHeader;