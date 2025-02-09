import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../sceens/LoginScreen';
import { PRIMARY_COLOR } from '../commons/constants';
import DivisionScreen from '../sceens/DivisionScreen';

const Stack = createStackNavigator();

export const StackNavigator = ()=> {
  return (
    <Stack.Navigator
    screenOptions={{
        cardStyle:{
            backgroundColor:PRIMARY_COLOR
        }
    }}
    >
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      <Stack.Screen options={{headerShown: false}} name="Division" component={DivisionScreen} />
      
    </Stack.Navigator>
  );
}