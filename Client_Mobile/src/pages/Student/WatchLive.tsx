import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import StudentPageNavbar from '../../components/Navbar/StudentPageNavbar';

type Props = StackScreenProps<RootStackParamList, 'StudentWatchLive'>;

const StudentWatchLive: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView className='bg-white text-dark'>
      <StudentPageNavbar />
      <Button title="Go to Student Filter" onPress={() => navigation.navigate('StudentFilterData')} />
    </SafeAreaView>
  );
}

export default StudentWatchLive