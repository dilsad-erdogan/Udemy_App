import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const AdminPageNavbar = () => {
  const navigation = useNavigation();
  
  const logout = () => {
    navigation.navigate('StartingPage');
  };

  return (
    <View className='flex flex-col p-8 mt-5 gap-4'>
      <TouchableOpacity onPress={() => navigation.navigate('AdminUser')}>
        <Text className='font-bold text-2xl'>UDEMY | DLSD</Text>
      </TouchableOpacity>

      {/* Nav Links */}
      <View className='flex-row gap-4'>
        <TouchableOpacity onPress={() => navigation.navigate('AdminUser')} className='flex items-center justify-center'>
          <Text className='font-bold text-l'>User</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AdminVideo')} className='flex items-center justify-center'>
          <Text className='font-bold text-l'>Video</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AdminLive')} className='flex items-center justify-center'>
          <Text className='font-bold text-l'>Live</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AdminPermission')} className='flex items-center justify-center'>
          <Text className='font-bold text-l'>Permission</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('AdminPurchase')} className='flex items-center justify-center'>
          <Text className='font-bold text-l'>Purchase</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={logout} className='inline-block bg-primary font-semibold rounded-lg px-2'>
          <Text className='text-white py-2 px-6'>LogOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default AdminPageNavbar