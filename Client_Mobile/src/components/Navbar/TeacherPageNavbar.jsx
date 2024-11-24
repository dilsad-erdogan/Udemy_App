import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const TeacherPageNavbar = () => {
  const navigation = useNavigation();
  
  const logout = () => {
    navigation.navigate('StartingPage');
  };

  return (
    <View className='flex flex-col p-16 gap-4'>
      <TouchableOpacity onPress={() => navigation.navigate('TeacherMain')}>
        <Text className='font-bold text-2xl'>UDEMY | DLSD</Text>
      </TouchableOpacity>

      {/* Nav Links */}
      <View className='flex-row gap-4'>
        <TouchableOpacity onPress={() => navigation.navigate('TeacherVideo')} className='flex items-center justify-center'>
          <Text className='font-bold text-l'>Add Video</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('TeacherLive')} className='flex items-center justify-center'>
          <Text className='font-bold text-l'>Add Live</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={logout} className='inline-block bg-primary font-semibold rounded-lg px-2'>
          <Text className='text-white py-2 px-6'>LogOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TeacherPageNavbar