import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import StudentPageNavbar from '../../components/Navbar/StudentPageNavbar';

type Props = StackScreenProps<RootStackParamList, 'StudentVideo'>;

const StudentVideo: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView className='bg-white text-dark'>
      <StudentPageNavbar />
      <Button title="Go to Student WatchLive" onPress={() => navigation.navigate('StudentWatchLive')} />
    </SafeAreaView>
  );
}

export default StudentVideo