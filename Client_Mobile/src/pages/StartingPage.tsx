import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import StartPageNavbar from '../components/Navbar/StartPageNavbar';

type Props = StackScreenProps<RootStackParamList, 'StartingPage'>;

const StartingPage: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView className='bg-white text-dark'>
      <StartPageNavbar />
      <Button title="Go to Student Main" onPress={() => navigation.navigate('StudentMain')} />
    </SafeAreaView>
  );
};

export default StartingPage;