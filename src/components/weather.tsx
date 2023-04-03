import {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {colors} from '../theme';
import {getWeather, weatherDataType} from '../utils/weather-api';
import {Image} from 'react-native';
import {Text} from 'react-native';

type SearchInputProps = {
  setWeatherData: (data: weatherDataType) => void;
};

const SearchInput = (props: SearchInputProps): JSX.Element => {
  const [query, setQuery] = useState<string>('');

  const onSubmit = async () => {
    const data = await getWeather(query);
    props.setWeatherData(data);
    console.log(data);
  };

  return (
    <View style={styles.searchInputView}>
      <AntDesignIcon name="search1" size={25} color={colors.primary_dark} />
      <TextInput
        value={query}
        onChangeText={(text: string) => setQuery(text)}
        placeholder="search for a city"
        style={styles.searchInputText}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
};

const WeatherScreen = (): JSX.Element => {
  const [weatherData, setWeatherData] = useState<weatherDataType>();
  return (
    <View>
      <SearchInput setWeatherData={setWeatherData} />
      {weatherData ? (
        <View style={styles.weatherView}>
          <Text style={styles.locationText}>{weatherData.name}</Text>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Text style={styles.secondaryText}>Now</Text>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Text style={styles.tempText}>
                  {weatherData.temp}
                  {'\u00b0'}
                </Text>
                <Image
                  source={{uri: weatherData.icon_url}}
                  style={styles.weatherIcon}
                />
              </View>
              <Text style={styles.primaryText}>
                Feels like {weatherData.feels_like}
                {'\u00b0'}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'flex-end',
                flex: 1,
              }}>
              <Text style={styles.secondaryText}>{weatherData.main}</Text>
              <Text style={styles.primaryText}>
                Humidity: {weatherData.humidity}%
              </Text>
              <Text style={styles.primaryText}>
                Wind: {weatherData.wind_speed} m/s
              </Text>
              <Text style={styles.primaryText}>
                Pressure: {weatherData.pressure} hPa
              </Text>
            </View>
          </View>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInputView: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    backgroundColor: colors.secondary_light,
    alignItems: 'center',
    margin: 10,
    borderRadius: 40,
    borderWidth: 0.5,
  },
  searchInputText: {
    flex: 1,
    padding: 10,
    fontSize: 18,
  },
  weatherIcon: {
    height: '100%',
    width: 50,
    resizeMode: 'contain',
  },
  tempText: {
    fontSize: 40,
    fontWeight: '900',
    color: colors.primary_dark,
  },
  weatherView: {
    backgroundColor: colors.primary_light,
    borderRadius: 20,
    padding: 10,
    margin: 10,
  },
  locationText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
  },
  primaryText: {
    color: 'black',
    fontSize: 13,
  },
  secondaryText: {
    color: colors.primary_dark,
    fontSize: 16,
    fontWeight: '500',
  },
});

export default WeatherScreen;
