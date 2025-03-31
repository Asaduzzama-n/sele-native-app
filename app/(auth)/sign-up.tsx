import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/constants/screen'
import { Colors } from '@/constants/Colors'
import { RadioGroup } from '@/components/ui/customRadioButton'
import InputField from '@/components/ui/customInputField'
import CustomButton from '@/components/ui/customButton'
import { Link } from 'expo-router'
import CustomCheckbox from '@/components/ui/customCheckbox'

const SignUp = () => {
  const [form, setForm] = React.useState({
    name:'',
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
  })
  const [userRole, setUserRole] = React.useState('User')
  const [isChecked, setIsChecked] = React.useState(false);
  const handleCreateAccount = ()=>{
    const {name, email, password, confirmPassword, location} = form;

    if(!name || !email || !location || !password || !confirmPassword){
      alert('All fields are required');
      return;
    }
    if(password.toLowerCase().trim() !== confirmPassword.toLowerCase().trim()){
      alert('Passwords do not match');
      return;
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={{ width: SCREEN_WIDTH*0.8, height: SCREEN_WIDTH }} resizeMode='contain' source={require('../../assets/images/splash.png')}></Image>
      </View>
      <View style={styles.titleContainer}>
        {/* <Text style={{fontSize: 44, fontWeight: '500' , color: Colors.light.text  , textAlign: 'center'}}>Welcome!</Text> */}
        <Text style={{fontSize: 30, fontWeight: '400', color: Colors.light.text, textAlign: 'center'}}>Create a New Account</Text>
      </View>
      <View style={styles.inputContainer}>

        <View style={{ rowGap:10}}>

          <RadioGroup options={['User', 'Agency']} selectedOption={userRole} setUserRole={setUserRole} style={{flexDirection: 'row' , justifyContent: 'space-between', alignItems: 'center' , gap: 20,width:SCREEN_WIDTH * 0.8, alignSelf:'center'}}/>

          <InputField placeholder='Full Name' value={form.name} label='Full Name'  icon='user' type='text' secureTextEntry={false} onChangeText={(value:string)=> setForm({...form, name:value})} />
          <InputField placeholder='Email' value={form.email} label='Email'  icon='mail' type='email' secureTextEntry={false} onChangeText={(value:string)=> setForm({...form, email:value})} />
          <InputField placeholder='Location' value={form.location} label='Location'  icon='map' type='text' secureTextEntry={false} onChangeText={(value:string)=> setForm({...form, location:value})} />
          <InputField placeholder='Password' value={form.password} label='Password'  icon='lock' type='password' secureTextEntry={true} onChangeText={(value:string)=> setForm({...form, password:value})} />
          <InputField placeholder='Confirm Password' value={form.confirmPassword} label='Confirm Password'  icon='lock' type='password' secureTextEntry={true} onChangeText={(value:string)=> setForm({...form, confirmPassword:value})} />
          <View >
            <CustomCheckbox checked={isChecked} onPress={() => setIsChecked(!isChecked)} textStyle={{ marginLeft: 10, color: Colors.light.text }} />
          </View>
        </View>
        <View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton bgVariant='primary' onPress={()=>handleCreateAccount()} isDisabled={!isChecked}  title='Sign In' ></CustomButton>
        <Text style={{fontSize:16, color:Colors.light.subText}}>Already have an account? <Link style={{fontSize:16, color:Colors.light.primary, fontWeight:500, textDecorationLine:'underline'}} href={'/(auth)/sign-in'}>Sign in </Link></Text>
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
    // paddingVertical: 20
  },
  titleContainer: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    
  },
  inputContainer: {
    paddingVertical:20,
    flex:1,
    alignItems: 'center',

    alignSelf:'center',
  },
  buttonContainer: {
    flex:1,
    // marginTop:40,
    rowGap:20,
    justifyContent:'center',
    alignItems: 'center',
    height: SCREEN_HEIGHT*0.20
  }
})

export default SignUp