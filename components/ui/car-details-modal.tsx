import { View, Text, Modal, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { Feather, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { SCREEN_HEIGHT } from '@/constants/screen'

interface CarDetailsModalProps {
  visible: boolean;
  onClose: () => void;
  car: any
}

const CarDetailsModal = ({ visible, onClose, car }: CarDetailsModalProps) => {
  if (!car) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      <TouchableOpacity 
        style={styles.modalOverlay}
        activeOpacity={1} 
      >
        <Animated.View 
          entering={FadeInDown.springify().mass(0.5)}
          style={styles.modalContent}
        >
          <TouchableOpacity style={[styles.closeButton, {}]} onPress={onClose}>
            <Feather name="x" size={24} color={Colors.light.primary} />
          </TouchableOpacity>

          <View style={styles.carDetails}>
            <Image 
              source={car.image} 
              style={styles.modalImage}
              resizeMode="contain"
            />
            
            <ScrollView 
              style={styles.detailsContainer}
              contentContainerStyle={[styles.scrollContent, { paddingBottom: 40 }]}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.headingText}>{car.name}</Text>
              <Text style={styles.basicText}>{car.description}</Text>
              
              {/* First Row of Features */}
              <View style={styles.carBasicContainer}>
                <View style={styles.featureBox}>
                  <MaterialCommunityIcons name="fuel" size={28} color={Colors.light.primary} />
                  <Text style={styles.basicText}>{car.gasoline}</Text>
                </View>
                <View style={styles.featureBox}>
                  <MaterialIcons name="format-color-fill" size={28} color={Colors.light.primary} />
                  <Text style={styles.basicText}>{car.color}</Text>
                </View>
                <View style={styles.featureBox}>
                  <Ionicons name="car-sport-outline" size={24} color={Colors.light.primary} />
                  <Text style={styles.basicText}>{car.type}</Text>
                </View>
              </View>

              {/* Second Row of Features */}
              <View style={styles.carBasicContainer}>
                <View style={styles.featureBox}>
                  <Ionicons name="speedometer-outline" size={24} color={Colors.light.primary} />
                  <Text style={styles.basicText}>{car.mileage}</Text>
                </View>
                <View style={styles.featureBox}>
                  <MaterialCommunityIcons name="seat" size={28} color={Colors.light.primary}/>
                  <Text style={styles.basicText}>{car.seatCount}</Text>
                </View>
                <View style={styles.featureBox}>
                  <FontAwesome name="gears" size={24} color={Colors.light.primary} />
                  <Text style={styles.basicText}>{car.gearSystem}</Text>
                </View>
              </View>

              {/* Duplicate Sections (Preserved as per request) */}
              <View style={styles.carBasicContainer}>
                <View style={styles.featureBox}>
                  <MaterialCommunityIcons name="fuel" size={28} color={Colors.light.primary} />
                  <Text style={styles.basicText}>{car.gasoline}</Text>
                </View>
                <View style={styles.featureBox}>
                  <MaterialIcons name="format-color-fill" size={28} color={Colors.light.primary} />
                  <Text style={styles.basicText}>{car.color}</Text>
                </View>
                <View style={styles.featureBox}>
                  <Ionicons name="car-sport-outline" size={24} color={Colors.light.primary} />
                  <Text style={styles.basicText}>{car.type}</Text>
                </View>
              </View>

              <View style={styles.carBasicContainer}>
                <View style={styles.featureBox}>
                  <Ionicons name="speedometer-outline" size={24} color={Colors.light.primary} />
                  <Text style={styles.basicText}>{car.mileage}</Text>
                </View>
                <View style={styles.featureBox}>
                  <MaterialCommunityIcons name="seat" size={28} color={Colors.light.primary}/>
                  <Text style={styles.basicText}>{car.seatCount}</Text>
                </View>
                <View style={styles.featureBox}>
                  <FontAwesome name="gears" size={24} color={Colors.light.primary} />
                  <Text style={styles.basicText}>{car.gearSystem}</Text>
                </View>
              </View>

              <View style={styles.ratingRow}>
                <Feather name="star" size={18} color={Colors.light.primary} />
                <Text style={styles.rating}>
                  {car.reviews.reduce((acc: number, review: any) => acc + review.rating, 0) / car.reviews.length}
                </Text>
              </View>
              
              {car.description && (
                <Text style={styles.description}>{car.description}</Text>
              )}
            </ScrollView>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  modalContent: {
    backgroundColor: Colors.light.background,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    height: SCREEN_HEIGHT * 0.80,
    width: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: Colors.light.boxBG,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carDetails: {
    flex: 1,
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 15,
  },
  detailsContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  carBasicContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  featureBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  headingText: {
    fontSize: 22,
    fontWeight: '600',
    color: Colors.light.text,
  },
  basicText: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.light.subText,
    marginTop: 5,
    textAlign: 'center',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginVertical: 15,
  },
  rating: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.light.text,
  },
  description: {
    fontSize: 14,
    color: Colors.light.text,
    lineHeight: 20,
  },
})

export default CarDetailsModal