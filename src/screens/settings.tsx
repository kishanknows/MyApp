import {View, StyleSheet} from 'react-native';
import {MyList, AlertPopup} from '../components';
import {useContext, useState} from 'react';
import {UserContext, initialUserState} from '../utils';

export const SettingsScreen = (): JSX.Element => {
  const {userInfo, setUserInfo} = useContext(UserContext);
  const [popupShown, setPopupShown] = useState(false);
  return (
    <View style={styles.background}>
      <MyList
        data={[
          {
            name: 'Clear Data',
            description: 'clears user and account info',
            onPress: () => {
              setUserInfo(initialUserState);
              setPopupShown(true);
            },
          },
        ]}
      />
      {popupShown ? (
        <AlertPopup setPopupShown={setPopupShown} message="Data cleared" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});
