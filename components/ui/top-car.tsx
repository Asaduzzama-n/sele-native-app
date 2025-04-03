import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import { Colors } from '@/constants/Colors'
import { Feather } from '@expo/vector-icons'
import Animated, { 
    FadeInLeft,
} from 'react-native-reanimated'
import CarDetailsModal from './car-details-modal'


const TopCars = ({carData}: {carData: any[]}) => {
    const [selectedCar, setSelectedCar] = useState<any>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const handlePress = (car: any) => {
      setSelectedCar(car);
      setModalVisible(true);
    };


    
  return (
    <View style={styles.container}>
    <FlatList
      data={carData}
      keyExtractor={(item) => item.id.toString()}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 15, paddingBottom: 80 }}
      style={{ height: 400 }}
      renderItem={({item, index}) => (
        <Animated.View entering={FadeInLeft.delay(index * 200).springify()}>
          <TouchableOpacity 
            style={styles.item} 
            onPress={() => handlePress(item)}
          >
            <Image style={styles.image} source={item.image} resizeMode='contain'/>
            <View style={styles.infoContainer}>
              <Text style={styles.text}>{item.name}</Text>
              <Text style={styles.text}>
                ${item.pricePerDay}
                <Text style={{color: Colors.light.secondary}}> / Day</Text>
              </Text>
            </View>
            <View style={styles.ratingContainer}>
              <Feather name='star' size={18} color={Colors.light.primary} />
              <Text style={styles.text}>
                {item.reviews.reduce((acc: number, review: any) => acc + review.rating, 0) / item.reviews.length}
              </Text>
            </View>
          </TouchableOpacity>
        </Animated.View>
      )}
    />

    <CarDetailsModal 
      visible={modalVisible}
      onClose={() => setModalVisible(false)}
      car={selectedCar}
    />
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      rowGap: 15,
    },
    item: {
      flex: 1,
      borderRadius: 10,
      borderColor: Colors.light.primary,
      backgroundColor: Colors.light.boxBG,
    },
    image: {
      width: '100%',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
    },
    infoContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10
    },
    text: {
      fontSize: 14,
      fontWeight: '500',
      color: Colors.light.text,
    },
    ratingContainer: {
      position: 'absolute',
      right: 10,
      bottom: 50,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      backgroundColor: Colors.light.boxBG,
      paddingHorizontal: 10,
      paddingVertical: 2,
      borderRadius: 50
    }
})

export default TopCars