import {Platform} from 'react-native';

import {ThemeManager,TextProps} from 'react-native-ui-lib';

import {Colors} from '@/styles';
import normalize from '@/utils/normalize';


const configTheme = () => {
  ThemeManager.setComponentTheme('Text', (props:any) => {
    const regular = props?.regular;
    const bold = props?.bold;
    const isHeading = props?.large || props?.h1 || props?.h2 || props?.h3;
    return {
      body: true,
      regular: true,
      style: {
        fontFamily:
          bold && isHeading
            ? 'Montserrat-Bold'
            : bold
            ? 'Roboto-Medium'
            : regular && isHeading
            ? 'Montserrat-Medium'
            : regular
            ? 'Roboto-Regular'
            : 'Roboto-Regular',
      },
    };
  });

  ThemeManager.setComponentTheme('Button', (props:any) => {
    const regular = props?.regular;
    const bold = props?.bold;
    const isHeading = props?.large || props?.h1 || props?.h2 || props?.h3;
    const webTokens = Object.keys(props).filter(key => key.includes('web'));
    const webProps = Platform.select({
      web: webTokens.reduce((acc, key) => {
        acc[key.replace('web-', '')] = props[key];
        return acc;
      }, {}),
      default: {},
    });

    return {
      body: true,
      regular: true,
      disabledBackgroundColor: '#E7EAEB',
      labelProps: {
        style: {
          fontFamily:
            bold && isHeading
              ? 'Montserrat-Bold'
              : bold
              ? 'Roboto-Medium'
              : regular && isHeading
              ? 'Montserrat-Medium'
              : regular
              ? 'Roboto-Regular'
              : 'Roboto-Regular',
        },
      },
      style: {
        height: normalize(48,'height'),
        borderRadius: 32,
      },
      ...webProps,
    };
  });
  ThemeManager.setComponentTheme('Checkbox', () => {
    return {
      color: Colors.primary5,
    };
  });
};

export default configTheme;
