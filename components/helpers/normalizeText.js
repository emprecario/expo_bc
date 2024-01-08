import {Dimensions, PixelRatio} from 'react-native';

// Device's pixel ratio and dimensions
const devicePixelRatio = PixelRatio.get();
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

// iPhone 14's pixel ratio and dimensions
const basePixelRatio = 460 / PixelRatio.get(); // ppi density for iPhone 14
const baseWidth = 1170;
const baseHeight = 2532;

const normalize = size => {
  const scaleFactorWidth = deviceWidth / baseWidth;
  const scaleFactorHeight = deviceHeight / baseHeight;

  if (devicePixelRatio >= 2 && devicePixelRatio < 3) {
    if (scaleFactorWidth < 0.95) {
      return size * 1.25;
    } else if (scaleFactorHeight < 1) {
      return size;
    } else if (scaleFactorHeight >= 1 && scaleFactorHeight <= 1.15) {
      return size * 1.15;
    }

    return size * 1.25;
  } else if (devicePixelRatio >= 3 && devicePixelRatio < 3.5) {
    if (scaleFactorWidth <= 1) {
      return size;
    } else if (scaleFactorHeight < 1) {
      return size * 1.15;
    } else if (scaleFactorHeight >= 1 && scaleFactorHeight <= 1.2) {
     
      return size * 1.2;
    }
    
    return size * 1.27;
  } else if (devicePixelRatio >= 3.5) {
    
    if (scaleFactorWidth <= 1) {
      return size;
    } else if (scaleFactorHeight < 1) {
      return size * 1.2;
    } else if (scaleFactorHeight >= 1 && scaleFactorHeight <= 1.25) {
      return size * 1.25;
    }

    return size * 1.4;
  }

  return size;
};

export default normalize;
