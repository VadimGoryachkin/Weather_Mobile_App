import react from "react";
import { View, Text, Button, StyleSheet, Image } from 'react-native';


export default function WelcomePage({ navigation }) {

    const loadScene = () => {
        navigation.navigate('MainApp');
    }

    return (
        <View style={styles.container}>
            <View style={styles.fortext}>

                <Text style={styles.text1}>
                    Здравствуйте!
                </Text>

                <Text style={styles.text2}>
                    Благодарю за выбор моего погодного приложения!!!
                </Text>

            </View>
            <View style={styles.forlogo}>
                <Image style={styles.logo} source={require('./assets/cover.gif')} />
            </View>

            <View style={styles.fortext}>

                <Text style={styles.text3}>
                    Для того, чтобы получить прогноз погоды, нажмите кнопку "Далее"
                </Text>

            </View>

            <View style={styles.forbutton}>
                <Button
                    title="Далее"
                    color={'green'}
                    onPress={loadScene} />
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightyellow',
        alignItems: 'center',
        justifyContent: 'center'
    },
    fortext: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text1: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginTop: 40
    },
    text2: {
        fontSize: 17,
        color: 'darkblue',
        textAlign: 'center',
    },
    text3: {
        fontSize: 14,
        color: '#dc143c',
        textAlign: 'center',
    },
    forlogo: {
        flex: 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: '100%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    forbutton: {
        paddingBottom: 40
    }
});