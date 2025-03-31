import { View, StyleSheet, Animated } from 'react-native'
import React, { useRef } from 'react'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'
import { onboardingData } from '@/constants/data'
import OnboardingItem from '@/components/onboarding/item'
import OnboardingPaginator from '@/components/onboarding/paginator'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants/screen'
import { router } from 'expo-router'


const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef<FlatList | null>(null);
  const handleScroll = Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false})
  const viewableItemsChanged = useRef(({viewableItems} : any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({viewAreaCoveragePercentThreshold:50}).current;

  const handleNext = () => {
    if (currentIndex < onboardingData.length - 1) {
      slideRef.current?.scrollToIndex({
        animated: true,
        index: currentIndex + 1,
      });
    }
  };
  const handleGetStarted = () => {
    router.replace('/(auth)/sign-in')
  }
  return (
    <GestureHandlerRootView >
        <View style={styles.onboardingContainer}>
          <FlatList 
          data={onboardingData}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          bounces={false}
          ref={slideRef}
          onScroll={handleScroll}
          pagingEnabled
          scrollEventThrottle={100} 
          onViewableItemsChanged={viewableItemsChanged}
          showsHorizontalScrollIndicator={false}
          viewabilityConfig={viewConfig}
          renderItem={({item, index}) => (
            <OnboardingItem
           item={item}
           currentIndex={currentIndex}
           index={index}
            />
          )}
          />
          <View style={styles.paginatorContainer}>
            <OnboardingPaginator data={onboardingData} currentIndex={currentIndex} scrollX={scrollX} handleNext={handleNext} handleGetStarted={handleGetStarted}/>
          </View>
        </View>

    </GestureHandlerRootView>

  )
}

const styles = StyleSheet.create({
  onboardingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  paginatorContainer: {

    height: SCREEN_HEIGHT*0.20,
    width:SCREEN_WIDTH
  }
})
export default Onboarding