import AntIcon from '@expo/vector-icons/AntDesign';
import EntypoIcon from '@expo/vector-icons/Entypo';
import EvilIcon from '@expo/vector-icons/EvilIcons';
import FeatherIcon from '@expo/vector-icons/Feather';
import FAIcon from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontistoIcon from '@expo/vector-icons/Fontisto';
import FoundationIcon from '@expo/vector-icons/Foundation';
import Ionicon from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcon from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import OcticonIcon from '@expo/vector-icons/Octicons';
import SimpleLineIcon from '@expo/vector-icons/SimpleLineIcons';
import ZocialIcon from '@expo/vector-icons/Zocial';

const customIcons = {};

export default (type: string) => {
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
    case 'font-awasome-5':
      return FontAwesome5;
    default:
      return MaterialIcon;
  }
};
