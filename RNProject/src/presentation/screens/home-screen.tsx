import React from 'react';
import {Text, View} from 'native-base';
import {Product} from '../components';

interface HomeProps {
  navigation: any;
}

const HomeScreen = (props: HomeProps) => {
  return (
    <View padding={'10px'}>
      <Product/>
    </View>
  );
};

export default HomeScreen;
