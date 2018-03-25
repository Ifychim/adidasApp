import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const HeaderWithDrawer = ({children, onPress}) => (
<View style = {styles.headerWithDrawerContainer}>


    <TouchableOpacity>
        <Image
        style = {styles.headerDrawer}
        source={require('../../assets/Images/Icons/drawerIcon.png')}
        />

    </TouchableOpacity>

   
            <Text style = {styles.headerWithDrawerText}>
                {children}
            </Text>
    

    </View>
);

export default HeaderWithDrawer;
