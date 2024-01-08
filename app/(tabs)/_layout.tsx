import {Redirect, Tabs} from 'expo-router';

export default function TabsLayout() {
  const isLogin = false;
  if (!isLogin) {
    return <Redirect href="/onboarding" />;
  }
  return (
    <>
      <Tabs></Tabs>
    </>
  );
}
