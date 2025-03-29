import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants/screen'

const OnboardingItem = ({item}: {item: any}) => {
    console.log(item)
  return (
    <View style={styles.onboardingItemContainer}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={{width: SCREEN_WIDTH*0.75, height: SCREEN_HEIGHT*0.75}} resizeMode='contain' />
        <Image source={require('../../assets/images/bg.png')} style={styles.backgroundImage} resizeMode='cover' />
      </View>
      <View style={[styles.textContainer, {padding: 10, gap: 15}]}>
        <Text style={{color: 'black', fontSize: 24, fontWeight: 'bold' , textAlign: 'center'}}>{item.text}</Text>
        <Text style={{color: 'black', fontSize: 16, fontWeight: '500', textAlign: 'center'}}>{item.description}</Text>
      </View>
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