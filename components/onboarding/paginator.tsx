import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { Animated } from 'react-native'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { SCREEN_WIDTH } from '@/constants/screen'

const OnboardingPaginator = ({data, currentIndex,scrollX, handleNext, handleGetStarted}: {data: any, currentIndex: number, scrollX: Animated.Value, handleNext: () => void, handleGetStarted: () => void}) => {
  const nextAnim = useRef(new Animated.Value(1)).current;
  const getStartedAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animateButton = (buttonAnim: Animated.Value, toValue: number) => {
      Animated.timing(buttonAnim, {
        toValue,
        duration: 300,
        useNativeDriver: true,
      }).start();
    };

    if (currentIndex === data.length - 1) {
      animateButton(nextAnim, 0);
      animateButton(getStartedAnim, 1);
    } else {
      animateButton(nextAnim, 1);
      animateButton(getStartedAnim, 0);
    }
  }, [currentIndex]);
  return (
    <View style={styles.paginatorContainer}>
     {
        data.map((_: any, index: number) => {
          const inputRange = [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [20, 40, 20],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.4, 1, 0.4],
          extrapolate: 'clamp',
        });

          
          return <Animated.View  style={[styles.dot, {width: dotWidth, opacity: opacity}]} key={index}>
          </Animated.View>
        })
     }
       {/* Next Button */}
       {currentIndex !== data.length - 1 && (
        // <View >
          <TouchableOpacity onPress={handleNext} style={[styles.nextButton]}>
           <Animated.View style={[ { transform: [{ scale: nextAnim }], opacity: nextAnim }]}>
            <Text style={{color: '#007BFF', fontWeight: 'bold' , fontSize: 16}}>Next</Text>
           </Animated.View>
          </TouchableOpacity>
        // </View>
      )}

      {/* Get Started Button */}
      {currentIndex === data.length - 1 && (
        <TouchableOpacity onPress={handleGetStarted} style={[styles.getStartedButton, { transform: [{ scale: getStartedAnim }], opacity: getStartedAnim }]}>
          <Text style={{color: 'white', fontWeight: 'bold' , fontSize: 16 }}>Get Started</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
const styles = StyleSheet.create({
    paginatorContainer: {
        flex:1,
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center',
        gap: 10,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#007BFF'
    },
    nextButton: {
        position: 'absolute',
        right: 30,
        bottom: 50,
        backgroundColor: '#E6F2FF',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10
        
    },
    getStartedButton: {
        position: 'absolute',
        right: SCREEN_WIDTH*0.33,
        bottom: 50,
        backgroundColor: '#007BFF',
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10
    }
})
export default OnboardingPaginator