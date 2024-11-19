import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import StudentPageNavbar from '../../components/Navbar/StudentPageNavbar';

type Props = StackScreenProps<RootStackParamList, 'StudentCart'>;

const StudentCart: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView className='bg-white text-dark'>
      <StudentPageNavbar />
      <Button title="Go to Teacher Live" onPress={() => navigation.navigate('TeacherLive')} />
    </SafeAreaView>
  );
}

export default StudentCart