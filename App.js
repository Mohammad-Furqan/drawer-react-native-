import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import WelcomeScreen from './screens/WelcomeScreen'
import UserScreen from './screens/UserScreen'
import {Ionicons} from "@expo/vector-icons";


const Drawer=createDrawerNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName='User' 
      screenOptions={{
        headerStyle:{backgroundColor:'#b72c2c'},
        headerTintColor:'white',
        drawerActiveBackgroundColor:'#eababa',
        drawerActiveTintColor:'#6b8ce8',
        // drawerStyle:{backgroundColor:'#a5a5a5cc'}
      }}
    >
      <Drawer.Screen  
      name="Welcome"  
      component={WelcomeScreen}
      options={{
      drawerLabel:'Welcome Screen',
      drawerIcon:({color,size})=>(<Ionicons name='home' color={color} size={size} />)
      
    }}
      />

      <Drawer.Screen 
      name="User"  
      component={UserScreen}
      options={{
        drawerIcon:({color,size})=><Ionicons name='person' color={color} size={size}/>
      }}
      />
    </Drawer.Navigator>
  </NavigationContainer>);
}
