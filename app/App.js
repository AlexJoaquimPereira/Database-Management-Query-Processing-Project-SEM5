import WelcomePage from './pages/Welcomepage';
import login from './pages/login';
import SignUp from './pages/signup';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import resetPass from './pages/resetPass';
import signup from './pages/signup';
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName='WelcomePage'>
        <Stack.Screen name="WelcomePage" component={WelcomePage} options={{headerShown:false}} />
        <Stack.Screen 
        name="login" 
        component={login} 
        options={{headerShown:false}}/>
        <Stack.Screen 
        name="resetPass" 
        component={resetPass} 
        options={{headerShown:false}}/>
        <Stack.Screen 
        name="signup" 
        component={signup} 
        options={{headerShown:false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App