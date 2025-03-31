import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import InputField from '@/components/ui/customInputField'
import CustomButton from '@/components/ui/customButton'
import { SCREEN_WIDTH } from '@/constants/screen'
import { images } from '@/constants/image'
import { Colors } from '@/constants/Colors'
import { router } from 'expo-router'

const ResetPassword = () => {
  const [form, setForm] = React.useState({
    password: '',
    newPassword: '',
  })
  const handleResetPassword = ()=>{
    const {password, newPassword} = form;

  }
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={{ width: SCREEN_WIDTH*0.6, height: SCREEN_WIDTH*0.6 }} source={images.resetPass} resizeMode='contain'></Image>
      </View>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 28, fontWeight: '500' , color: Colors.light.text  , textAlign: 'center'}}>Create New Password</Text>
        <Text style={{fontSize: 14, fontWeight: '400', color: Colors.light.subText, textAlign: 'center'}}>Password must be at least 8 characters long and contain a mix of uppercase, lowercase, numbers, and special characters.</Text>
      </View>
      <View style={styles.inputContainer}>
        <InputField placeholder='Password' value={form.password} label='Password'  icon='lock' type='password' secureTextEntry={true} onChangeText={(value:string)=> setForm({...form, password:value})} />
        <InputField placeholder='New Password' value={form.newPassword} label='New Password'  icon='lock' type='password' secureTextEntry={true} onChangeText={(value:string)=> setForm({...form, newPassword:value})} />
        
      </View>
      <View style={styles.buttonContainer}>
      <CustomButton bgVariant='primary' onPress={()=>handleResetPassword()} isDisabled={!form.password || !form.newPassword}  title='Reset Password' ></CustomButton>
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
export default ResetPassword