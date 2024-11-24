import React from 'react'
import { FaLocationArrow, FaMobileAlt, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Linking, Text, TouchableOpacity, View } from 'react-native'

const Footer = () => {
  const openLinkedInProfile = () => {
    const linkedInUrl = 'https://www.linkedin.com/in/dilşad-erdoğan-089547221/';
    Linking.openURL(linkedInUrl).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  const openGithubProfile = () => {
    const githubUrl = 'https://github.com/dilsad-erdogan';
    Linking.openURL(githubUrl).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  return (
    <View className='justify-between items-center'>
      <View className='items-center p-4'>
        <Text className='font-bold text-xl'>UDEMY | DLSD</Text>

        <Text className='text-l mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores alias cum</Text>

        <Text className='text-l mt-3'>Made with 💕 by The Dilşad Rukiye Erdoğan</Text>
      </View>
      
      <View className='flex-row gap-3 mb-3'>
        <TouchableOpacity className='inline-block bg-primary font-semibold rounded-lg duration-200' onPress={openLinkedInProfile}>
          <Text className='text-white py-2 px-6'>My Linkedin</Text>
        </TouchableOpacity>

        <TouchableOpacity className='inline-block bg-primary font-semibold rounded-lg duration-200' onPress={openGithubProfile}>
          <Text className='text-white py-2 px-6'>My Github</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Footer