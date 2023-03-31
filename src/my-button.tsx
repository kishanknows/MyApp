import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import type {PropsWithChildren} from 'react';
import type {ViewStyle, TextStyle, StyleProp} from 'react-native';

import {colors} from './theme';

type MyButtonProps = PropsWithChildren<{
  backgroundStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title?: string;
  onPress: () => void;
}>;

const MyButton = (props: MyButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.container, props.backgroundStyle]}>
      {props.children}
      <Text style={[styles.text, props.textStyle]}>
        {props.title ? props.title : 'Click me'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    elevation: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default MyButton;
