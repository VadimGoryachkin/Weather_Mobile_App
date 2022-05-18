import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const MainAppOptions = {
    Thunderstorm: {
        iconName: 'weather-lightning',
        gradient: ['#141E30', '#243B55'],
        header: 'Гроза!',
        subheader: 'Выходить из дома не рекомендуется'
    },
    Drizzle: {
        iconName: 'weather-rainy',
        gradient: ['#3a7bd5', '#3a6073'],
        header: 'Лёгкий дождь',
        subheader: 'Рекомендуется взять с собой зонтик'
    },
    Rain: {
        iconName: 'weather-pouring',
        gradient: ['#000046', '#1CB5E0'],
        header: 'Дождь',
        subheader: 'Рекомендуется взять с собой зонтик и надеть непромокаемую обувь'
    },
    Snow: {
        iconName: 'snowflake',
        gradient: ['#83a4d4', '#b6fbff'],
        header: 'Снег',
        subheader: 'Рекомендуется тёплая одежда и термос с чаем'
    },
    Dust: {
        iconName: 'weather-windy-variant',
        gradient: ['#В79891', '#94716B'],
        header: 'Ветер с пылью',
        subheader: 'Рекомендуется надеть очки или другие аксессуары'
    },
    Smoke: {
        iconName: 'weather-windy',
        gradient: ['#56CCF2', '#2F80ED'],
        header: 'Дымка',
        subheader: 'Рекомендуется маска и шарф'
    },
    Haze: {
        iconName: 'weather-hazy',
        gradient: ['#3E5151', '#DECBA4'],
        header: 'Мгла',
        subheader: 'Рекомендуется по возможности не выходить из дома или обезопасить органы дыхания'
    },
    Mist: {
        iconName: 'weather-fog',
        gradient: ['#606c88', '#3f4c6b'],
        header: 'Туман',
        subheader: 'Рекомендуется избегать механического транспорта из-за ухудшения видимости'
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#56CCF2', '#2F80ED'],
        header: 'Чистое небо',
        subheader: 'Рекомендуется лёгкая одежда и головной убор'
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#757F9A', '#D7DDE8'],
        header: 'Облачно',
        subheader: 'Рекомендуется лёгкая одежда и хорошее настроение'
    },

}

export default function MainApp({ temp, condition }) {
    return (
        <LinearGradient
            colors={MainAppOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={MainAppOptions[condition].iconName} size={96} color="white" />
                <Text style={styles.temp}>{temp}°</Text>
            </View>
            <View style={styles.halfContainer}>
                <View style={styles.textstyle}>
                    <Text style={styles.header}>
                        {MainAppOptions[condition].header}
                    </Text>
                    <Text style={styles.subheader}>
                        {MainAppOptions[condition].subheader}
                    </Text>
                </View>
            </View>
        </LinearGradient>
    );
}

MainApp.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 42,
        color: "white",
    },
    header: {
        color: "white",
        fontSize: 47,
        fontWeight: "300",
        marginBottom: 20,
        textAlign: 'left'
    },
    subheader: {
        color: "white",
        fontWeight: "700",
        fontSize: 30,
        textAlign: 'left'
    },
    textstyle: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start'
    }
})
