import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants/screen'
import Animated, { Easing, runOnUI, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'

const OnboardingItem = ({item, currentIndex, index}: {item: any, currentIndex: number, index: number}) => {
  const carX = useSharedValue(150); // Start at position 0
  const carY = useSharedValue(-120);
  const carScale = useSharedValue(0.7);
  const textOpacity = useSharedValue(0);
  useEffect(() => {
    if (currentIndex === index) {
 
        carX.value = withTiming(0, { duration: 2000 ,easing: Easing.out(Easing.exp)});
        carY.value = withTiming(0, { duration: 2000 ,easing: Easing.out(Easing.exp)});
        carScale.value = withTiming(1, { duration: 2000 ,easing: Easing.out(Easing.exp)});
        textOpacity.value = withTiming(1, { duration: 2000 ,easing: Easing.out(Easing.exp)});
    }else{
      carX.value = withTiming(150, { duration: 2000 ,easing: Easing.out(Easing.exp)});
      carY.value = withTiming(-120, { duration: 2000 ,easing: Easing.out(Easing.exp)});
      carScale.value = withTiming(0.7, { duration: 2000 ,easing: Easing.out(Easing.exp)});
      textOpacity.value = withTiming(0, { duration: 2000 ,easing: Easing.out(Easing.exp)});
    }
  }, [currentIndex, index]);
  const carAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: carX.value }, { translateY: carY.value }, { scale: carScale.value }],
    };
  });

  const textAnimation = useAnimatedStyle(() => {
    return {
      opacity: textOpacity.value
    }
  })


  return (
    <View style={styles.onboardingItemContainer}>
      <View style={styles.imageContainer}>
        <Animated.Image source={item.image} style={[{width: SCREEN_WIDTH*0.75, height: SCREEN_HEIGHT*0.75}, carAnimation]} resizeMode='contain' />
        <Image source={require('../../assets/images/bg.png')} style={styles.backgroundImage} resizeMode='cover' />
      </View>
      <Animated.View style={[styles.textContainer, {padding: 10, gap: 15}, textAnimation]}>
        <Text style={{color: 'black', fontSize: 28, fontWeight: '400' , textAlign: 'center'}}>{item.text}</Text>
        <Text style={{color: 'gray', fontSize: 18, fontWeight: '400', textAlign: 'center'}}>{item.description}</Text>
      </Animated.View>
    </View>
  )
}


const styles = StyleSheet.create({
    onboardingItemContainer: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        height: SCREEN_HEIGHT*0.80,
        width: SCREEN_WIDTH,
    },
    imageContainer: {
        flex: 0.75,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        // borderWidth: 1
    },
    backgroundImage:{
        position: 'absolute',
        top: 0,
        width:SCREEN_WIDTH,
        height: SCREEN_HEIGHT*0.6,
        zIndex: -1
    },
    textContainer: {
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    }

})
export default OnboardingItem