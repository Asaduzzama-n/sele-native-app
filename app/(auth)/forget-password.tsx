import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import InputField from '@/components/ui/customInputField'
import CustomButton from '@/components/ui/customButton'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants/screen'
import { images } from '@/constants/image'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'

const ForgetPassword = () => {
  const [form, setForm] = React.useState({
    email: '',
  })
  const handleForgetPassword = ()=>{
    const {email} = form;
    router.push({
      pathname: '/(auth)/otp-verify',
      params: { email: email }
    })
  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={{ width: SCREEN_WIDTH*0.6, height: SCREEN_WIDTH*0.6 }} source={images.forgetPass} resizeMode='contain'></Image>
      </View>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 28, fontWeight: '500' , color: Colors.light.text  , textAlign: 'center'}}>Forgot Password</Text>
        <Text style={{fontSize: 18, fontWeight: '400', color: Colors.light.subText, textAlign: 'center'}}>Enter your email to reset your password.</Text>
      </View>
      <View style={styles.inputContainer}>
        <InputField placeholder='Email' value={form.email} label='Email'  icon='mail' type='email' secureTextEntry={false} onChangeText={(value:string)=> setForm({...form, email:value})} />
        
      </View>
      <View style={styles.buttonContainer}>
      <CustomButton bgVariant='primary' onPress={()=>handleForgetPassword()} isDisabled={!form.email}  title='Send OTP' ></CustomButton>
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
    flex:0.45,
    justifyContent:'flex-end',
    alignItems:'center',
  },
  titleContainer: {
    flex:0.10,
    justifyContent:'center',
    alignItems:'center',
    rowGap:10
  },
  inputContainer: {
    flex:0.30,
    alignItems:'center',
    justifyContent:'flex-start',
    paddingVertical:40,


  },
  buttonContainer: {
    alignItems:'center',
    justifyContent:'center',


  }
})
export default ForgetPassword