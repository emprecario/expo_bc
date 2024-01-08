import React from 'react';
import {Platform, StyleSheet} from 'react-native';

import {router} from 'expo-router';

import Icon from '../Icon/Icon';
import {Colors} from '@/styles';
import normalize from '@/utils/normalize';

const HeaderLeft = () => {
  return (
    <Icon
      onPress={router.back}
      type={'antdesign'}
      name="arrowleft"
      color={Colors.primary7}
      size={normalize(20)}
      containerStyle={{
        paddingHorizontal: Platform.OS == 'web' ? 16 : normalize(12),
        paddingVertical: Platform.OS == 'web' ? 16 : normalize(12, 'height'),
        marginLeft: Platform.OS == 'web' ? 0 : normalize(-16),
      }}
    />
  );
};

export default HeaderLeft;

const styles = StyleSheet.create({});
