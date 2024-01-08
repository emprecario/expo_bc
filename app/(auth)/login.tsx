import React from 'react';
import {StyleSheet} from 'react-native';

import {Image} from 'expo-image';
import {Stack, router} from 'expo-router';
import Head from 'expo-router/head';
import {StatusBar} from 'expo-status-bar';

import {Text, View} from 'react-native-ui-lib';

import {HeaderLeft} from '@/components';
import {EmailAndPasswordForm, SocialLogin} from '@/containers';
import {Colors} from '@/styles';
import normalize from '@/utils/normalize';

const Login = () => {
  return (
    <>
      <Head>
        <title>Buscoclases | Inicia sesión </title>
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
        <View flex paddingH-16 paddingV-8>
          <EmailAndPasswordForm title={'Iniciar sesión'} showRecoveryPassword />
          <View row center marginV-24>
            <View flex style={styles.divider} />
            <Text marginH-24 color={Colors.grey5}>
              o
            </Text>
            <View flex style={styles.divider} />
          </View>
          <View centerV>
            <SocialLogin />
          </View>
          <Text footnote color={Colors.grey5} center>
            ¿No tienes cuenta?
            <Text
              onPress={() => {
                router.replace('/sign-in');
              }}
              footnote
              color={Colors.primary5}>
              {` Crear cuenta`}
            </Text>
          </Text>
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

export default Login;

const styles = StyleSheet.create({
  image: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: normalize(150, 'height'),
    zIndex: -1,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.grey2,
  },
});
