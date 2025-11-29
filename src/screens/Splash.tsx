import React, {useState, useEffect, useRef} from 'react';
import {
    View, 
    Text,
    Image,
    StyleSheet,
    Button,
    TouchableOpacity,
    Animated,
} from 'react-native';

function SplashScreen() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0.5)).current;
    
    useEffect(() => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                tension: 50,
                friction: 7,
                useNativeDriver: true,
            })
        ]).start();
    }, []);

    return (
        <View style={styles.container}>
            
            <Animated.View style={[
                styles.plate,
                {
                    opacity: fadeAnim,
                    transform: [{ scale: scaleAnim }]
                }
            ]}>
                <Image 
                source={require('../assets/images/placa.png')}
                style={styles.logo}
                />
               
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#577de6ff', // Azul profesional
    },
    plate: {
        width: 245,
        height: 150,
        backgroundColor: '#FDE047', // Amarillo placa particular colombiana
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
        position: 'absolute'
    },
    logo: {
        width: 500,
        height: 230,
        resizeMode: 'contain',
        position: 'absolute',
        top: -40,
        tintColor: '#000000ff',
    },
})
export default SplashScreen;