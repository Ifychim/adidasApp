import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({

    //Password Footer
    footerText: {
        fontSize: 15,
        letterSpacing: 0,
        fontWeight: '300'
    },
    touchable: {
        alignSelf: 'center',
        marginTop: 20
    },

    // SignUp Footer
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 100

    },
    signUpText: {
        letterSpacing: 0,
        fontSize: 12,
        fontWeight: '300',
        color: 'blue'
    },
    noAccount: {
        letterSpacing: 0,
        fontSize: 12,
        fontWeight: '300',
    }
    
});