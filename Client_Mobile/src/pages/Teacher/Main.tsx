import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import TeacherPageNavbar from '../../components/Navbar/TeacherPageNavbar';

type Props = StackScreenProps<RootStackParamList, 'TeacherMain'>;

const TeacherMain: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView className='bg-white text-dark'>
      <TeacherPageNavbar />
      <Button title="Go to Student Video" onPress={() => navigation.navigate('TeacherUpdateVideo')} />
    </SafeAreaView>
  );
}

export default TeacherMain