import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home.screen';
import { SettingsScreen } from '../screens/settings.screen';
import {Image} from 'react-native';
import { ProfileScreen } from '../screens/profile.screen';

const Tab = createBottomTabNavigator();

const icons = {
    home: require('../assets/home.png'),
    settings: require('../assets/settings.png'),
    profile: require('../assets/profile.png'),
  };

export default function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={icons.home}
              style={{height: size, width: size}}
              tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={icons.settings}
              style={{height: size, width: size}}
              tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              source={icons.profile}
              style={{height: size, width: size}}
              tintColor={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}