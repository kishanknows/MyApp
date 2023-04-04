import {FlatList, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../theme';

type MyListProps = {
  data: ArrayLike<ItemProps>;
};

type ItemProps = {
  name: string;
  onPress?: () => void;
};

const Item = (props: ItemProps): JSX.Element => {
  return (
    <TouchableOpacity style={styles.itemView} onPress={props.onPress}>
      <Text style={styles.itemText}>{props.name}</Text>
    </TouchableOpacity>
  );
};

export const MyList = (props: MyListProps): JSX.Element => {
  return (
    <FlatList
      data={props.data}
      renderItem={({item}): JSX.Element => (
        <Item name={item.name} onPress={item.onPress} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemView: {
    padding: 20,
    backgroundColor: colors.primary_light,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
  },
  itemText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '600',
  },
});
