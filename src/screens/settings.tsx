import {View} from 'react-native';
import {MyList} from '../components';
import {useContext} from 'react';
import {UserContext, initialUserState} from '../utils';

export const SettingsScreen = (): JSX.Element => {
  const {userInfo, setUserInfo} = useContext(UserContext);
  return (
    <View>
      <MyList
        data={[
          {
            name: 'Clear Data',
            onPress: () => {
              setUserInfo(initialUserState);
            },
          },
          {name: 'About'},
        ]}
      />
    </View>
  );
};
