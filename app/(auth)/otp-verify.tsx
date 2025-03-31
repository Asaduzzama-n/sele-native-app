import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import InputField from '@/components/ui/customInputField'
import CustomButton from '@/components/ui/customButton'
import { SCREEN_WIDTH } from '@/constants/screen'
import { images } from '@/constants/image'
import { Colors } from '@/constants/Colors'
import { router, useLocalSearchParams } from 'expo-router'

const VerifyOTP = () => {
  const [form, setForm] = React.useState({
    otp: '',
  })
  const {email} = useLocalSearchParams()

  const handleVerifyOTP = () => {
    if (!form.otp) {
      alert('OTP is required')
      return
    }
    router.replace('/(auth)/reset-password')
    // Handle OTP verification logic
  }

  return (
    <View style={styles.container}>
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={images.otp} resizeMode='contain' />
      </View>

      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Verify Your Account</Text>
        <Text style={styles.subtitle}>We have sent an OTP to {email?.slice(0, 2)}****@{email?.split('@')[1]}</Text>
      </View>

      {/* OTP Input Field */}
      <View style={styles.inputContainer}>
        <InputField 
          placeholder='Enter OTP' 
          value={form.otp} 
          label='OTP'  
          icon='lock' 
          type='text' 
          secureTextEntry={false} 
          onChangeText={(value: string) => setForm({ ...form, otp: value })} 
        />
      </View>

      {/* Button */}
      <View style={styles.buttonContainer}>
        <CustomButton 
          bgVariant='primary' 
          onPress={handleVerifyOTP} 
          isDisabled={!form.otp}  
          title='Verify' 
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width: SCREEN_WIDTH*0.8,
    alignSelf:'center',
    rowGap:20
  },
  imageContainer: {
    flex: 0.45,
    justifyContent:'flex-end',
    alignItems: 'center',
  },
  image: {
    width: SCREEN_WIDTH * 0.6,
    height: SCREEN_WIDTH * 0.6,
  },
  titleContainer: {
    flex: 0.10,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: '500',
    color: Colors.light.text,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '400',
    color: Colors.light.subText,
    textAlign: 'center',
  },
  inputContainer: {
    flex: 0.30,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 40,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default VerifyOTP
