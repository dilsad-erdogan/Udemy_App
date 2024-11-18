import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = StackScreenProps<RootStackParamList, 'StartingPage'>;

const StartingPage: React.FC<Props> = ({ navigation }) => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-3xl font-bold'>Starting Page</Text>
      <Button title="Go to Student Main" onPress={() => navigation.navigate('StudentMain')} />
    </View>
  );
};

export default StartingPage;