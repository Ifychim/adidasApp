import  {StackNavigator} from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

export default StackNavigator(
    {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: () => null
        },
    },

    SignUp: {
        screen: SignUpScreen,
        navigationOptions: {
            headerTitle: 'Sign Up'
        }
        
    },
    ForgotPassword: {
        screen: ForgotPasswordScreen,
        navigationOptions: {
            headerTitle: 'Forgot Password'
        }
    }

}, 

{
    headerMode: 'screen'
});