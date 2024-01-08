import {useState} from 'react';
import {StyleSheet} from 'react-native';

import {Image} from 'expo-image';
import {router} from 'expo-router';
import Head from 'expo-router/head';
import {StatusBar} from 'expo-status-bar';

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import {Button, Text, View} from 'react-native-ui-lib';

import {Images} from '@/assets/images';
import Logo from '@/assets/svg/Logo';
import PageControl from '@/components/PageControl/PageControl';
import * as Colors from '@/styles/Colors';
import normalize from '@/utils/normalize';

const data = [
  {
    title: '¿Quieres aprender? ¿Quieres enseñar?',
    subtitle: ' ¡Regístrate en Buscoclases!',
    image: Images.onboarding.onboarding01,
  },
  {
    title: 'Enseñanza personalizada ',
    subtitle:
      'Donde los profesores encuentran a sus alumnos ideales y los estudiantes descubren a sus mentores perfectos',
    image: Images.onboarding.onboarding02,
  },
  {
    title: 'Tecnología al servicio de la educación.',
    subtitle: 'La APP esencial para aprender, crecer, ¡y alcanzar tus metas! ',
    image: Images.onboarding.onboarding03,
  },
];

export default function Page() {
  const [width, setWidth] = useState(1);
  const [current, setCurrent] = useState(0);
  const progress = useSharedValue(0);
  const onLayout = e => {
    const {width} = e.nativeEvent.layout;
    setWidth(width);
  };
  return (
    <>
      <Head>
        <title>Buscoclases | Inicio </title>
        <meta name="description" content="Buscoclases app" />
      </Head>
      <StatusBar style="light" />
      <View spread flex useSafeArea backgroundColor={Colors.primaryHeavy}>
        <View>
          <View padding-16>
            <Logo />
          </View>
          <View marginT-40 onLayout={onLayout}>
            <Carousel
              loop
              autoPlay
              data={data}
              height={normalize(475, 'height')}
              width={width * 0.85 || 1}
              style={{width: '100%', marginLeft: 16, overflow: 'visible'}}
              onProgressChange={(_, e) => {
                progress.value = e;
              }}
              onSnapToItem={setCurrent}
              scrollAnimationDuration={1500}
              renderItem={({item, index}) => {
                const marginTop = normalize(24, 'height');
                const styledAnimated = useAnimatedStyle(() => {
                  const inputRange =
                    index === 0
                      ? [index, index + 1, index + 2, index + 3]
                      : [index - 1, index, index + 1];
                  const outputRange = index === 0 ? [1, 0, 0, 1] : [0, 1, 0];
                  return {
                    opacity: interpolate(
                      progress.value,
                      inputRange,
                      outputRange,
                    ),
                    marginTop,
                  };
                });
                return (
                  <>
                    <View>
                      <View>
                        <Image source={item.image} style={styles.image} />
                      </View>
                      <Animated.View style={styledAnimated}>
                        <Text marginT-20 h1 bold white>
                          {item.title}
                        </Text>
                        <Text marginT-4 h3 white>
                          {item.subtitle}
                        </Text>
                      </Animated.View>
                    </View>
                  </>
                );
              }}
            />
            <View marginL-16 marginT-16 marginB-16>
              <PageControl
                numOfPages={data.length}
                current={current}
                progress={progress}
              />
            </View>
          </View>
        </View>
        <View row spread paddingH-16 marginB-16>
          <Button
            style={[
              styles.button,
              {
                marginRight: 8,
              },
            ]}
            backgroundColor={Colors.primary3}
            label={
              <Text bold callout white>
                Iniciar sesión
              </Text>
            }
            onPress={() => router.push('/login')}
          />
          <Button
            style={[
              styles.button,
              {
                marginLeft: 8,
              },
            ]}
            backgroundColor={Colors.white}
            label={
              <Text regular callout color={Colors.grey7}>
                Registrarse
              </Text>
            }
            onPress={() => router.push('/sign-in')}
          />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    width: normalize(240, 'height'),
    height: normalize(240, 'height'),
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    borderBottomRightRadius: 80,
    borderBottomLeftRadius: 80,
  },
  button: {
    flex: 1,
    height: normalize(48, 'height'),
    borderRadius: 32,
  },
});
