import {FlatList, StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme';

type MyListProps = {
  data: ArrayLike<ItemProps>;
};

type ItemProps = {
  name: string;
};

const Item = (props: ItemProps): JSX.Element => {
  return (
    <View style={styles.itemView}>
      <Text style={styles.itemText}>{props.name}</Text>
    </View>
  );
};

const MyList = (props: MyListProps): JSX.Element => {
  return (
    <FlatList
      data={props.data}
      renderItem={({item}): JSX.Element => <Item name={item.name} />}
    />
  );
};

const styles = StyleSheet.create({
  itemView: {
    padding: 20,
    backgroundColor: colors.primary_dark,
    margin: 2,
    borderRadius: 5,
  },
  itemText: {
    color: 'white',
    fontSize: 18,
  },
});

export default MyList;
