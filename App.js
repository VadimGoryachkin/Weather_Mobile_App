import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
import * as Location from 'expo-location';
import App from './Navigator';
import MainApp from './MainApp';
import axios from 'axios';

const API_KEY = 'ccc0dd73c8b1ebba43683d1d3f4d0b73';

export default class extends React.Component {

    state = {
        isLoading: true
    }

    getWeather = async (latitude, longitude) => {
        const { data: { main: { temp }, weather } } = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        this.setState({
            isLoading: false,
            temp: temp,
            condition: weather[0].main,
        });
        console.log(data);
    }

    getLocation = async () => {
        try {
            await Location.requestForegroundPermissionsAsync();
            const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
            this.getWeather(latitude, longitude);
        } catch (error) {
            Alert.alert('Не удалось определить вашу геопозицию', "Проверьте настройки геолокции");
        }
    }

    componentDidMount() {
        this.getLocation();
    }

    render() {
        const { isLoading, temp, condition } = this.state;
        return (
            isLoading ? <App /> : <MainApp temp={Math.round(temp)} condition={condition} />
        );
    }
}