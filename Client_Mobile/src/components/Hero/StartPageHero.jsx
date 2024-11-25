import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const StartPageHero = () => {
  return (
    <View className='flex-1 flex-col bg-light p-2'>
      {/* Brand Info */}
      <View className='flex-1 justify-center p-5'>
        <View className='items-center mb-5'>
          <Text className='text-3xl font-bold text-center mb-5'>
            Let’s learn to <Text className='text-primary'>knowledge</Text> in the field you want
          </Text>

          <TouchableOpacity className='mt-5 p-2 bg-primary rounded-lg'>
            <Text className='text-white text-xl'>Get Started</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Hero Image */}
      <View className='flex-1 justify-center items-center relative'>
        <Image source={require('../../../assets/hero.png')} className='w-[300px] h-[300px]' style={{ resizeMode: 'contain' }} />
      </View>
    </View>
  );
};

export default StartPageHero;