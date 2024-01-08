import React, {Ref, forwardRef} from 'react';
import {Platform, StyleSheet, TextInputProps, TextStyle} from 'react-native';

import {
  Text,
  TextField,
  TextFieldRef,
  TouchableOpacity,
  View,
} from 'react-native-ui-lib';

import Icon from '../Icon/Icon';
import {Colors, Fonts} from '@/styles';
import normalize from '@/utils/normalize';

interface InputProps extends TextInputProps {
  style?: any;
  rightIcon?: any;
  enableErrors?: boolean;
  floatOnFocus?: boolean;
  validationMessage?: string;
  containerStyle?: any;
  onPress?: () => void;
  label?: string;
  labelStyle?: TextStyle | TextStyle[];
  floatingPlaceholder?: boolean;
  readonly?: boolean;
  leftIcon?: any;
}

const Input = (
  props: InputProps,
  ref: Ref<TextFieldRef> | null | undefined,
) => {
  const {
    style,
    rightIcon,
    leftIcon,
    enableErrors = true,
    floatOnFocus = true,
    validationMessage = '',
    containerStyle,
    onPress,
    readonly,
    ...rest
  } = props;
  const ContainerView = onPress && !readonly ? TouchableOpacity : View;
  return (
    <>
      <View marginB-16>
        <ContainerView
          onPress={onPress}
          style={[containerStyle && containerStyle]}>
          <TextField
            ref={ref}
            style={[styles.inputStyle, style && style]}
            placeholderTextColor={Colors.grey5}
            containerStyle={[
              styles.containerStyle,
              containerStyle && containerStyle,
              validationMessage && {backgroundColor: 'rgba(255, 243, 242, 1)'},
              leftIcon && {paddingLeft: 30},
            ]}
            enableErrors={Platform.OS == 'web' ? false : enableErrors}
            {...(floatOnFocus && Platform.OS !== 'web'
              ? {
                  floatOnFocus,
                  floatingPlaceholder: true,
                  floatingPlaceholderColor: Colors.grey5,
                  floatingPlaceholderStyle: {
                    ...Fonts.regular,
                    ...Fonts.callout,
                    paddingHorizontal: 16,
                  },
                }
              : null)}
            {...rest}
          />
          {rightIcon ? (
            <View style={styles.iconStyle}>
              <Icon
                size={24}
                name={'chevron-forward'}
                color={Colors.grey6}
                type={'ionicon'}
                {...rightIcon}
              />
            </View>
          ) : null}
          {leftIcon ? (
            <View style={styles.leftIconStyle}>
              <Icon
                size={24}
                name={'chevron-forward'}
                color={Colors.grey6}
                type={'ionicon'}
                {...leftIcon}
              />
            </View>
          ) : null}
        </ContainerView>
        {validationMessage ? (
          <View row marginT-12 centerV>
            <Icon name={'alert-circle'} color={Colors.error} size={16} />
            <Text marginL-4 caption1 color={Colors.error}>
              {validationMessage}
            </Text>
          </View>
        ) : null}
      </View>
    </>
  );
};

export default forwardRef(Input);

const styles = StyleSheet.create({
  inputStyle: {
    ...Fonts.regular,
    ...Fonts.callout,

    paddingHorizontal: 16,
  },
  iconStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    paddingRight: 10,
  },
  leftIconStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  containerStyle: {
    backgroundColor: Colors.grey1,
    height: normalize(50, 'height'),
    borderRadius: 8,
    ...Platform.select({
      web: {
        justifyContent: 'center',
      },
      default: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
    }),
  },
});
