import React, {forwardRef, useRef, useState} from 'react';
import {LayoutChangeEvent, StyleSheet, ViewStyle,FlatList} from 'react-native';

import {FlashList} from '@shopify/flash-list';
import {View} from 'react-native-ui-lib';

interface StepperProps {
  containerStyle?: ViewStyle;
  contents: {[key: string]: React.ComponentType<any>};
  data?: any[];
}

// Especifica los tipos para las props y la ref
const Stepper = forwardRef<typeof View, StepperProps>(
  ({containerStyle, contents, data}, ref) => {
    const [width, setWidth] = useState<number | null>(null);
    let flatListRef = useRef(null);
    const steps = data
      ? data
      : Object.keys(contents).map(el => ({component: `${el}`}));
    const _renderItem = ({item, index}: any) => {
      const Component = contents[item.component];
      return (
        <View
          flex
          style={{
            width,
          }}>
          <Component />
        </View>
      );
    };

    return (
      <View
        onLayout={(e: LayoutChangeEvent) => {
          setWidth(e.nativeEvent.layout.width);
        }}
        flex
        style={[containerStyle && containerStyle]}>
        <FlatList
          ref={flatListRef}
          keyboardShouldPersistTaps={'always'}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item: any) => item.component}
          renderItem={_renderItem}
          data={steps}
        />
      </View>
    );
  },
);

export default Stepper;

// Estilos (si son necesarios)
const styles = StyleSheet.create({});
