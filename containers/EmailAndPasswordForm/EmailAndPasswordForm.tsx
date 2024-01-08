import React from 'react';

import {router} from 'expo-router';

import {Button, Text, TouchableOpacity, View} from 'react-native-ui-lib';

import {Input} from '@/components';
import {Colors} from '@/styles';

interface EmailAndPasswordFormProps {
  title?: string;
  showRecoveryPassword?: boolean;
}

const EmailAndPasswordForm: React.FC<EmailAndPasswordFormProps> = ({
  title = 'Crear cuenta',
  showRecoveryPassword = false,
}) => {
  const [securityEntry, setSecurityEntry] = React.useState(true);
  return (
    <>
      <View>
        <Text marginB-32 large bold>
          {title}
        </Text>
        <Input
          placeholder={'Introduce un email'}
          leftIcon={{
            name: 'mail-outline',
            color: Colors.grey3,
            type: 'ionicon',
          }}
          autoComplete="email"
          autoCorrect={false}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input
          placeholder={'Introduce tu contraseña'}
          autoCapitalize="none"
          leftIcon={{
            name: 'lock-closed-outline',
            color: Colors.grey3,
            type: 'ionicon',
          }}
          rightIcon={{
            type: 'antdesign',
            name: securityEntry ? 'eyeo' : 'eye',
            color: Colors.primary7,
          }}
          autoCorrect={false}
          // validationMessage="La contraseña debe tener al menos 8 caracteres"
        />
      </View>
      {showRecoveryPassword && (
        <TouchableOpacity marginB-24>
          <Text
            onPress={() => {
              router.replace('/recovery-pass');
            }}
            footnote
            color={Colors.primary5}>
            Recordar contraseña
          </Text>
        </TouchableOpacity>
      )}
      <Button backgroundColor={Colors.primary6}>
        {
          <Text color={Colors.white} bold callout>
            Entrar
          </Text>
        }
      </Button>
    </>
  );
};

export default EmailAndPasswordForm;
