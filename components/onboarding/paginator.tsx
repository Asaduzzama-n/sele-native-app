import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { SCREEN_WIDTH } from '@/constants/screen'

const OnboardingPaginator = ({data, currentIndex}: {data: any, currentIndex: number}) => {
  return (
    <View style={styles.paginatorContainer}>
     {
        data.map((_: any, index: number) => (
          <View style={styles.dot} key={index}>
          </View>
        ))
     }
       {/* Next Button */}
       {currentIndex !== data.length - 1 && (
        <View style={styles.nextButton}>
          <TouchableOpacity >
            <Text style={{color: '#007BFF', fontWeight: 'bold' , fontSize: 16}}>Next</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Get Started Button */}
      {currentIndex === data.length - 1 && (
        <View style={styles.getStartedButton}>
          <TouchableOpacity >
            <Text style={{color: 'white', fontWeight: 'bold' , fontSize: 16}}>Get Started</Text>
          </TouchableOpacity>
        </View>
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
        backgroundColor: '#E6F2FF'
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