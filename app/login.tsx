import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo';
import { router } from 'expo-router';

enum SignInType { Phone, Email, Google, Apple }

const login = () => {
  // const [countryCode, setCountryCode] = useState('+92')
  const [email, setEmail] = useState('')

  const { signIn, setActive } = useSignIn()

  const onSignIn = async (type: SignInType) => {
    if (type === SignInType.Phone) {
      try {
        const fullEmail = email

        const signInAttempt = await signIn!.create({
          identifier: fullEmail,
        })

        if (signInAttempt.status === 'complete') {

          await setActive!({ session: signInAttempt.createdSessionId })
        } else {

          console.error(JSON.stringify(signInAttempt, null, 2))
        }

        router.push({pathname: '/verify/[email]', params: {email: fullEmail, signin: 'true'}})

      } catch (err) {
        console.log('error', JSON.stringify(err, null, 2))
        if (isClerkAPIResponseError(err)) {
          if(err.errors[0].code === 'form_identifier_not_found') {
            Alert.alert('Error', err.errors[0].message)
          }
        }
      }
    }
  }

  return (
    <View className='p-5 flex-1 bg-gray-100'>
      <Text className='text-4xl font-extrabold'>Welcome Back</Text>
      <Text className='mt-5 text-gray-500'>Enter the phone number associated with your account</Text>
      <View className='flex-row mt-5 h-14 gap-x-2 rounded-md'>
        {/* <TextInput className='rounded-xl bg-gray-300 px-3 text-lg' placeholder='Country code' keyboardType='phone-pad' value={countryCode} editable={false} /> */}
        <TextInput className='rounded-xl bg-gray-300 pl-4 flex-1 text-lg' placeholder='Mobile Number' keyboardType='phone-pad' onChangeText={setEmail} />
      </View>

      <TouchableOpacity onPress={() => onSignIn(SignInType.Phone)} className={`mt-10 w-full p-4 rounded-full ${email.length ? 'bg-gray-800 ' : 'bg-gray-300'}`} disabled={!email.length}>
        <Text className='text-white font-medium text-lg text-center'>Continue</Text>
      </TouchableOpacity>

      {/* The or component */}
      <View className='flex-row gap-x-2 my-7 items-center'>
        <View className='flex-1 bg-gray-400 h-[1px]'></View>
        <Text className='text-gray-400 text-xl'>or</Text>
        <View className='flex-1 bg-gray-400 h-[1px]'></View>
      </View>

      <View className='gap-y-5'>

        <TouchableOpacity onPress={() => onSignIn(SignInType.Email)} className='bg-white w-full rounded-full py-5 flex-row justify-center items-center gap-x-2'>
          <Icon name="mail" size={25}></Icon>
          <Text className='font-bold text-lg'>Continue With Email</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onSignIn(SignInType.Google)} className='bg-white w-full rounded-full py-5 flex-row justify-center items-center gap-x-2'>
          <Icon name="logo-google" size={25}></Icon>
          <Text className='font-bold text-lg'>Continue With Google</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => onSignIn(SignInType.Apple)} className='bg-white w-full rounded-full py-5 flex-row justify-center items-center gap-x-2'>
          <Icon name="logo-apple" size={25}></Icon>
          <Text className='font-bold text-lg'>Continue With Apple</Text>
        </TouchableOpacity>

      </View>

    </View>


  )
}

export default login