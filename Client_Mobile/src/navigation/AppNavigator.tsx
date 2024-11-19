import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Sayfalarınızı içe aktarın
import StartingPage from '../pages/StartingPage';

import StudentCart from '../pages/Student/Cart';
import StudentChatbot from '../pages/Student/Chatbot';
import StudentCheckout from '../pages/Student/Checkout';
import StudentFilterData from '../pages/Student/FilterData';
import StudentMain from '../pages/Student/Main';
import StudentVideo from '../pages/Student/Video';
import StudentWatchLive from '../pages/Student/WatchLive';
import StudentWatchVideo from '../pages/Student/WatchVideo';

import TeacherLive from '../pages/Teacher/Live';
import TeacherMain from '../pages/Teacher/Main';
import TeacherUpdateVideo from '../pages/Teacher/UpdateVideo';
import TeacherVideo from '../pages/Teacher/Video';

import AdminLive from '../pages/Admin/Lives';
import AdminPermission from '../pages/Admin/Permissions';
import AdminPurchase from '../pages/Admin/Purchases';
import AdminUser from '../pages/Admin/Users';
import AdminVideo from '../pages/Admin/Videos';

import Footer from '../components/Footer';

// Stack navigasyonu türü
export type RootStackParamList = {
  StartingPage: undefined;
  StudentCart: undefined;
  StudentChatbot: undefined;
  StudentCheckout: undefined;
  StudentFilterData: undefined;
  StudentMain: undefined;
  StudentVideo: undefined;
  StudentWatchLive: undefined;
  StudentWatchVideo: undefined;
  TeacherLive: undefined;
  TeacherMain: undefined;
  TeacherUpdateVideo: undefined;
  TeacherVideo: undefined;
  AdminLive: undefined;
  AdminPermission: undefined;
  AdminPurchase: undefined;
  AdminUser: undefined;
  AdminVideo: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StartingPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartingPage" component={StartingPage} />
        <Stack.Screen name="StudentCart" component={StudentCart} />
        <Stack.Screen name="StudentChatbot" component={StudentChatbot} />
        <Stack.Screen name="StudentCheckout" component={StudentCheckout} />
        <Stack.Screen name="StudentFilterData" component={StudentFilterData} />
        <Stack.Screen name="StudentMain" component={StudentMain} />
        <Stack.Screen name="StudentVideo" component={StudentVideo} />
        <Stack.Screen name="StudentWatchLive" component={StudentWatchLive} />
        <Stack.Screen name="StudentWatchVideo" component={StudentWatchVideo} />
        <Stack.Screen name="TeacherLive" component={TeacherLive} />
        <Stack.Screen name="TeacherMain" component={TeacherMain} />
        <Stack.Screen name="TeacherUpdateVideo" component={TeacherUpdateVideo} />
        <Stack.Screen name="TeacherVideo" component={TeacherVideo} />
        <Stack.Screen name="AdminLive" component={AdminLive} />
        <Stack.Screen name="AdminPermission" component={AdminPermission} />
        <Stack.Screen name="AdminPurchase" component={AdminPurchase} />
        <Stack.Screen name="AdminUser" component={AdminUser} />
        <Stack.Screen name="AdminVideo" component={AdminVideo} />
      </Stack.Navigator>

      <Footer />
    </NavigationContainer>
  );
};

export default AppNavigator;
