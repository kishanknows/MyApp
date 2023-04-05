import {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type AlertPopupProps = {
  message: string;
  setPopupShown: (popupShown: boolean) => void;
};
export const AlertPopup = (props: AlertPopupProps): JSX.Element => {
  useEffect(() => {
    setTimeout(() => {
      props.setPopupShown(false);
    }, 2000);
  }, []);

  return (
    <View style={styles.background}>
      <Text style={styles.message}>{props.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    bottom: '10%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    elevation: 10,
  },
  message: {
    color: 'black',
  },
});
