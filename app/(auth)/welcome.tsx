import { View, StyleSheet } from 'react-native'
import React, { useRef } from 'react'
import { FlatList, GestureHandlerRootView } from 'react-native-gesture-handler'
import { onboardingData } from '@/constants/data'
import OnboardingItem from '@/components/onboarding/item'
import OnboardingPaginator from '@/components/onboarding/paginator'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants/screen'

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const slideRef = useRef<FlatList | null>(null);
  const viewableItemsChanged = useRef(({viewableItems} : any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;
  return (
    <GestureHandlerRootView >
        <View style={styles.onboardingContainer}>
          <FlatList 
          data={onboardingData}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          bounces={false}
          ref={slideRef}
          onViewableItemsChanged={viewableItemsChanged}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <OnboardingItem
           item={item}
            />
          )}
          />
          <View style={styles.paginatorContainer}>
            <OnboardingPaginator data={onboardingData} currentIndex={currentIndex}/>
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