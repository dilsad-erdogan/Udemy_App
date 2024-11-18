import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

type Props = StackScreenProps<RootStackParamList, 'StudentMain'>;

const StudentMain: React.FC<Props> = ({ navigation }) => {
  return (
    <View className='flex-1 justify-center items-center'>
      <Text className='text-3xl font-bold'>Student Main Page</Text>
      <Button title="Go to Video" onPress={() => navigation.navigate('StudentVideo')} />
    </View>
  );
};

export default StudentMain;
