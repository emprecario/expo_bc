import {Dimensions, PixelRatio, Platform} from 'react-native';

export var {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} =
  Dimensions.get('window');
// based on iPhone 13
const wscale: number = SCREEN_WIDTH / 375;
const hscale: number = SCREEN_HEIGHT / 812;

export default function normalize(
  size: number,
  based: 'width' | 'height' = 'width',
) {
  if (Platform.OS === 'web') return size;
  const newSize = based === 'height' ? size * hscale : size * wscale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  }
}
