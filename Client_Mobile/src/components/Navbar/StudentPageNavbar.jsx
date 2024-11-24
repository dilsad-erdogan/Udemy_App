import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

const StudentPageNavbar = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState('');

  const logout = () => {
    navigation.navigate('StartingPage');
  };

  const handleSearch = () => {console.log(search)}
  
  return (
    <View className='flex flex-col p-16 gap-4'>
      <TouchableOpacity onPress={() => navigation.navigate('StudentMain')}>
        <Text className='font-bold text-2xl'>UDEMY | DLSD</Text>
      </TouchableOpacity>

      {/* Search Section */}
      <View className='flex-row items-center flex-1 mx-2 min-h-[50px]'>
        <TextInput className='flex-1 border border-black p-2 rounded-lg' placeholder="Search Book" value={search} onChangeText={setSearch} />
        <TouchableOpacity onPress={handleSearch} className='absolute right-2'>
          <Icon name="search" size={20} color="red" />
        </TouchableOpacity>
      </View>

      {/* Nav Links */}
      <View className='flex-row gap-4'>
        <TouchableOpacity onPress={() => navigation.navigate('StudentVideo')} className='flex items-center justify-center'>
          <Text className='font-bold text-l'>My Videos</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('StudentChatbot')} className='flex items-center justify-center'>
          <Text className='font-bold text-l'>Search AI</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('StudentCart')} className='flex items-center justify-center'>
          <Icon name="shopping-cart" size={20} color="black" />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={logout} className='inline-block bg-primary font-semibold rounded-lg px-2'>
          <Text className='text-white py-2 px-6'>LogOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default StudentPageNavbar