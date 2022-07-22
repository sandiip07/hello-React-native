import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
    
    let [counter , setCounter] = useState(0);

    Increment = () => {
        setCounter(counter++);
    }

    Decrement = () => {
        setCounter(counter--);
    }

    Reset = () => {
        setCounter(counter*0);
    }

    return(
        <View>

            <Text style={{textAline:'center'}}> counter: </Text>
            <Text>{counter}</Text>
            <Button
             title='Increament' 
             onPress={Increment}
             />

            <Button 
            title='Decreament' 
            onPress={Decrement}
            />

            <Button 
            title='Reset'
             onPress={Reset}
             />

        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});