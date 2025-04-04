import { View, Text, Modal, TouchableOpacity, Image, StyleSheet, ScrollView, FlatList, Pressable } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { SCREEN_HEIGHT } from '@/constants/screen';
import { carDetailsIcons } from '@/constants/data';

interface CarDetailsModalProps {
  visible: boolean;
  onClose: () => void;
  car: any;
}

const CarDetailsModal = ({ visible, onClose, car }: CarDetailsModalProps) => {
  if (!car) return null;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
      statusBarTranslucent={true}
    >
      {/* Overlay: Close ONLY when clicking outside the white box */}
    <View style={styles.modalOverlay}>
          <Animated.View
            entering={FadeInDown.springify().mass(0.5)}
            style={styles.modalContent}
          >
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Feather name="x" size={24} color={Colors.light.primary} />
            </TouchableOpacity>

            <View style={{flex:1}}>
              {/* Static Image - Outside ScrollView */}
              <View style={styles.imageContainer}>
                  <Image 
                    source={car.image} 
                    style={styles.carImage}
                    resizeMode='cover'
                  />
              </View>
              
              {/* Scrollable Content */}
              <ScrollView 
                style={styles.scrollContainer}
                showsVerticalScrollIndicator={false}
              >
                <View style={styles.detailsContainer}>
                  <View style={{rowGap: 10}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: Colors.light.text, marginTop: 10}}>{car.name}</Text>
                    <Text style={{fontSize: 14, fontWeight: '500', color: Colors.light.subText}}>{car.description}</Text>
                  </View>
                  
                  {/* Horizontal FlatList */}
                  <View style={styles.carDetailsContainer}>
                    <Text style={{fontSize: 16, fontWeight: '500', color: Colors.light.text, marginBottom: 10}}>Car Basics</Text>
                    <FlatList 
                      data={carDetailsIcons}
                      contentContainerStyle={{paddingRight: 20}}
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      ItemSeparatorComponent={() => <View style={{width: 15}} />}
                      renderItem={({item}) => (
                        <View style={styles.featureBox}>
                          {/* @ts-ignore */}
                          <MaterialCommunityIcons name={item.icon} size={24} color={Colors.light.primary} />
                          <Text style={styles.featureText}>{car[item.text]}</Text>
                        </View>
                      )}
                      keyExtractor={(item, index) => `${item.text}-${index}`}
                    />
                  </View>
                  
                  {/* Additional content that will scroll if needed */}
                  <Text style={{fontSize: 16, fontWeight: '500', color: Colors.light.text}}>Protection Plan</Text>
                  <View style={styles.additionalContent}>
                     <View style={{rowGap: 10}}>
                      {
                        car.protectionPlan.map((plan: string, index: number) => (
                          <View key={index} style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                            <MaterialCommunityIcons name="check" size={20} color={Colors.light.primary} />
                            <Text style={styles.descriptionText}>{plan}</Text>
                          </View>
                        ))
                      }
                     </View>
                  </View>

                  <View style={styles.priceDetails}>
                    <Text style={{fontSize: 16, fontWeight: '500', color: Colors.light.text, marginBottom: 10}}>Price Details</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                      <Text>Reserve Price</Text>
                    <Text style={{color: Colors.light.primary, fontWeight: '500'}}>{car.pricePerDay} per day</Text>
                    </View>
                  </View>

                  <View style={styles.agencyDetails}>
                    <Text style={{fontSize: 16, fontWeight: '500', color: Colors.light.text, marginBottom: 10}}>Agency Details</Text>
                    <View style={{gap: 10, flexDirection: 'row',padding: 10,borderRadius: 15, alignItems: 'center', justifyContent: 'space-between', backgroundColor: Colors.light.boxBG }}>
                      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                      <Image source={car.agency.image} style={{width: 80, height: 80, borderRadius: 10}}/>
                        <View>
                        <Text>{car.agency.name}</Text>
                        <Text>{car.agency.location}</Text>
                        </View>
                      </View>
                      <Pressable>
                        <Feather name="chevron-right" size={24} color={Colors.light.primary} />
                      </Pressable>
                    </View>
                  </View>

                  <View style={styles.reviews}>
                  <Text style={{fontSize: 16, fontWeight: '500', color: Colors.light.text}}>Reviews</Text>
                     {
                      car.reviews.map((review: any, index: number) => (
                        <View key={index} style={{gap: 10, marginVertical: 10, borderRadius: 15, padding:10}} >
                         <View style={{flexDirection: 'row', alignItems: 'center',justifyContent: 'space-between'}}>
                         <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                          <Image source={review.reviewerImage} style={{width: 50, height: 50, borderRadius: 10}}/>
                          <View>
                            <Text>{review.name}</Text>
                            <Text>{new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</Text>
                          </View>
                          </View>
                          <Text style={{color: Colors.light.primary, fontWeight: '500', backgroundColor: Colors.light.boxBG, padding: 5, borderRadius: 10}}>{review.rating}</Text>
                          </View>
                          <Text style={{color: Colors.light.subText, fontSize: 14}}>{review.review}</Text>
                        </View>
                      ))
                     }
                  </View>
                </View>
              </ScrollView>


                <TouchableOpacity style={{flexDirection: 'row', height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.light.primary, padding: 10, borderRadius: 15, position: 'absolute', bottom: 10, left: 0, right: 0}}>
                  <Text style={{color: Colors.light.background, fontWeight: '500'}}>Book Now</Text>
                </TouchableOpacity>

            </View>
          </Animated.View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  reviews: {
    marginTop: 10,
    paddingVertical:10,
    // backgroundColor: Colors.light.boxBG,
    borderRadius: 15,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 15,
  },
  modalContent: {
    backgroundColor: Colors.light.background,
    borderRadius: 20,
    // paddingTop:15,
    paddingHorizontal: 15,
    height: SCREEN_HEIGHT * 0.90,
    // width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -4 },
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
    marginVertical: 15,
  },
  imageContainer: {
    width: '100%',
    height: 180,
    borderRadius: 20,
  },
  carImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 30,
  },
  detailsContainer: {
    flex: 1,
    paddingBottom: 20,
  },
  carDetailsContainer: {
    // height: 100,
    marginVertical: 15,
    rowGap: 10,
  },
  featureBox: {
    backgroundColor: Colors.light.boxBG,
    height: 80,
    width: 90,
    padding: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  featureText: {
    fontSize: 12,
    color: Colors.light.text,
    marginTop: 5,
    textAlign: 'center',
  },
  additionalContent: {
    marginTop: 10,
    // borderWidth: 1,
    // borderColor: Colors.light.primary,
    padding:10,
    backgroundColor: Colors.light.boxBG,
    borderRadius: 15,

  },
  priceDetails: {
    marginTop: 10,
    paddingVertical:10,
    // backgroundColor: Colors.light.boxBG,
    borderBottomWidth: 2,
    borderBottomColor: Colors.light.primary,
  
    // borderRadius: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.light.text,
    marginBottom: 10,
  },
  agencyDetails: {
    marginTop: 10,
    paddingVertical:10,
    // backgroundColor: Colors.light.boxBG,
    borderRadius: 15,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.light.subText,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.light.text,
    marginLeft: 5,
  }
});

export default CarDetailsModal;