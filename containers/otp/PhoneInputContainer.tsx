import React from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';

import {Button, Text, View} from 'react-native-ui-lib';
import { PhoneInput } from '@/components';
import {Colors} from '@/styles';
import normalize from '@/utils/normalize';

const PhoneInputContainer = ({
  focused,
}) => {
  const _onChangePhoneNumber = value => {}
  return (
    <KeyboardAvoidingView style={[styles.container]}>
      <View>
        <Text marginB-8 bold h1>
          ¡Ponte en marcha!
        </Text>
        <Text regular callout color={Colors.grey6}>
          Introduce tu número de teléfono y te enviaremos un código de
          confirmación
        </Text>
        <View><PhoneInput
                autoFocus={focused}
                onChangePhoneNumber={_onChangePhoneNumber}
              /></View>
      </View>
      <Button backgroundColor={Colors.primary6}>
        <Text bold callout color={'white'}>
          Continuar
        </Text>
      </Button>
    </KeyboardAvoidingView>
  );
};

export default PhoneInputContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: normalize(16),
    paddingTop: normalize(8, 'height'),
    paddingBottom: normalize(40, 'height'),
  },
});
