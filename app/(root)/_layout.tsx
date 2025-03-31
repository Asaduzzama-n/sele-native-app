
import React from 'react'
import { Tabs } from 'expo-router'

const Layout = () => {
  return (
   <Tabs
   screenOptions={{
    headerShown: false,
    tabBarStyle: { display: 'none' }, // Hides the tab bar completely
   }}
  
   >
    <Tabs.Screen name="(auth)" options={{ headerShown: false }}/>
    <Tabs.Screen name="(tabs)" options={{ headerShown: false }}/>
   </Tabs>
  )
}

export default Layout