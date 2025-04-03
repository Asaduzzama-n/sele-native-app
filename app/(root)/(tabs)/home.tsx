import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Feather } from '@expo/vector-icons';
import { images } from '@/constants/image';
import { Image } from 'react-native';
import TopBrand from '@/components/ui/top-brand';
import { brandData, carData } from '@/constants/data';
import TopCars from '@/components/ui/top-car';

export default function Home() {

  const [brand, setBrand] = useState("");
  const [cars, setCars] = useState(carData);

  const handleBrandPress = (name: string) => {
    setBrand(name);
    setCars(carData.filter(car => {
      if(name === 'All') {
        return carData;
      }
      return car.brand === name;
    }));
  };


  


  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.toSection}>
      <View>
        <Text style={styles.logo}>SELE</Text>
      </View>
      <View style={styles.iconContainer}>
        <Feather name="bell" size={24} color={Colors.light.primary} />
      </View>
    </View>
    <View style={styles.filterSection}>
      <View>
        <Text style={styles.headerText}>
          Quick, Easy & Affordable{'\n'}
          <Text style={styles.highlightedText}>Car Rentals.</Text>
        </Text>
      </View>
      <View style={styles.iconContainer}>
        <Image source={images.filter} />
      </View>
    </View>
    <View style={styles.brandSection}>
      <Text style={styles.sectionTitle}>Top Brands</Text>
      <TopBrand selectedBrand={brand} brandData={brandData} onPress={handleBrandPress} />
    </View>
    <View style={styles.carSection}>
      <Text style={styles.sectionTitle}>Top Cars</Text>
      <TopCars carData={cars} />
    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    rowGap: 30,
  },
  toSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.light.secondary
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: Colors.light.boxBG,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 24,
    fontWeight: '500',
    color: Colors.light.text
  },
  highlightedText: {
    fontSize: 24,
    fontWeight: '500',
    color: Colors.light.primary
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '500',
    color: Colors.light.text,
    marginBottom: 15
  },
  brandSection: {
    rowGap: 20,
  },
  carSection: {
    flex: 1,
    borderRadius: 10,
    // padding: 10
  }
  });