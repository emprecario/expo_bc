import React from 'react';
import {StyleSheet} from 'react-native';

import {Image} from 'expo-image';
import {Stack, router} from 'expo-router';
import Head from 'expo-router/head';
import {StatusBar} from 'expo-status-bar';

import {Button, Text, View} from 'react-native-ui-lib';

import {HeaderLeft} from '@/components';
import {Input} from '@/components';
import {Colors} from '@/styles';
import normalize from '@/utils/normalize';

const RecoveryPassword = () => {
  const [securityEntry, setSecurityEntry] = React.useState(true);
  return (
    <>
      <Head>
        <title>Buscoclases | Recuperar contraseña </title>
        <meta name="description" content="Buscoclases app" />
      </Head>
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          headerShown: true,
          title: '',
          contentStyle: {
            backgroundColor: 'white',
          },
          headerLeft: () => <HeaderLeft />,
          headerShadowVisible: false,
        }}
      />
      <View flex useSafeArea>
        <View paddingH-16>
          <Text marginB-32 large bold>
            {'Recuperar contraseña'}
          </Text>
          <Input
            placeholder={'Introduce un email'}
            leftIcon={{
              name: 'mail-outline',
              color: Colors.grey3,
              type: 'ionicon',
            }}
          />
          <Text marginB-24 caption1 bold color={Colors.grey5}>
            Enviaremos un correo con una nueva contraseña provisional
          </Text>
          <Button backgroundColor={Colors.primary6}>
            {
              <Text color={Colors.white} bold callout>
                Enviar
              </Text>
            }
          </Button>
        </View>
        <Image
          contentFit="contain"
          source={require('@/assets/images/ondas.png')}
          style={styles.image}
        />
      </View>
    </>
  );
};

export default RecoveryPassword;

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: normalize(150, 'height'),
    zIndex: -1,
  },
});
