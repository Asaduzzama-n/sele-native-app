import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants/screen'
import { Colors } from '@/constants/Colors'
import { RadioGroup } from '@/components/ui/customRadioButton'
import InputField from '@/components/ui/customInputField'
import CustomButton from '@/components/ui/customButton'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
    userRole: 'user'
  })
  const [userRole, setUserRole] = React.useState('user')

  const handleLogin = (email:string, password:string)=>{
  console.log("❤❤", email, password)
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={{ width: SCREEN_WIDTH*0.8, height: SCREEN_WIDTH }} resizeMode='contain' source={require('../../assets/images/splash.png')}></Image>
      </View>
      <View style={styles.titleContainer}>
        <Text style={{fontSize: 44, fontWeight: '500' , color: Colors.light.text  , textAlign: 'center'}}>Welcome!</Text>
        <Text style={{fontSize: 22, fontWeight: '400', color: Colors.light.subText, textAlign: 'center'}}>Sign in to continue</Text>
      </View>
      <View style={styles.inputContainer}>
        {/* <View>
          <RadioGroup options={['User', 'Agency']} selectedOption={userRole} setUserRole={setUserRole} style={{flexDirection: 'row' , justifyContent: 'space-between', alignItems: 'center' , gap: 10,width:SCREEN_WIDTH * 0.5}}/>
        </View> */}
        <View>
          <InputField placeholder='Email' value={form.email} label='Email'  icon='mail' type='email' secureTextEntry={false} onChangeText={(value:string)=> setForm({...form, email:value})} />
          <InputField placeholder='Password' value={form.password} label='Password'  icon='lock' type='password' secureTextEntry={true} onChangeText={(value:string)=> setForm({...form, password:value})} />
          <Link style={{position:'absolute', bottom:-20, right:0, textDecorationLine: 'underline', color:Colors.light.primary, fontWeight:500, fontSize:16}} href={'/(auth)/sign-in'}>Forgot Password?</Link>
        </View>
        <View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton bgVariant='primary' onPress={()=>handleLogin(form.email,form.password)}  title='Sign In' ></CustomButton>
        <Text style={{fontSize:16, color:Colors.light.subText}}>Don't have an account? <Link style={{fontSize:16, color:Colors.light.primary, fontWeight:500, textDecorationLine:'underline'}} href={'/(auth)/sign-up'}>Sign up </Link></Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    backgroundColor: '#fff'
  },
  imageContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT*0.30,
    paddingVertical: 20
  },
  titleContainer: {
    flex:1,
    alignItems: 'center',
    height: SCREEN_HEIGHT*0.10,
    
  },
  inputContainer: {
    paddingVertical:40,
    flex:1,
    alignItems: 'center',
    height: SCREEN_HEIGHT*0.30,
    rowGap:20,

  },
  buttonContainer: {
    flex:1,
    rowGap:20,
    alignItems: 'center',
    height: SCREEN_HEIGHT*0.30,

  }
})

export default SignIn