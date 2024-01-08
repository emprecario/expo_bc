import React from 'react';
import {Platform, StyleSheet} from 'react-native';

import {Image} from 'expo-image';
import {Stack, router} from 'expo-router';
import Head from 'expo-router/head';
import {StatusBar} from 'expo-status-bar';

import {Text, View} from 'react-native-ui-lib';

import {HeaderLeft} from '@/components';
import {EmailAndPasswordForm, SocialLogin} from '@/containers';
import {Colors} from '@/styles';
import normalize from '@/utils/normalize';

const SignIn = () => {
  return (
    <>
      <Head>
        <title>Buscoclases | Registro </title>
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
          <EmailAndPasswordForm title={'Crear cuenta'} />
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
            ¿Ya tienes cuanta?
            <Text
              onPress={() => {
                router.replace('/login');
              }}
              footnote
              color={Colors.primary5}>
              {` Iniciar sesión`}
            </Text>
          </Text>
        </View>
        <View style={styles.terms}>
          <Text center caption1 color={Colors.grey5}>
            Al unirme declaro que he leído y acepto los{' '}
            <Text
              center
              bold
              caption1
              marginT-24
              color={Colors.grey5}
              style={{textDecorationLine: 'underline'}}>
              Términos y Condiciones de servicio
            </Text>{' '}
            y la{' '}
            <Text
              center
              bold
              caption1
              marginT-24
              color={Colors.grey5}
              style={{textDecorationLine: 'underline'}}>
              Política de privacidad
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

export default SignIn;

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
  terms: {
    position: 'absolute',
    bottom: Platform.select({
      web: 24,
      default: normalize(60, 'height'),
    }),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});
