import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const Login = ({ openFALogin, openRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) return;

    const userData = {
      email: email,
      password: password
    };

    console.log(userData)
  };

  return (
    <View className='w-full'>
      <Text className='text-2xl font-bold mb-4'>Login</Text>
      
      <View className='p-1'>
        {/* Email Input */}
        <Text className='text-xl mb-2'>Email</Text>
        <TextInput className="w-full px-3 py-2 border" placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />

        {/* Password Input */}
        <Text className='text-xl mb-2'>Password</Text>
        <TextInput className="w-full px-3 py-2 border" placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry />

        {/* Login Button */}
        <TouchableOpacity className='inline-block bg-primary font-semibold rounded-lg p-3 mt-5' onPress={handleLogin}>
          <Text className='text-white font-bold'>Login</Text>
        </TouchableOpacity>
      </View>
      
      <View className='flex flex-row justify-between p-5 gap-4'>
        <TouchableOpacity className='inline-block bg-primary font-semibold rounded-lg duration-200' onPress={openFALogin}>
          <Text className='text-white py-2 px-6'>2FA Login</Text>
        </TouchableOpacity>

        <TouchableOpacity className='inline-block bg-primary font-semibold rounded-lg duration-200' onPress={openRegister}>
          <Text className='text-white py-2 px-6'>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login