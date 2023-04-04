import {TouchableOpacity, StyleSheet} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';
import {colors} from '../theme';
import {UserInfoType} from '../utils';
type MyImagePickerProps = {
  userInfo: UserInfoType;
  setUserInfo: (value: UserInfoType) => void;
};

export const MyImagePicker = (props: MyImagePickerProps): JSX.Element => {
  const selectImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1,
      });
      result.assets?.map(item => {
        console.log(item);
        const uri = item.uri;
        uri && props.setUserInfo({...props.userInfo, image_url: uri});
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity style={styles.cameraIcon} onPress={selectImage}>
      <Ionicon name="camera-outline" size={20} color="black" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cameraIcon: {
    position: 'absolute',
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: colors.primary_light,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 1,
    right: 1,
  },
});
