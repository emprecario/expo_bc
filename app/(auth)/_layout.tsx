import {Stack} from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'onboarding',
};
const Layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default Layout;
