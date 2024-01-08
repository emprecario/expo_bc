import React, {useEffect, useState} from 'react';
import {Platform, StyleSheet, useWindowDimensions} from 'react-native';

import {Image} from 'expo-image';

import {Button, Text, View} from 'react-native-ui-lib';

// import {useCommonStore} from '@/stores';
import {Colors, Fonts} from '@/styles';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const PhoneMockupProvider: React.FC<ThemeProviderProps> = ({children}) => {
  // const {isMockup, setIsMockup, setWidth, setHeight} = useCommonStore();
  const {width: screenWidth, height: screenHeight} = useWindowDimensions();
  const [mockupEnabled, setMockupEnabled] = useState(true);
  // useEffect(() => {
  //   if (Platform.OS !== 'web' && screenWidth > 725) {
  //     setIsMockup(true);
  //   } else {
  //     setIsMockup(false);
  //   }
  // }, [screenHeight, screenWidth]);
  if (Platform.OS !== 'web' || screenWidth < 725 || !mockupEnabled)
    return children;
  return (
    <>
      <div 

        style={{
          overflowY: 'auto',
          height: '100vh',
          // backgroundColor: Colors.white,
        }}
        >
        <View
          flex
          row
          centerH
          style={{
            minHeight: 750,
            height: '100%',
            maxHeight: 1024,
          }}>
          <View
            flex
            marginV-45
            style={{
              maxWidth: 455,
              minHeight: 750,
              backgroundColor: Colors.white,

              borderWidth: 3,
              borderColor: Colors.grey4,
              borderTopEndRadius: 33,
              borderTopStartRadius: 33,
              borderBottomEndRadius: 33,
              borderBottomStartRadius: 33,
            }}>
            <View
              onLayout={e => {
                const {height, width} = e.nativeEvent.layout;
                // setHeight(height);
                // setWidth(width);
              }}
              flex
              br50
              style={{
                overflow: 'hidden',
                borderWidth: 6,
                borderColor: Colors.black,
                borderTopEndRadius: 30,
                borderTopStartRadius: 30,
                borderBottomEndRadius: 30,
                borderBottomStartRadius: 30,
              }}>
              {children}
            </View>
          </View>
          <div
            style={{
              alignSelf: 'center',
              marginLeft: 34,
              maxWidth: 340,
            }}>
            <Image
              style={{
                width: 64,
                height: 64,
                borderRadius: 10,
              }}
              source={require('@/assets/images/icon.png')}
            />
            <Text h1 bold>
              Buscoclases
            </Text>
            <View>
              <Text  body>
                Buscoclases es una plataforma que conecta estudiantes y profesores
              </Text>
            </View>
            <Button
              marginT-20
              br40
              disabled
              backgroundColor={Colors.black}
              style={{
                width: 325,
                minHeight: 45,
              }}>
              <Text callout color={Colors.white}>
                Próximamente para iOS & Android
              </Text>
            </Button>
            <Button
              marginT-20
              br40
              backgroundColor={Colors.black}
              onPress={() => {
                // setMockupEnabled(false);
              }}
              style={{
                width: 325,

                minHeight: 45,
              }}>
              <Text callout color={Colors.white}>
                Pantalla completa
              </Text>
            </Button>
          </div>
        </View>
      </div>
    </>
  );
};

export default PhoneMockupProvider;

const styles = StyleSheet.create({});
