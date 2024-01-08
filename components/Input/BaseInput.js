import {forwardRef, useImperativeHandle, useRef} from 'react';
import {StyleSheet, TextInput} from 'react-native';

import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Text, View} from 'react-native-ui-lib';

import Icon from '../Icon/Icon';
import renderNode from '../helpers/renderNode';
import {Colors, Fonts} from '@/styles';

const renderText = (content, defaultProps, style) =>
  renderNode(Text, content, {
    ...defaultProps,
    style: [style, defaultProps && defaultProps.style],
  });
const BaseInput = (props, ref) => {
  const {
    containerStyle,
    inputContainerStyle,
    leftIcon,
    leftIconContainerStyle,
    rightIcon,
    rightIconContainerStyle,
    inputComponent: InputComponent = TextInput,
    inputStyle,
    errorProps,
    errorStyle,
    validationMessage,
    label,
    labelStyle,
    labelProps,
    theme,
    ...attributes
  } = props;
  const shakeAnimationValue = useSharedValue(0);
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef?.current?.focus();
    },
    blur: () => {
      inputRef?.current?.blur();
    },
    clear: () => {
      inputRef?.current?.clear();
    },
    isFocused: () => {
      inputRef?.current?.isFocused();
    },
    setNativeProps: nativeProps => {
      inputRef?.current?.setNativeProps(nativeProps);
    },
    shake: () => {
      shakeAnimationValue.value = withTiming(3, {
        duration: 375,
        easing: Easing.bounce,
      });
    },
  }));
  const uas = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            shakeAnimationValue.value,
            [0, 0.5, 1, 1.5, 2, 2.5, 3],
            [0, -15, 0, 15, 0, -15, 0],
          ),
        },
      ],
    };
  });
  return (
    <View style={[styles.container, containerStyle]}>
      {renderText(label, {style: labelStyle, ...labelProps}, styles.label)}
      <Animated.View style={[styles.inputContainer, inputContainerStyle, uas]}>
        {leftIcon && (
          <View style={[styles.iconContainer, leftIconContainerStyle]}>
            {renderNode(Icon, leftIcon)}
          </View>
        )}
        <InputComponent
          underlineColorAndroid="transparent"
          {...attributes}
          ref={inputRef}
          style={[styles.input, inputStyle]}
        />
        {rightIcon && (
          <View style={[styles.iconContainer, rightIconContainerStyle]}>
            {renderNode(Icon, rightIcon)}
          </View>
        )}
      </Animated.View>
      {!!validationMessage && (
        <Text {...errorProps} style={[styles.error, errorStyle && errorStyle]}>
          {validationMessage}
        </Text>
      )}
    </View>
  );
};
export default forwardRef(BaseInput);
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: Colors.grey3,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  },
  input: {
    alignSelf: 'center',
    color: 'black',

    flex: 1,
  },
  error: {
    margin: 5,
    fontSize: 12,
    color: Colors.error,
  },
  label: {
    fontSize: 16,
    color: Colors.grey3,
    ...Fonts.medium,
  },
});
