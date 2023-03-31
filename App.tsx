import {StyleSheet, Text, View} from 'react-native';
import MyButton from './src/components/my-button';
import Weather from './src/components/weather';

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <Weather />
      <MyButton onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
