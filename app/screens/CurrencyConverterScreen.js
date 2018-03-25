import React, {Component} from 'react';
import {Image, Text} from 'react-native';

import {CurrencyConverterContainer} from '../components/Containers';
import {HeaderWithDrawer} from '../components/Headers';
import {GreenButton} from '../components/Buttons';
import {InputWithButton} from '../components/TextInputs';

//Todo: remove temp text

const TEMP_SCRREEN_TEXT= "100 USD is 71.76 GBP"

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_VALUE = "100";
const TEMP_QUOTE_VALUE = "71.76";

export default class CurrencyConverterScreen extends Component {
    render (){
        return(
            <CurrencyConverterContainer>
                <HeaderWithDrawer>
                    Currency Converter
                </HeaderWithDrawer>
                <Image
                style = {{alignSelf: 'center', marginTop: 10, height: 40, width: 70, marginBottom: 90}}
                source = {require('../assets/Images/Logos/homeLogoWhite.png')}
                />

               <InputWithButton
               buttonText = {TEMP_BASE_CURRENCY}
               value = {TEMP_BASE_VALUE}
               />

               <InputWithButton
               buttonText = {TEMP_QUOTE_CURRENCY}
               value = {TEMP_QUOTE_VALUE}

               />


                <Text 
                style = {{color: 'white', fontSize: 20, 
                        alignSelf: 'center', fontWeight: '700', marginBottom: 70}}> 
                
                {TEMP_SCRREEN_TEXT}
                
                </Text>
                
                <GreenButton>
                    Cash Out
                </GreenButton>
               

              

            </CurrencyConverterContainer>

        );
    }
}