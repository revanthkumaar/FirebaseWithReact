import React from 'react';
import {Text,View} from 'react-native'

export default function HomeScreen(props) {


    return(
        <View>
            <Text>Welcome, {props.name}</Text>
        </View>
    )
}