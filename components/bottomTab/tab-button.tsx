import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { useEffect } from 'react';
import { withSpring } from 'react-native-reanimated';
import { useAnimatedStyle } from 'react-native-reanimated';
import { interpolate } from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';
import { ICONS } from './tab-bar';

const TabButton = ({route, isFocused, onPress,onLongPress, lable}:{route:any, isFocused:boolean, onPress: () => void, onLongPress: () => void, lable:string}) => {


    const scale = useSharedValue(isFocused ? 1 : 0);

    useEffect(() => {
      scale.value = withSpring(isFocused ? 1 : 0, { damping: 10, stiffness: 100 });
    }, [isFocused]);
  
    const animatedTextStyle = useAnimatedStyle(() => {
      return {
        opacity: interpolate(scale.value, [0, 1], [1, 0]),
      };
    });
  
    const animatedIconStyle = useAnimatedStyle(() => {
      return {
        top: interpolate(scale.value, [0, 1], [0, 8]), // Moves icon slightly up
        transform: [{ scale: interpolate(scale.value, [0, 1], [1, 1.2]) }], // Smooth scale animation
      };
    });
  return (
    <Pressable onPress={onPress} onLongPress={onLongPress} style={styles.tabItem} key={route.key}>
    <Animated.View style={[animatedIconStyle]}>
        {/* @ts-ignore */}
      <Feather name={ICONS[route.name as keyof typeof ICONS]} size={18} color={isFocused ? Colors.light.primary : '#222'}  />
    </Animated.View>
    <Animated.Text style={[animatedTextStyle, { color: isFocused ? Colors.light.primary : '#222' }, { fontSize: 12 }]}>
      {lable}
    </Animated.Text>
  </Pressable>
  )
}
const styles = StyleSheet.create({
    tabItem: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 4,
      paddingVertical: 10,
    },
  });
export default TabButton