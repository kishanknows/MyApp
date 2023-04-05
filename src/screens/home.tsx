import {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {MyButton} from '../components';
import {generatePassword} from '../utils';

type OptionProps = {
  option: number;
  optionText: string;
  selectedOption: number;
  setSelectedOption: (selectedOption: number) => void;
};

const Option = (props: OptionProps): JSX.Element => {
  const isSelected = props.option === props.selectedOption;
  return (
    <View style={styles.optionView}>
      {isSelected ? (
        <Icon name="circle-slice-8" size={25} color="black" />
      ) : (
        <Icon
          name="circle-outline"
          size={25}
          color="black"
          onPress={() => props.setSelectedOption(props.option)}
        />
      )}
      <Text style={styles.optionText}>{props.optionText}</Text>
    </View>
  );
};
export const HomeScreen = (): JSX.Element => {
  const [passwordLength, setPasswordLength] = useState(6);
  const [complexity, setComplexity] = useState(2);
  const [password, setPassword] = useState('');
  const options = ['weak', 'fair', 'strong', 'very strong'];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Password Generator</Text>
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
        }}>
        <View style={{flex: 1}}>
          <Text>Length</Text>
          <TextInput
            placeholder="Enter length of password"
            onChangeText={text => setPasswordLength(parseInt(text))}
            style={{borderBottomWidth: 0.2, marginBottom: 20}}
            keyboardType="number-pad"
          />
          <Text>Password</Text>
          <Text selectable={true} style={styles.passwordBackground}>
            {password}
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text>Complexity</Text>
          <View>
            {options.map((value, id) => (
              <Option
                key={id}
                option={id}
                optionText={value}
                selectedOption={complexity}
                setSelectedOption={setComplexity}
              />
            ))}
          </View>
        </View>
      </View>
      <MyButton
        title="generate"
        onPress={() => {
          const pass = generatePassword(passwordLength, complexity);
          setPassword(pass);
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
  heading: {
    fontSize: 20,
    fontWeight: '500',
    color: 'black',
  },
  optionView: {
    flexDirection: 'row',
    padding: 5,
  },
  optionText: {
    color: 'black',
    paddingLeft: 10,
    fontSize: 16,
  },
  passwordBackground: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    color: 'black',
  },
});
