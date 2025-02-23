import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Link, router } from 'expo-router'
import { useSignUp } from '@clerk/clerk-expo'

const signup = () => {
    // const [countryCode, setCountryCode] = useState('+92')
    const [email, setEmail] = useState('')
    const { signUp } = useSignUp()

    const onSignUp = async () => {
        const fullEmail = email
        router.push({ pathname: '/verify/[email]', params: {email: fullEmail}})
        try {
            await signUp!.create({
                emailAddress: fullEmail,
            })
            await signUp!.prepareEmailAddressVerification({
                strategy: 'email_code'
            });
            router.push({ pathname: '/verify/[email]', params: { email: fullEmail } })
        } catch (error) {
            console.error("Error signing up: ", error)
        }
    }

    return (
        <View className='p-5 flex-1 bg-gray-100'>
            <Text className='text-4xl font-extrabold'>Lets get started!</Text>
            <Text className='mt-5 text-gray-500'>Enter your email, we will send you the code...</Text>
            <View className='flex-row mt-5 h-14 gap-x-2 rounded-md'>
                {/* <TextInput className='rounded-xl bg-gray-300 px-3 text-lg' placeholder='Country code' keyboardType='phone-pad' value={countryCode} editable={false} /> */}
                <TextInput className='rounded-xl bg-gray-300 pl-4 flex-1 text-lg' placeholder='Email' keyboardType='email-address' onChangeText={setEmail}/>
            </View>
            <View className='flex-row mt-5'>
                <Text className='text-lg text-gray-500'>Already have an Account? </Text>
                <Link href='/login' asChild replace>
                    <TouchableOpacity>
                        <Text className='text-xl text-blue-500'>Login</Text>
                    </TouchableOpacity>
                </Link>
            </View>

            <TouchableOpacity onPress={() => onSignUp()} className={`mt-auto w-full p-4 rounded-full ${email.length ? 'bg-gray-900 ' : 'bg-gray-300'}`} disabled={!email.length}>
                <Text className='text-white font-medium text-lg text-center'>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}

export default signup