import Ionicon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {useLocalStorage} from './src/hooks';
import {UserContext, initialUserState} from './src/utils';
import {
  HomeScreen,
  WeatherScreen,
  ProfileScreen,
  SettingsScreen,
} from './src/screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = (): JSX.Element => {
  const [userInfo, setUserInfo] = useLocalStorage('@user', initialUserState);
  const value = {userInfo, setUserInfo};
  return (
    <UserContext.Provider value={value}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{tabBarShowLabel: false}}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: 'MyApp',
              tabBarIcon: props => {
                return props.focused ? (
                  <Ionicon name="home" size={25} color="black" />
                ) : (
                  <Ionicon name="home-outline" size={25} color="black" />
                );
              },
            }}
          />
          <Tab.Screen
            name="Search"
            component={WeatherScreen}
            options={{
              headerShown: false,
              tabBarIcon: props => {
                return props.focused ? (
                  <Ionicon name="search" size={25} color="black" />
                ) : (
                  <Ionicon name="search-outline" size={25} color="black" />
                );
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerTitleAlign: 'center',
              tabBarIcon: props => {
                return props.focused ? (
                  <Ionicon name="person" size={25} color="black" />
                ) : (
                  <Ionicon name="person-outline" size={25} color="black" />
                );
              },
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              headerTitleAlign: 'center',
              tabBarIcon: props => {
                return props.focused ? (
                  <Ionicon name="settings" size={25} color="black" />
                ) : (
                  <Ionicon name="settings-outline" size={25} color="black" />
                );
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
