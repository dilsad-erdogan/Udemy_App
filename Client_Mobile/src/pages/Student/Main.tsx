import React from 'react';
import { Button, SafeAreaView, ScrollView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import StudentPageNavbar from '../../components/Navbar/StudentPageNavbar';
import SliderHero from '../../components/Hero/SliderHero';
import Video from '../../components/Video/Video';

type Props = StackScreenProps<RootStackParamList, 'StudentMain'>;

const StudentMain: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView className='bg-white text-dark flex-1'>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <StudentPageNavbar />
        <SliderHero />
        <Video />
        <Button title="Go to Student Video" onPress={() => navigation.navigate('StudentVideo')} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default StudentMain;
