import {useState, useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {MyButton} from '../components';
import {generatePassword, UserContext} from '../utils';

export const HomeScreen = (): JSX.Element => {
  const [passwordLength, setPasswordLength] = useState(6);
  const [passwordComplexity, setPasswordComplexity] = useState();
  const password = generatePassword(1000, 'very strong');
  const {userInfo, setUserInfo} = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Text>{password}</Text>
      <Text>{userInfo.username}</Text>
      <MyButton
        onPress={() => {
          setUserInfo({...userInfo, username: 'kishan'});
        }}
      />
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
