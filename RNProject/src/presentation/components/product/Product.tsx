import React from 'react';
import {View, VStack, Image, Text, Center, ScrollView} from 'native-base';

const Product: React.FC = () => {
  return (
    <ScrollView>
      <Center>
        <View
          borderColor={'#5f5f5f'}
          borderWidth={0.6}
          borderRadius={'3px'}
          width={'80%'}>
          <VStack space={2}>
            <Image
              source={require('../../../assets/principal-house1.png')}
              size={'250px'}
              width={'100%'}
              borderTopRadius={'3px'}
            />
            <View padding={'10px'}>
              <VStack space={8}>
                <Text fontSize={'20px'} bold color={'#504f4f'}>
                  Brick home in Canada
                </Text>
                <Text color={'#ff0000'} fontSize={'15px'}>
                  U$ 200000,00
                </Text>
                <Text>550 Bourke Street MELBOURNE VIC 3000</Text>
              </VStack>
            </View>
            <View padding={'10px'} borderColor={'#5f5f5f'}>
                <Text>Family Home</Text>
            </View>
          </VStack>
        </View>
      </Center>
    </ScrollView>
  );
};

export default Product;
