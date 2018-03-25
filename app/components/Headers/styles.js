import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const TEXT_HEIGHT = 40;

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

    //Header with drawer Styling
    headerWithDrawerContainer: {
       flexDirection: 'row',
       

    },
    headerWithDrawerText: {
        fontSize: 25,
        color: '$white',
        letterSpacing: 0.4,
        marginLeft: 35,
        marginTop: 30
      
    },
    headerDrawer: {
        marginTop: 20,
        marginLeft: 20,
        position: 'relative'
    }
    
});