import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import CurrencyConverterScreen from './screens/CurrencyConverterScreen';

import Navigator from './config/routes';


EStyleSheet.build({
    
    //App Color Themes
    $primaryBackground: '#F5F5F5',

    //Generic Colors
    $white: '#FFFFFF',
    $black: '#000000',
    $gray: '#8D8989',
    $green: '#1AAC1F',
    

    //Outline Test
   //$outline: 1

});

export default () => <CurrencyConverterScreen/>;