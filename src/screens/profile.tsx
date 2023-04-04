import {
  Image,
  StyleSheet,
  Modal,
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  Pressable,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

import {MyImagePicker} from '../components';
import {useContext, useState} from 'react';
import {UserContext} from '../utils';

export const ProfileScreen = (): JSX.Element => {
  const {userInfo, setUserInfo} = useContext(UserContext);
  const [modalShown, setModalShown] = useState<boolean>(false);
  const [usernameField, setUsernameField] = useState<string>(userInfo.username);
  const [userBioField, setUserBioField] = useState<string>(userInfo.bio);

  return (
    <View style={styles.container}>
      <View style={styles.avatarBackground}>
        <View style={styles.avatarView}>
          {userInfo?.image_url ? (
            <Image source={{uri: userInfo.image_url}} style={styles.avatar} />
          ) : (
            <Ionicon name="person" size={120} color="white" />
          )}
          <MyImagePicker userInfo={userInfo} setUserInfo={setUserInfo} />
        </View>
      </View>
      <View style={styles.details}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.title}>{userInfo.username}</Text>
          <Ionicon
            name="pencil"
            size={22}
            color="blue"
            onPress={() => setModalShown(true)}
          />
        </View>
        <Text>{userInfo.bio}</Text>
      </View>
      <Modal visible={modalShown} transparent={true}>
        <TouchableWithoutFeedback onPress={() => setModalShown(false)}>
          <View style={styles.modalBackground}></View>
        </TouchableWithoutFeedback>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Edit Profile</Text>
          <Text>Username</Text>
          <TextInput
            value={usernameField}
            onChangeText={text => setUsernameField(text)}
            style={{
              padding: 0,
              borderBottomWidth: 0.2,
              marginBottom: 10,
            }}
          />
          <Text>Bio</Text>
          <TextInput
            value={userBioField}
            onChangeText={text => setUserBioField(text)}
            style={{
              padding: 0,
              borderBottomWidth: 0.2,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 20,
            }}>
            <Pressable
              onPress={() => {
                setUserBioField(userInfo.bio);
                setUsernameField(userInfo.username);
                setModalShown(false);
              }}>
              <Text style={{color: 'blue', elevation: 5}}>Cancel</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                setUserInfo({
                  ...userInfo,
                  username: usernameField,
                  bio: userBioField,
                });
                setModalShown(false);
              }}>
              <Text style={{color: 'blue', elevation: 5}}>Save</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  avatarView: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  avatar: {
    borderRadius: 500,
    aspectRatio: 1,
    height: '100%',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  modal: {
    position: 'absolute',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '80%',
    top: '30%',
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  modalBackground: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  details: {
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  avatarBackground: {
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
    height: '30%',
  },
  modalTitle: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
    color: 'black',
    marginBottom: 10,
  },
});
