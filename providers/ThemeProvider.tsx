import React, {useEffect, useState} from 'react';

import {useFonts} from 'expo-font';


import {Colors, Fonts} from '@/styles';
import {Typography, Colors as WixColors} from 'react-native-ui-lib';

import configTheme from './ThemeManager';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [appIsReady, setAppIsReady] = useState(false);
  const [loaded, error] = useFonts({
    'Montserrat-Bold': require('@/assets/fonts/Montserrat-Bold.ttf'),
    'Montserrat-Medium': require('@/assets/fonts/Montserrat-Medium.ttf'),
    'Roboto-Medium': require('@/assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('@/assets/fonts/Roboto-Regular.ttf'),
  });
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);
  useEffect(() => {
    WixColors.loadColors(Colors);
    Typography.loadTypographies(Fonts);
    WixColors.loadDesignTokens({
      primaryColor: '#03519B',
    });
    configTheme();
    setAppIsReady(true);
  }, []);
  useEffect(() => {
    if (loaded) {
      // 
    }
  }, [loaded]);
  if (!appIsReady || !loaded) {
    return null;
  }
  return children;
};

export default ThemeProvider;
