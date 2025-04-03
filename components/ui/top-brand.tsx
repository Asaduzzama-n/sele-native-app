import { View, Text, FlatList, Image, StyleSheet, Pressable } from 'react-native'
import React, { useRef } from 'react'
import { Colors } from '@/constants/Colors'
import Animated, { FadeInLeft, FadeInUp } from 'react-native-reanimated'

const TopBrand = ({brandData, onPress, selectedBrand}:{
  brandData:any[], 
  onPress: (name: string) => void,
  selectedBrand: string
}) => {
  const flatListRef = useRef<FlatList>(null);

  const handlePress = (name: string, index: number) => {
    onPress(name);
    flatListRef.current?.scrollToIndex({
        index,
        animated: true,
        viewPosition: 0.5,
    })
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={brandData}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        // onScrollToIndexFailed={info => {
        //   const wait = new Promise(resolve => setTimeout(resolve, 500));
        //   wait.then(() => {
        //     flatListRef.current?.scrollToIndex({
        //       index: info.index,
        //       animated: true,
        //       viewPosition: 0.5
        //     });
        //   });
        // }}
        renderItem={({item, index}) => (
            <Animated.View
            entering={FadeInLeft.delay(index * 200).springify()}
            >
                <Pressable  
                onPress={() => handlePress(item.name, index)} 
                style={[
                styles.brandItem,
                selectedBrand === item.name && styles.selectedBrand
                ]}
            >
                <Image source={item.image} />
                <Text style={[
                styles.brandText,
                selectedBrand === item.name && styles.selectedText
                ]}>
                {item.name}
                </Text>
                </Pressable>    
            </Animated.View>
         
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    
  },
  brandItem: {
    borderColor: Colors.light.primary,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 100,
    paddingVertical: 10,
    marginRight: 20
    // marginHorizontal: 10
  },
  selectedBrand: {
    backgroundColor: Colors.light.boxBG,
  },
  brandText: {
    color: Colors.light.text,
    marginTop: 5
  },
  selectedText: {
    color: Colors.light.primary
  }
})

export default TopBrand