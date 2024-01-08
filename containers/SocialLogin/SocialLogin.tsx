import React from 'react';
import {StyleSheet} from 'react-native';

import {router} from 'expo-router';

import {Button} from 'react-native-ui-lib';

import {Colors} from '@/styles';
import normalize from '@/utils/normalize';

const SocialLogin = () => {
  return (
    <>
      <Button
        marginB-16
        style={styles.button}
        label={'Continuar con teléfono'}
        backgroundColor={Colors.white}
        iconSource={require('@/assets/images/otp.png')}
        iconStyle={styles.iconStyle}
        onPress={() => {
          router.push('otp');
        }}
      />
      <Button
        marginB-16
        style={styles.button}
        label={'Continuar con Google'}
        iconSource={require('@/assets/images/google.png')}
        backgroundColor={Colors.white}
        iconStyle={[styles.iconStyle, {tintColor: undefined}]}
      />
      <Button
        marginB-24
        style={styles.button}
        label={'Continuar con Apple'}
        backgroundColor={Colors.white}
        iconStyle={[styles.iconStyle]}
        iconSource={require('@/assets/images/apple.png')}
      />
    </>
  );
};

export default SocialLogin;
const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: Colors.grey3,
    backgroundColor: 'transparent',
    height: normalize(48, 'height'),
  },
  iconStyle: {
    width: normalize(24),
    height: normalize(24, 'height'),
    tintColor: Colors.black,
    marginRight: normalize(16),
  },
});
