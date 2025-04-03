import { useLinkBuilder, useTheme } from "@react-navigation/native";
import { LayoutChangeEvent, Pressable, StyleSheet, Text, View } from "react-native";
import TabButton from "./tab-button";
import { Colors } from "@/constants/Colors";
import { SCREEN_WIDTH } from "@/constants/screen";
import { useState } from "react";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

export const ICONS: { [key: string]: string } = {
  Home: 'home',
  Reserve: 'clipboard',
  Profile: 'user',
  Chat: 'message-circle',
};

const TabBar =({ state, descriptors, navigation }:{state:any, descriptors:any, navigation:any})=> {

  const buttonWidth = SCREEN_WIDTH / state.routes.length;
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

 const onTabBarLayout = (e:LayoutChangeEvent)=>{
  setDimensions({
    height:e.nativeEvent.layout.height,
    width:e.nativeEvent.layout.width
  })
 }

 const tabPositionX = useSharedValue(0);

 const animatedStyle = useAnimatedStyle(() => {
  return {
    transform: [{ translateX: tabPositionX.value }],
  };
});

  return (
      <View style={styles.tabBar}>
        <Animated.View style={[animatedStyle, {position:'absolute', backgroundColor:'#723FEB',  borderRadius:30, marginHorizontal: 12, height:dimensions.height-15, width:buttonWidth-25, bottom:7.5}]}/>
        {state.routes.map((route:any, index:any) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
                ? options.title
                : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            tabPositionX.value = withSpring(index * buttonWidth, {damping: 15, stiffness: 180, mass: 0.5 });
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
           <TabButton
            key={index}
            route={route}
            isFocused={isFocused}
            onPress={onPress}
            onLongPress={onLongPress}
            lable={label}
          />
          );
        })}
      </View>
    );
  }

  const styles = StyleSheet.create({
    tabBar: {
      position: 'absolute',
      bottom:0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTopEndRadius: 20,
      borderTopStartRadius: 20,
      backgroundColor: '#ededed',

    },
  })

  export default TabBar