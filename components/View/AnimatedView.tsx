import React, {forwardRef, useImperativeHandle} from 'react';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

const AnimatedView = forwardRef((props, ref) => {
  const {style} = props;
  const shakeValue = useSharedValue(0);
  const uas = useAnimatedStyle(() => {
    return {transform: [{translateX: shakeValue.value}]};
  });
  useImperativeHandle(ref, () => ({
    shake: () => {
      shakeValue.value = withSequence(
        withTiming(10, {duration: 100}),
        withTiming(-10, {duration: 100}),
        withTiming(10, {duration: 100}),
        withTiming(0, {duration: 100}),
      );
    },
  }));
  return (
    <Animated.View ref={ref} style={[uas, style && style]}>
      {props.children}
    </Animated.View>
  );
});

export default AnimatedView;
