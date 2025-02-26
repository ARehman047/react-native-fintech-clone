import { View, Text, TouchableOpacity, Platform, StyleSheet, Alert } from 'react-native'
import React, { Fragment, useEffect, useState } from 'react'
import { Link, useLocalSearchParams } from 'expo-router'
import { isClerkAPIResponseError, useAuth, useSignIn, useSignUp } from '@clerk/clerk-expo'
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field'

const styles = StyleSheet.create({
  codeFieldRoot: {
    marginVertical: 20,
    marginLeft: 1,
    marginRight: 0,
    width: '100%',
    gap: 5,
  },
  cellRoot: {
    width: 45,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    borderRadius: 8,
  },
  cellText: {
    color: '#000',
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    paddingBottom: 8,
  },
  separator: {
    height: 2,
    width: 10,
    backgroundColor: '#D3D3D3',
    alignSelf: 'center',
  },
  cell: {
    width: 50,
    height: 55,
    lineHeight: 50,
    fontSize: 30,
    borderWidth: 2,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    borderColor: '#D3D3D3',
    textAlign: 'center',
  },
});

const CELL_COUNT = 6

const phone = () => {
  const { email, signin } = useLocalSearchParams<{ email: string; signin: string }>()
  const [code, setCode] = useState('')
  const { signIn } = useSignIn()
  const { signUp, setActive } = useSignUp()

  const ref = useBlurOnFulfill({ value: code, cellCount: CELL_COUNT })
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value: code, setValue: setCode })

  useEffect(() => {
    console.log(code);
    if (code.length === 6) {
      if (signin === 'true') {
        verifySignIn()
      } else {
        verifyCode()
      }
    }
  }, [code])

  const verifyCode = async () => {
    try {
      await signUp!.attemptEmailAddressVerification({
        code
      })
      await setActive!({ session: signUp!.createdSessionId })
    } catch (err) {
      console.log('error', JSON.stringify(err, null, 2))
      if (isClerkAPIResponseError(err)) {
        if (err.errors[0].code === 'form_identifier_not_found') {
          Alert.alert('Error', err.errors[0].message)
        }
      }
    }
  }
  const verifySignIn = async () => {
    try {
      await signIn!.attemptFirstFactor({
        strategy: 'email_code',
        code
      })
      await setActive!({ session: signIn!.createdSessionId })
    } catch (err) {
      console.log('err', JSON.stringify(err, null, 2))
      if (isClerkAPIResponseError(err)) {
        if (err.errors[0].code === 'form_identifier_not_found') {
          Alert.alert('Error', err.errors[0].message)
        }
      }
    }
  }


  return (

    <View className='p-5'>
      <Text className='text-4xl font-extrabold'>6-Digit Code</Text>
      <Text className='mt-5 text-gray-500'>Code send to {email} unless you already have an account</Text>

      <CodeField
        ref={ref}
        {...props}
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
          testID="my-code-input"
        renderCell={({ index, symbol, isFocused }) => (
          <Fragment key={index}>
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
            {index === 2 ? <View key={`separator-${index}`} style={styles.separator} /> : null}
          </Fragment>
        )}
      />

      <View className='flex-row mt-5'>
        <Text className='text-lg text-gray-500'>Already have an Account? </Text>
        <Link href='/login' asChild replace>
          <TouchableOpacity>
            <Text className='text-xl text-blue-500'>Login</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}



export default phone