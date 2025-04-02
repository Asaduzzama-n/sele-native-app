import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBar from '@/components/bottomTab/tab-bar';
import Home from './home';
import Reserve from './reserve';
import Profile from './profile';
import Chat from './chat';

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <Tab.Navigator 
    screenOptions={{
      headerShown: false,
    }}
    tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen name="Home" options={{ headerShown: false }} component={Home} />
      <Tab.Screen name="Reserve" options={{ headerShown: false }} component={Reserve} />
      <Tab.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
      <Tab.Screen name="Chat" options={{ headerShown: false }} component={Chat} />
    </Tab.Navigator>
  );
}
