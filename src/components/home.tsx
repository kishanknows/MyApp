import {View, StyleSheet} from 'react-native';
import MyButton from './my-button';

const HomeScreen = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <MyButton onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
