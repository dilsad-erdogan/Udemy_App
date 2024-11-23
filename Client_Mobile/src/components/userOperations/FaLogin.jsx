import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const FaLogin = ({ openLogin, openRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

  const sendCode = () => {
    if(!email || !password) return;

    const loginUser = {
      email: email,
      password: password
    };

    console.log(loginUser);
  };

  const handleLogin = () => {
    if(!email || !code) return;

    const verifyUser = {
      email: email,
      twoFACode: code
    };

    console.log(verifyUser);
  };

  return (
    <View className='w-full'>
      <Text className='text-2xl font-bold mb-4'>FA Login</Text>

      <View className='p-1'>
        {/* Email Input */}
        <Text className='text-xl mb-2'>Email</Text>
        <TextInput className="w-full px-3 py-2 border" placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />

        {/* Password Input */}
        <Text className='text-xl mb-2'>Password</Text>
        <TextInput className="w-full px-3 py-2 border" placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry />

        {/* Send Code Button */}
        <TouchableOpacity className='inline-block bg-primary font-semibold rounded-lg p-3 mt-5' onPress={sendCode}>
          <Text className='text-white font-bold'>Send Code</Text>
        </TouchableOpacity>

        {/* Code Input */}
        <Text className='text-xl mb-2 mt-8'>Code</Text>
        <TextInput className="w-full px-3 py-2 border" placeholder="Enter your code" value={code} onChangeText={setCode} autoCapitalize="none" />

        {/* Login Button */}
        <TouchableOpacity className='inline-block bg-primary font-semibold rounded-lg p-3 mt-5' onPress={handleLogin}>
          <Text className='text-white font-bold'>Login</Text>
        </TouchableOpacity>
      </View>

      <View className='flex flex-row justify-between p-5 gap-4'>
        <TouchableOpacity className='inline-block bg-primary font-semibold rounded-lg duration-200' onPress={openLogin}>
          <Text className='text-white py-2 px-6'>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity className='inline-block bg-primary font-semibold rounded-lg duration-200' onPress={openRegister}>
          <Text className='text-white py-2 px-6'>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FaLogin