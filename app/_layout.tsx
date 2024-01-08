import {Slot} from 'expo-router';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import PhoneMockupProvider from '@/providers/PhoneMockupProvider';
import ThemeProvider from '@/providers/ThemeProvider';

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <>
      <SafeAreaProvider>
        <ThemeProvider>
          <PhoneMockupProvider>
            <Slot />
          </PhoneMockupProvider>
        </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
}
