import {Text, View} from 'react-native';
import MyButton from './src/my-button';

const App = (): JSX.Element => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <MyButton onPress={() => {}} />
    </View>
  );
};

export default App;
