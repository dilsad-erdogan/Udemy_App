import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import TeacherPageNavbar from '../../components/Navbar/TeacherPageNavbar';

type Props = StackScreenProps<RootStackParamList, 'TeacherLive'>;

const TeacherLive: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView className='bg-white text-dark'>
      <TeacherPageNavbar />
      <Button title="Go to Student Video" onPress={() => navigation.navigate('TeacherMain')} />
    </SafeAreaView>
  );
}

export default TeacherLive