import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

export default EStyleSheet.create({
    headerContainer: {
        alignItems: 'center',

    },
    headerText: {
        fontWeight: '700',
        letterSpacing: 0.3,
        fontSize: 30,
        color: '$black',
        marginBottom: 50

    },
    /*
    headerUnderline: {
        backgroundColor: '$black',
        height: 1,
        width: Dimensions.get('window').width * 0.20,
        marginBottom: 40
    }*/
});