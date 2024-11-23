import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const Register = ({ openLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if(!name || !email || !password) return;

    const newUser = {
      role: "67227987d6d3c54d653c3826",
      name: name,
      email: email,
      password: password
    };

    console.log(newUser);
  };

  return (
    <View className='w-full'>
      <Text className='text-2xl font-bold mb-4'>Register</Text>

      <View className='p-1'>
        {/* Name Input */}
        <Text className='text-xl mb-2'>Name</Text>
        <TextInput className="w-full px-3 py-2 border" placeholder="Enter your email" value={name} onChangeText={setName} autoCapitalize="none" />

        {/* Email Input */}
        <Text className='text-xl mb-2'>Email</Text>
        <TextInput className="w-full px-3 py-2 border" placeholder="Enter your email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />

        {/* Password Input */}
        <Text className='text-xl mb-2'>Password</Text>
        <TextInput className="w-full px-3 py-2 border" placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry />

        {/* Register Button */}
        <TouchableOpacity className='inline-block bg-primary font-semibold rounded-lg p-3 mt-5' onPress={handleRegister}>
          <Text className='text-white font-bold'>Register</Text>
        </TouchableOpacity>
      </View>
      
      <View className='flex flex-row justify-center p-5'>
        <TouchableOpacity className='inline-block bg-primary font-semibold rounded-lg duration-200' onPress={openLogin}>
          <Text className='text-white py-2 px-6'>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register