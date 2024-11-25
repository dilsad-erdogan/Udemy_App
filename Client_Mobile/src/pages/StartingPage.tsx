import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import StartPageNavbar from '../components/Navbar/StartPageNavbar';
import StartPageHero from '../components/Hero/StartPageHero';

type Props = StackScreenProps<RootStackParamList, 'StartingPage'>;

const StartingPage: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView className='bg-white text-dark flex-1'>
      <StartPageNavbar />
      <StartPageHero />
      <Button title="Go to Student Main" onPress={() => navigation.navigate('StudentMain')} />
    </SafeAreaView>
  );
};

export default StartingPage;