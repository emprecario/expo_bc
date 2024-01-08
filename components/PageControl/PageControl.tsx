import {useEffect} from 'react';
import {StyleSheet} from 'react-native';

import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {View} from 'react-native-ui-lib';

import {Colors} from '@/styles';
import normalize from '@/utils/normalize';

interface PageControlProps {
  numOfPages: number;
  current: number;
}

const PageControl: React.FC<PageControlProps> = ({numOfPages, current}) => {
  return (
    <>
      <View
        row
        style={{
          gap: normalize(8),
        }}>
        {new Array(numOfPages).fill(null).map((_, index) => {
          return <Dot key={`dot-${index}`} isActive={index === current} />;
        })}
      </View>
    </>
  );
};
export default PageControl;
const Dot = ({isActive = false}) => {
  const initValue = normalize(8);
  const endValue = normalize(32);
  const dotWidth = useSharedValue(initValue);
  const uas = useAnimatedStyle(() => {
    return {
      width: withTiming(dotWidth.value),
      backgroundColor: interpolateColor(
        dotWidth.value,
        [initValue, endValue],
        [Colors.grey3, Colors.primary],
      ),
    };
  });
  useEffect(() => {
    if (isActive) {
      dotWidth.value = normalize(32);
    } else {
      dotWidth.value = normalize(8);
    }
  }, [isActive]);
  return <Animated.View style={[styles.dot, uas]}></Animated.View>;
};
const styles = StyleSheet.create({
  dot: {
    width: normalize(8),
    height: normalize(8, 'height'),
    borderRadius: normalize(4),
    backgroundColor: Colors.grey3,
  },
});
