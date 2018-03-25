import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({

    //Regular Input used on login/signup screens
    input: {
        color: '$black',
        padding: 30,
    },

    //Input with button used on currency converter screen
    container: {
        flexDirection: 'row',
        padding: 20
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '$gray',
     
    },
    buttonText: {
        color: '$white',
        paddingHorizontal: 2,
        fontWeight: '600',
        fontSize: 25

    },
    input: {
        color: '$white',
        backgroundColor: '$gray',
        flex:1,
        fontSize: 20,
        fontWeight: '500',
        paddingHorizontal: 8

    },
    separator: {
        backgroundColor: '$black',
        height: 1.3,
        width: 1.3,
    }
    
});