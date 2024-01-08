import React from 'react';
import {
  I18nManager,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

import {Colors} from '@/styles';

const customIcons = {};

//we need to type type string as an enum of options to render icons type

export type IconType =
  | 'zocial'
  | 'octicon'
  | 'material'
  | 'material-community'
  | 'ionicon'
  | 'foundation'
  | 'evilicon'
  | 'entypo'
  | 'font-awesome'
  | 'font-awesome-5'
  | 'simple-line-icon'
  | 'feather'
  | 'antdesign'
  | 'fontisto';

const getIconType = type => {
  switch (type) {
    case 'zocial':
      return ZocialIcon;
    case 'octicon':
      return OcticonIcon;
    case 'material':
      return MaterialIcon;
    case 'material-community':
      return MaterialCommunityIcon;
    case 'ionicon':
      return Ionicon;
    case 'foundation':
      return FoundationIcon;
    case 'evilicon':
      return EvilIcon;
    case 'entypo':
      return EntypoIcon;
    case 'font-awesome':
      return FAIcon;
    case 'simple-line-icon':
      return SimpleLineIcon;
    case 'feather':
      return FeatherIcon;
    case 'antdesign':
      return AntIcon;
    case 'fontisto':
      return FontistoIcon;
    case 'font-awesome-5':
      return FontAwesome5;

    default:
      if (Object.prototype.hasOwnProperty.call(customIcons, type)) {
        return customIcons[type];
      }
      return MaterialIcon;
  }
};

const Icon = props => {
  const {
    type,
    name,
    size,
    color,
    iconStyle,
    underlayColor,
    reverse,
    raised,
    containerStyle,
    reverseColor,
    disabled,
    disabledStyle,
    isRotateRTL,
    onPress,
    Component = onPress ? TouchableOpacity : View,
    ...attributes
  } = props;

  const IconComponent = getIconType(type);
  const getBackgroundColor = () => {
    if (reverse) {
      return color;
    }

    return raised ? 'white' : 'transparent';
  };

  return (
    <Component onPress={onPress} style={[containerStyle && containerStyle]}>
      <View
        {...attributes}
        underlayColor={reverse ? color : underlayColor || color}
        style={StyleSheet.flatten([
          (reverse || raised) && styles.button,
          (reverse || raised) && {
            borderRadius: size + 4,
            height: size * 2 + 4,
            width: size * 2 + 4,
          },
          raised && styles.raised,
          {
            backgroundColor: getBackgroundColor(),
            alignItems: 'center',
            justifyContent: 'center',
          },
          disabled && styles.disabled,
          disabled && disabledStyle,
        ])}
        {...(onPress && {disabled})}>
        <IconComponent
          disabled={true}
          testID="iconIcon"
          style={StyleSheet.flatten([
            {
              backgroundColor: 'transparent',
            },
            isRotateRTL &&
              I18nManager.isRTL && {
                transform: [{scaleX: -1}],
              },
            iconStyle && iconStyle,
          ])}
          size={size}
          name={name}
          color={reverse ? reverseColor : color}
        />
      </View>
    </Component>
  );
};

Icon.defaultProps = {
  underlayColor: 'white',
  reverse: false,
  raised: false,
  size: 24,
  color: Colors.secondary,
  reverseColor: 'white',
  disabled: false,
  type: 'feather',
  isRotateRTL: false,
};

const styles = StyleSheet.create({
  button: {
    margin: 7,
  },
  raised: {
    ...Platform.select({
      android: {
        elevation: 2,
      },
      default: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 1,
        shadowRadius: 1,
      },
    }),
  },
  disabled: {
    backgroundColor: '#D1D5D8',
  },
});

export default Icon;
