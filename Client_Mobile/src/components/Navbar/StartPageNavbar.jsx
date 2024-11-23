import React, { useState } from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native'
import Login from '../userOperations/Login';
import Register from '../userOperations/Register';
import FaLogin from '../userOperations/FaLogin';

const StartPageNavbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState("login");

  const openRegister = () => {
    setIsLogin("register");
    setIsModalOpen(true);
  };

  const openLogin = () => {
    setIsLogin("login");
    setIsModalOpen(true);
  };

  const openFALogin = () => {
    setIsLogin("falogin");
    setIsModalOpen(true);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <View className='flex flex-row justify-between items-center p-16'>
      <Text className='font-bold text-2xl'>UDEMY | DLSD</Text>

      <TouchableOpacity className='inline-block bg-primary font-semibold rounded-lg duration-200' onPress={openModal}>
        <Text className='text-white py-2 px-6'>Login</Text>
      </TouchableOpacity>

      <Modal visible={isModalOpen} animationType='slide' transparent={true}>
        <View className='flex flex-1 justify-center items-center bg-gray-300 p-10'>
          { isLogin === "login" && <Login openFALogin={openFALogin} openRegister={openRegister} /> }
          { isLogin === "register" && <Register openLogin={openLogin} /> }
          { isLogin === "falogin" && <FaLogin openLogin={openLogin} openRegister={openRegister} /> }

          <TouchableOpacity className='mt-5 p-2 bg-primary rounded-lg' onPress={() => setIsModalOpen(false)}>
            <Text className='text-white text-2xl'>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default StartPageNavbar