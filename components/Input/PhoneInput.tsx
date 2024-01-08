import {useEffect, useRef, useState} from 'react';
import {Image, Platform, StyleSheet} from 'react-native';

import CountryPicker from 'react-native-country-picker-modal';
import PInput from 'react-native-phone-input';
import {Text, View} from 'react-native-ui-lib';

import Icon from '../Icon/Icon';
import AnimatedView from '../View/AnimatedView';
import {Colors} from '@/styles';
import {callout, regular} from '@/styles/Fonts';

const CustomFlag = ({imageSource, countryCode, ...rest}) => {
  return (
    <View row spread paddingH-8 centerV style={styles.customFlagContainer}>
      <Image style={styles.flagIconStyle} source={imageSource} />
      <Text regular callout>
        {countryCode}
      </Text>
      <Icon
        name={'chevron-down-outline'}
        type={'ionicon'}
        size={16}
        color={Colors.grey6}
      />
    </View>
  );
};

const PhoneInput = ({
  initialCountry = 'es',
  onChangePhoneNumber,
  error,
  autoFocus,
  initialValue = '+34',
  editable = true,
}) => {
  const animatedRef = useRef(null);
  const phoneInput = useRef(null);
  const [countryModalOpen, setCountryModalOpen] = useState(false);
  const [countryCode, setCountryCode] = useState('+34');
  const _onChangePhoneNumber = (value, iso) => {
    const countryCodeValue = phoneInput.current.getCountryCode();
    const phoneValue = phoneInput.current.getValue();
    onChangePhoneNumber?.(phoneValue);
    if (countryCodeValue !== countryCode) {
      setCountryCode(`+${countryCodeValue}`);
    }
  };
  const onPressFlag = () => {
    setCountryModalOpen(!countryModalOpen);
  };
  const _onSelectCountry = iso2 => {
    const countryCodeValue = phoneInput.current.getCountryCode();
    const phoneValue = phoneInput.current.getValue();
    onChangePhoneNumber?.(phoneValue);
    if (countryCodeValue !== countryCode) {
      setCountryCode(`+${countryCodeValue}`);
    }
  };
  useEffect(() => {
    if (error) {
      animatedRef.current?.shake();
    }
  }, [error]);

  return (
    <AnimatedView animated ref={animatedRef}>
      <PInput
        onPressFlag={onPressFlag}
        ref={phoneInput}
        initialCountry={initialCountry}
        renderFlag={props => (
          <CustomFlag {...props} countryCode={countryCode} />
        )}
        initialValue={initialValue}
        onChangePhoneNumber={_onChangePhoneNumber}
        onSelectCountry={_onSelectCountry}
        inputContainerStyle={styles.inputContainer}
        textStyle={styles.phoneInput}
        hideCountryCode={true}
        textProps={{
          placeholder: 'Número de teléfono',
          autoFocus,
        }}
        editable={false}
      />
      <CountryPicker
        onSelect={({cca2}) =>
          phoneInput.current &&
          phoneInput.current.selectCountry(cca2.toLowerCase())
        }
        withFilter
        filterProps={{
          placeholder: 'Buscar',
        
        }}
        translation="spa"
        modalProps={{
          visible: countryModalOpen,
          
        }}
        onClose={() => setCountryModalOpen(false)}
        containerButtonStyle={{height: 0}}
      />
      {error ? (
        <View marginV-16>
          <Text footnote color={Colors.error}>
            {(typeof error === 'string' && error) ||
              'Número de teléfono no válido'}
          </Text>
        </View>
      ) : null}
    </AnimatedView>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  customFlagContainer: {
    width: 110,
    height: 53,
    backgroundColor: Colors.grey2,
    borderRadius: 8,
  },
  flagIconStyle: {
    width: 20,
    height: 15,
  },
  phoneInput: {
    height: 53,
    ...regular,
    ...callout,
    ...Platform.select({}),
  },
  inputContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    paddingHorizontal: 16,
    backgroundColor: Colors.grey2,
  },
});
