import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

export default EStyleSheet.create({
    blackUnderLine: {
        backgroundColor: '$black',
        height: 1,
        width: Dimensions.get('window').width*0.99
    }
});