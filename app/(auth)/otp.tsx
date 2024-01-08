import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';

import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';

import PInput from 'react-native-phone-input';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ProgressBar, View} from 'react-native-ui-lib';

import {HeaderLeft, Stepper} from '@/components';
import {PhoneInputContainer} from '@/containers';
import {Colors} from '@/styles';
import normalize from '@/utils/normalize';

const Otp = () => {
  const insets = useSafeAreaInsets();
  return (
    <>
      <StatusBar style="dark" />
      <Stack.Screen
        options={{
          headerShown: true,
          headerBackVisible: false,
          headerShadowVisible: false,
          gestureEnabled: false,
          contentStyle: {
            backgroundColor: Colors.white,
          },
          header: () => (
            <View
              backgroundColor="white"
              row
              centerV
              spread
              style={{
                paddingTop: insets.top,
                paddingHorizontal: Platform.OS == 'web' ? 0 : normalize(16),
              }}>
              <HeaderLeft />
              <ProgressBar
                progressColor={Colors.primary}
                progress={35}
                style={{
                  width: '50%',
                  height: normalize(5),
                  backgroundColor: '#D6DADB',
                }}
              />
              <View
                style={{
                  width: normalize(36),
                }}
              />
            </View>
          ),
        }}
      />
      <View flex>
        <Stepper
          contents={{
            PhoneInputContainer,
          }}
        />
      </View>
    </>
  );
};

export default Otp;

const styles = StyleSheet.create({});
