import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import AdminPageNavbar from '../../components/Navbar/AdminPageNavbar';

type Props = StackScreenProps<RootStackParamList, 'AdminUser'>;

const AdminUser: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView className='bg-white text-dark'>
      <AdminPageNavbar />
      <Button title="Go to Student Video" onPress={() => navigation.navigate('AdminVideo')} />
    </SafeAreaView>
  );
}

export default AdminUser