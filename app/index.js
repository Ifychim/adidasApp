import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';

import Navigator from './config/routes';


EStyleSheet.build({
    
    //App Color Themes
    $primaryBackground: '#F5F5F5',

    //Constant Colors
    $white: '#FFFFFF',
    $black: '#000000',

    //Outline Test
   //$outline:1

});

export default () => <Navigator/>;