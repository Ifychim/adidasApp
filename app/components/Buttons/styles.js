import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    //Black Button used on Home Screen
    blackButton: {
        backgroundColor: '$black',
        borderRadius: 5,
        marginHorizontal: 100,
        padding: 5,
        marginTop: 30,
        alignItems: 'center'

    },
    blackButtonText: {
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 0,
        color: '$white'
    },

    //Green Button used on Currency Conv Screen

    greenButton: {
        backgroundColor: '$green',
        alignItems: 'center',
        borderRadius: 5,
        marginHorizontal: 130,
        padding: 5,
        marginTop: 20

    },
    greenButtonText: {
        color: '$white',
        fontSize: 20,
        fontWeight: '700'
    }
});